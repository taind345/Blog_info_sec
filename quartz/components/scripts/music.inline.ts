// Background Music Player for Security Blog (Cyberpunk / Tactical HUD Theme)
// Supports Vinyl Record Spinning Animation, Floating Music Notes, Gapless SPA Playback, and Track Selection

interface Track {
  id: number
  file: string
  title: string
  artist: string
  src: string
}

const FALLBACK_PLAYLIST: Track[] = [
  {
    id: 0,
    file: "Chờ Anh Nhé (feat. Hoàng Rob) [0chK12qHGfM].mp3",
    title: "Chờ Anh Nhé",
    artist: "Hoàng Rob",
    src: "static/music/Ch%E1%BB%9D%20Anh%20Nh%C3%A9%20(feat.%20Ho%C3%A0ng%20Rob)%20%5B0chK12qHGfM%5D.mp3",
  },
  {
    id: 1,
    file: "Tình Yêu Mới - Chillies (Official Performance Video) [DZyeMmeQo-U].mp3",
    title: "Tình Yêu Mới",
    artist: "Chillies",
    src: "static/music/T%C3%ACnh%20Y%C3%AAu%20M%E1%BB%9Bi%20-%20Chillies%20(Official%20Performance%20Video)%20%5BDZyeMmeQo-U%5D.mp3",
  },
]

interface BgmGlobalState {
  audio: HTMLAudioElement
  playlist: Track[]
  currentIndex: number
  isPlaying: boolean
  isMuted: boolean
  volume: number
  mode: "all" | "one" | "shuffle"
  hasUserInteracted: boolean
  initialized: boolean
}

declare global {
  interface Window {
    __bgm_player?: BgmGlobalState
  }
}

function getBasePath(): string {
  const b = document.body?.dataset?.basepath || ""
  return b.replace(/\/$/, "")
}

function resolveAssetUrl(relPath: string): string {
  const base = getBasePath()
  const clean = relPath.replace(/^\/+/, "")
  return base ? `${base}/${clean}` : `/${clean}`
}

function formatTime(secs: number): string {
  if (isNaN(secs) || secs < 0) return "00:00"
  const m = Math.floor(secs / 60)
  const s = Math.floor(secs % 60)
  return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`
}

function initBgmPlayer() {
  if (typeof window === "undefined" || !document.body) return

  // 1. Initialize Global Singleton Audio Player
  if (!window.__bgm_player) {
    const audio = new Audio()
    audio.preload = "auto"

    const savedVol = parseFloat(localStorage.getItem("bgm_vol") || "0.7")
    const savedIdx = parseInt(localStorage.getItem("bgm_idx") || "0", 10)
    const savedMode = (localStorage.getItem("bgm_mode") || "all") as "all" | "one" | "shuffle"
    const userPaused = localStorage.getItem("bgm_user_paused") === "true"

    audio.volume = isNaN(savedVol) ? 0.7 : Math.max(0, Math.min(1, savedVol))

    window.__bgm_player = {
      audio,
      playlist: [...FALLBACK_PLAYLIST],
      currentIndex: isNaN(savedIdx) ? 0 : Math.max(0, savedIdx),
      isPlaying: false,
      isMuted: false,
      volume: audio.volume,
      mode: savedMode,
      hasUserInteracted: false,
      initialized: false,
    }

    // Attempt to fetch dynamic playlist.json from server
    fetch(resolveAssetUrl("static/music/playlist.json"))
      .then((res) => (res.ok ? res.json() : null))
      .then((data: Track[]) => {
        if (Array.isArray(data) && data.length > 0 && window.__bgm_player) {
          window.__bgm_player.playlist = data
          if (window.__bgm_player.currentIndex >= data.length) {
            window.__bgm_player.currentIndex = 0
          }
          renderTracklist()
          updatePillInfo()
        }
      })
      .catch(() => {})

    // Audio Event Listeners
    audio.addEventListener("play", () => {
      if (window.__bgm_player) window.__bgm_player.isPlaying = true
      updatePlayVisuals(true)
      localStorage.setItem("bgm_user_paused", "false")
      hideAutoplayHint()
    })

    audio.addEventListener("pause", () => {
      if (window.__bgm_player) window.__bgm_player.isPlaying = false
      updatePlayVisuals(false)
    })

    audio.addEventListener("ended", () => {
      if (!window.__bgm_player) return
      if (window.__bgm_player.mode === "one") {
        audio.currentTime = 0
        audio.play().catch(() => {})
      } else {
        playNextTrack()
      }
    })

    audio.addEventListener("timeupdate", () => {
      updateProgress()
    })

    audio.addEventListener("loadedmetadata", () => {
      updateDurationDisplay()
    })

    // Setup initial source
    loadTrack(window.__bgm_player.currentIndex, false)

    // Autoplay attempt (if not explicitly paused by user)
    if (!userPaused) {
      setTimeout(() => {
        attemptAutoplay()
      }, 600)
    }
  }

  // 2. Render or Re-attach DOM Elements
  ensurePlayerDom()
  updatePlayVisuals(window.__bgm_player.isPlaying)
  updatePillInfo()
  renderTracklist()
}

function loadTrack(index: number, autoPlay: boolean = true) {
  const p = window.__bgm_player
  if (!p || p.playlist.length === 0) return

  if (index < 0) index = p.playlist.length - 1
  if (index >= p.playlist.length) index = 0

  p.currentIndex = index
  localStorage.setItem("bgm_idx", String(index))

  const track = p.playlist[index]
  const fullSrc = resolveAssetUrl(track.src)

  if (p.audio.src !== fullSrc && !p.audio.src.endsWith(encodeURI(track.file))) {
    p.audio.src = fullSrc
    p.audio.load()
  }

  updatePillInfo()
  renderTracklist()

  if (autoPlay) {
    p.audio.play().catch((err) => {
      console.log("[BGM] Autoplay policy prevented playback:", err)
      showAutoplayHint()
    })
  }
}

function playNextTrack() {
  const p = window.__bgm_player
  if (!p || p.playlist.length === 0) return

  if (p.mode === "shuffle") {
    let nextIdx = p.currentIndex
    if (p.playlist.length > 1) {
      while (nextIdx === p.currentIndex) {
        nextIdx = Math.floor(Math.random() * p.playlist.length)
      }
    }
    loadTrack(nextIdx, true)
  } else {
    loadTrack(p.currentIndex + 1, true)
  }
}

function playPrevTrack() {
  const p = window.__bgm_player
  if (!p || p.playlist.length === 0) return
  if (p.audio.currentTime > 3) {
    p.audio.currentTime = 0
    return
  }
  loadTrack(p.currentIndex - 1, true)
}

function togglePlayPause() {
  const p = window.__bgm_player
  if (!p) return

  hideAutoplayHint()
  if (p.audio.paused) {
    p.audio.play().then(() => {
      localStorage.setItem("bgm_user_paused", "false")
    }).catch((err) => {
      console.warn("[BGM] Play error:", err)
    })
  } else {
    p.audio.pause()
    localStorage.setItem("bgm_user_paused", "true")
  }
}

function attemptAutoplay() {
  const p = window.__bgm_player
  if (!p) return

  p.audio.play().then(() => {
    p.isPlaying = true
    updatePlayVisuals(true)
    hideAutoplayHint()
  }).catch(() => {
    // Autoplay blocked by browser policy: show interactive HUD hint & wait for first gesture
    showAutoplayHint()
    setupFirstGestureTrigger()
  })
}

function setupFirstGestureTrigger() {
  const unlockAudio = () => {
    const p = window.__bgm_player
    if (p && p.audio.paused && localStorage.getItem("bgm_user_paused") !== "true") {
      p.audio.play().then(() => {
        hideAutoplayHint()
      }).catch(() => {})
    }
    window.removeEventListener("click", unlockAudio)
    window.removeEventListener("keydown", unlockAudio)
    window.removeEventListener("touchstart", unlockAudio)
  }

  window.addEventListener("click", unlockAudio, { once: true })
  window.addEventListener("keydown", unlockAudio, { once: true })
  window.addEventListener("touchstart", unlockAudio, { once: true })
}

function showAutoplayHint() {
  const hint = document.getElementById("bgm-autoplay-hint")
  if (hint && localStorage.getItem("bgm_user_paused") !== "true") {
    hint.style.display = "flex"
  }
}

function hideAutoplayHint() {
  const hint = document.getElementById("bgm-autoplay-hint")
  if (hint) {
    hint.style.display = "none"
  }
}

// 3. UI DOM Construction & Binding
function ensurePlayerDom() {
  let root = document.getElementById("quartz-bgm-root")
  if (!root) {
    root = document.createElement("div")
    root.id = "quartz-bgm-root"
    root.className = "quartz-bgm"
    root.setAttribute("data-persist", "true")

    root.innerHTML = `
      <!-- Autoplay Hint Banner -->
      <div class="bgm-autoplay-hint" id="bgm-autoplay-hint" style="display: none;" title="Bấm để phát nhạc nền">
        <span class="hint-pulse"></span>
        <span class="hint-text">🎵 BẤM ĐỂ PHÁT NHẠC NỀN ⚡</span>
      </div>

      <!-- Floating Vinyl Record Widget -->
      <div class="bgm-floating-widget" id="bgm-floating-widget">
        <!-- Floating Music Notes -->
        <div class="bgm-floating-notes" id="bgm-floating-notes">
          <span class="bgm-note note-1">♪</span>
          <span class="bgm-note note-2">♫</span>
          <span class="bgm-note note-3">♬</span>
        </div>

        <!-- Vinyl Disc -->
        <div class="bgm-vinyl-wrapper" id="bgm-vinyl-btn" title="Bấm để mở Trình phát nhạc">
          <div class="bgm-radar-rings">
            <span class="radar-ring ring-1"></span>
            <span class="radar-ring ring-2"></span>
          </div>
          <div class="bgm-vinyl-disc" id="bgm-vinyl-disc">
            <div class="vinyl-groove-inner"></div>
            <div class="vinyl-center-label">
              <div class="vinyl-hole"></div>
              <div class="vinyl-center-art">
                <svg viewBox="0 0 24 24" class="vinyl-music-icon" fill="currentColor">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
            </div>
          </div>
          <!-- Tonearm needle -->
          <div class="bgm-tonearm" id="bgm-tonearm">
            <div class="tonearm-base"></div>
            <div class="tonearm-arm"></div>
            <div class="tonearm-head"></div>
          </div>
        </div>

        <!-- Mini HUD Pill -->
        <div class="bgm-hud-pill">
          <div class="pill-left-click" id="bgm-pill-info" title="Xem thông tin bài hát / Danh sách nhạc">
            <div class="pill-status-row">
              <span class="pill-dot"></span>
              <span class="pill-badge" id="bgm-status-badge">[BGM READY]</span>
              <div class="pill-equalizer" id="bgm-pill-eq">
                <span class="eq-bar bar-1"></span>
                <span class="eq-bar bar-2"></span>
                <span class="eq-bar bar-3"></span>
              </div>
            </div>
            <div class="pill-title-marquee">
              <span class="pill-track-title" id="bgm-track-title">Loading track...</span>
            </div>
          </div>
          <div class="pill-actions">
            <button class="pill-btn" id="bgm-quick-play" title="Phát / Tạm dừng" aria-label="Play or Pause">
              <svg class="icon-play" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              <svg class="icon-pause" viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            </button>
            <button class="pill-btn" id="bgm-quick-next" title="Bài tiếp theo" aria-label="Next track">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
            </button>
            <button class="pill-btn" id="bgm-quick-playlist" title="Chọn nhạc trong thư mục" aria-label="Open playlist">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Tactical Jukebox Modal / Playlist Drawer -->
      <div class="bgm-modal-backdrop" id="bgm-modal-backdrop" style="display: none;">
        <div class="bgm-modal-container" id="bgm-modal-container">
          <!-- Terminal Header -->
          <div class="bgm-modal-header">
            <div class="terminal-dots">
              <span class="dot dot-red" id="bgm-modal-dot-close"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
              <span class="terminal-path">audio://playlist/tactical-jukebox.stream</span>
            </div>
            <div class="bgm-modal-header-actions">
              <span class="bgm-hud-badge">[CYBER DECK AUDIO]</span>
              <button class="bgm-modal-close" id="bgm-modal-close-btn" title="Đóng cửa sổ">✕</button>
            </div>
          </div>

          <!-- Modal Body -->
          <div class="bgm-modal-body">
            <!-- Spotlight: Big Vinyl & Controls -->
            <div class="bgm-spotlight">
              <div class="spotlight-vinyl-box">
                <div class="spotlight-vinyl-disc" id="bgm-spotlight-disc">
                  <div class="spotlight-vinyl-grooves"></div>
                  <div class="spotlight-center-label">
                    <div class="vinyl-hole"></div>
                    <div class="vinyl-pulse-icon">♪</div>
                  </div>
                </div>
                <div class="spotlight-tonearm" id="bgm-spotlight-tonearm">
                  <div class="tonearm-base"></div>
                  <div class="tonearm-arm"></div>
                  <div class="tonearm-head"></div>
                </div>
              </div>

              <div class="spotlight-info">
                <div class="spotlight-badge-row">
                  <span class="spotlight-status-tag" id="spotlight-status-tag">NOW PLAYING</span>
                  <span class="spotlight-format-tag">[44.1 kHz • Hi-Fi]</span>
                </div>
                <div class="spotlight-track-title" id="bgm-spotlight-title">---</div>
                <div class="spotlight-artist" id="bgm-spotlight-artist">---</div>

                <!-- Scrubbable Progress Bar -->
                <div class="bgm-progress-container" id="bgm-progress-container">
                  <div class="bgm-progress-bar" id="bgm-progress-bar">
                    <div class="bgm-progress-fill" id="bgm-progress-fill"></div>
                    <div class="bgm-progress-thumb" id="bgm-progress-thumb"></div>
                  </div>
                </div>

                <div class="bgm-time-row">
                  <span id="bgm-time-current">00:00</span>
                  <div class="spotlight-eq" id="bgm-spotlight-eq">
                    <span></span><span></span><span></span><span></span><span></span>
                  </div>
                  <span id="bgm-time-total">00:00</span>
                </div>

                <!-- Controls -->
                <div class="bgm-controls-row">
                  <button class="bgm-ctrl-btn" id="bgm-btn-mode" title="Chế độ phát">
                    <span id="bgm-mode-label">🔁 TẤT CẢ</span>
                  </button>
                  <button class="bgm-ctrl-btn" id="bgm-btn-prev" title="Bài trước (Prev)">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
                  </button>
                  <button class="bgm-ctrl-btn bgm-ctrl-play" id="bgm-btn-play" title="Phát / Tạm dừng">
                    <svg class="icon-play" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    <svg class="icon-pause" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                  </button>
                  <button class="bgm-ctrl-btn" id="bgm-btn-next" title="Bài tiếp (Next)">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
                  </button>
                  <div class="bgm-volume-box">
                    <button class="bgm-ctrl-btn" id="bgm-btn-mute" title="Tắt / Bật âm">
                      <span id="bgm-mute-icon">🔊</span>
                    </button>
                    <input type="range" class="bgm-volume-slider" id="bgm-volume-slider" min="0" max="1" step="0.01" value="0.7" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Playlist Section -->
            <div class="bgm-playlist-section">
              <div class="playlist-section-header">
                <div class="playlist-header-left">
                  <span class="header-prompt">&gt;&gt;</span>
                  <span class="header-text">KHO NHẠC BẢN QUYỀN (THƯ MỤC MUSIC/)</span>
                </div>
                <span class="playlist-count" id="bgm-playlist-count">2 tracks</span>
              </div>

              <div class="bgm-tracklist" id="bgm-tracklist">
                <!-- Tracks will be rendered here -->
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="bgm-modal-footer">
            <span class="footer-tip">⚡ Bấm vào bất kỳ bài hát nào để nghe • Nhạc tự động phát liên tục khi xem bài viết khác</span>
            <span class="footer-engine">[HTML5 AUDIO ENGINE]</span>
          </div>
        </div>
      </div>
    `
    document.body.appendChild(root)
    bindPlayerEvents()
  }
}

function bindPlayerEvents() {
  const vinylBtn = document.getElementById("bgm-vinyl-btn")
  const pillInfo = document.getElementById("bgm-pill-info")
  const quickPlay = document.getElementById("bgm-quick-play")
  const quickNext = document.getElementById("bgm-quick-next")
  const quickPlaylist = document.getElementById("bgm-quick-playlist")
  const autoplayHint = document.getElementById("bgm-autoplay-hint")

  const modalBackdrop = document.getElementById("bgm-modal-backdrop")
  const modalCloseBtn = document.getElementById("bgm-modal-close-btn")
  const modalDotClose = document.getElementById("bgm-modal-dot-close")

  const btnPlay = document.getElementById("bgm-btn-play")
  const btnPrev = document.getElementById("bgm-btn-prev")
  const btnNext = document.getElementById("bgm-btn-next")
  const btnMode = document.getElementById("bgm-btn-mode")
  const btnMute = document.getElementById("bgm-btn-mute")
  const volSlider = document.getElementById("bgm-volume-slider") as HTMLInputElement | null
  const progressBar = document.getElementById("bgm-progress-container")

  // Toggle Modal
  const openModal = () => {
    if (modalBackdrop) {
      modalBackdrop.style.display = "flex"
      document.body.classList.add("bgm-modal-open")
    }
  }

  const closeModal = () => {
    if (modalBackdrop) {
      modalBackdrop.style.display = "none"
      document.body.classList.remove("bgm-modal-open")
    }
  }

  vinylBtn?.addEventListener("click", openModal)
  pillInfo?.addEventListener("click", openModal)
  quickPlaylist?.addEventListener("click", openModal)
  autoplayHint?.addEventListener("click", () => {
    togglePlayPause()
  })

  modalCloseBtn?.addEventListener("click", closeModal)
  modalDotClose?.addEventListener("click", closeModal)
  modalBackdrop?.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal()
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop?.style.display === "flex") {
      closeModal()
    }
  })

  // Playback Control Actions
  quickPlay?.addEventListener("click", (e) => {
    e.stopPropagation()
    togglePlayPause()
  })

  quickNext?.addEventListener("click", (e) => {
    e.stopPropagation()
    playNextTrack()
  })

  btnPlay?.addEventListener("click", togglePlayPause)
  btnPrev?.addEventListener("click", playPrevTrack)
  btnNext?.addEventListener("click", playNextTrack)

  // Mode Toggle
  btnMode?.addEventListener("click", () => {
    const p = window.__bgm_player
    if (!p) return
    if (p.mode === "all") p.mode = "one"
    else if (p.mode === "one") p.mode = "shuffle"
    else p.mode = "all"

    localStorage.setItem("bgm_mode", p.mode)
    updateModeDisplay()
  })

  // Volume & Mute
  volSlider?.addEventListener("input", (e) => {
    const p = window.__bgm_player
    if (!p) return
    const val = parseFloat((e.target as HTMLInputElement).value)
    p.volume = val
    p.audio.volume = val
    p.isMuted = val === 0
    localStorage.setItem("bgm_vol", String(val))
    updateVolumeIcon()
  })

  btnMute?.addEventListener("click", () => {
    const p = window.__bgm_player
    if (!p) return
    p.isMuted = !p.isMuted
    if (p.isMuted) {
      p.audio.volume = 0
      if (volSlider) volSlider.value = "0"
    } else {
      const v = p.volume > 0 ? p.volume : 0.7
      p.audio.volume = v
      if (volSlider) volSlider.value = String(v)
    }
    updateVolumeIcon()
  })

  // Progress Bar Seeking
  progressBar?.addEventListener("click", (e) => {
    const p = window.__bgm_player
    if (!p || !p.audio.duration) return
    const rect = progressBar.getBoundingClientRect()
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    p.audio.currentTime = pos * p.audio.duration
  })
}

// 4. Visual State Updaters
function updatePlayVisuals(isPlaying: boolean) {
  const disc1 = document.getElementById("bgm-vinyl-disc")
  const disc2 = document.getElementById("bgm-spotlight-disc")
  const tonearm1 = document.getElementById("bgm-tonearm")
  const tonearm2 = document.getElementById("bgm-spotlight-tonearm")
  const notes = document.getElementById("bgm-floating-notes")
  const pillEq = document.getElementById("bgm-pill-eq")
  const spotEq = document.getElementById("bgm-spotlight-eq")
  const quickPlay = document.getElementById("bgm-quick-play")
  const btnPlay = document.getElementById("bgm-btn-play")
  const statusBadge = document.getElementById("bgm-status-badge")
  const statusTag = document.getElementById("spotlight-status-tag")

  if (isPlaying) {
    disc1?.classList.add("is-spinning")
    disc2?.classList.add("is-spinning")
    tonearm1?.classList.add("is-active")
    tonearm2?.classList.add("is-active")
    notes?.classList.add("is-active")
    pillEq?.classList.add("is-playing")
    spotEq?.classList.add("is-playing")
    quickPlay?.classList.add("is-playing")
    btnPlay?.classList.add("is-playing")

    if (statusBadge) statusBadge.textContent = "[BGM ACTIVE]"
    if (statusTag) {
      statusTag.textContent = "NOW PLAYING"
      statusTag.className = "spotlight-status-tag tag-playing"
    }
  } else {
    disc1?.classList.remove("is-spinning")
    disc2?.classList.remove("is-spinning")
    tonearm1?.classList.remove("is-active")
    tonearm2?.classList.remove("is-active")
    notes?.classList.remove("is-active")
    pillEq?.classList.remove("is-playing")
    spotEq?.classList.remove("is-playing")
    quickPlay?.classList.remove("is-playing")
    btnPlay?.classList.remove("is-playing")

    if (statusBadge) statusBadge.textContent = "[PAUSED]"
    if (statusTag) {
      statusTag.textContent = "PAUSED"
      statusTag.className = "spotlight-status-tag tag-paused"
    }
  }
}

function updatePillInfo() {
  const p = window.__bgm_player
  if (!p || p.playlist.length === 0) return
  const track = p.playlist[p.currentIndex] || p.playlist[0]

  const trackTitle = document.getElementById("bgm-track-title")
  const spotTitle = document.getElementById("bgm-spotlight-title")
  const spotArtist = document.getElementById("bgm-spotlight-artist")

  const fullText = `${track.title} • ${track.artist}`
  if (trackTitle) trackTitle.textContent = fullText
  if (spotTitle) spotTitle.textContent = track.title
  if (spotArtist) spotArtist.textContent = track.artist

  updateModeDisplay()
  updateVolumeIcon()
}

function updateModeDisplay() {
  const p = window.__bgm_player
  const modeLabel = document.getElementById("bgm-mode-label")
  if (!p || !modeLabel) return

  if (p.mode === "all") {
    modeLabel.textContent = "🔁 TẤT CẢ"
  } else if (p.mode === "one") {
    modeLabel.textContent = "🔂 1 BÀI"
  } else {
    modeLabel.textContent = "🔀 NGẪU NHIÊN"
  }
}

function updateVolumeIcon() {
  const p = window.__bgm_player
  const icon = document.getElementById("bgm-mute-icon")
  if (!p || !icon) return

  if (p.isMuted || p.audio.volume === 0) {
    icon.textContent = "🔇"
  } else if (p.audio.volume < 0.4) {
    icon.textContent = "🔉"
  } else {
    icon.textContent = "🔊"
  }
}

function updateProgress() {
  const p = window.__bgm_player
  if (!p || !p.audio.duration) return

  const cur = p.audio.currentTime
  const dur = p.audio.duration
  const pct = Math.max(0, Math.min(100, (cur / dur) * 100))

  const fill = document.getElementById("bgm-progress-fill")
  const thumb = document.getElementById("bgm-progress-thumb")
  const curTime = document.getElementById("bgm-time-current")

  if (fill) fill.style.width = `${pct}%`
  if (thumb) thumb.style.left = `${pct}%`
  if (curTime) curTime.textContent = formatTime(cur)
}

function updateDurationDisplay() {
  const p = window.__bgm_player
  if (!p) return
  const totalTime = document.getElementById("bgm-time-total")
  if (totalTime) totalTime.textContent = formatTime(p.audio.duration)
}

function renderTracklist() {
  const p = window.__bgm_player
  const tracklist = document.getElementById("bgm-tracklist")
  const countEl = document.getElementById("bgm-playlist-count")
  if (!p || !tracklist) return

  if (countEl) countEl.textContent = `${p.playlist.length} tracks`
  tracklist.innerHTML = ""

  p.playlist.forEach((track, idx) => {
    const isCurrent = idx === p.currentIndex
    const item = document.createElement("div")
    item.className = `bgm-track-item ${isCurrent ? "is-active" : ""}`
    item.title = `Bấm để phát: ${track.title}`

    item.innerHTML = `
      <div class="track-left">
        <span class="track-num">${idx + 1 < 10 ? "0" : ""}${idx + 1}</span>
        <div class="track-status-icon">
          ${
            isCurrent
              ? `<div class="item-equalizer"><span></span><span></span><span></span></div>`
              : `<span class="track-play-icon">▶</span>`
          }
        </div>
        <div class="track-meta">
          <div class="track-title">${track.title}</div>
          <div class="track-artist">${track.artist}</div>
        </div>
      </div>
      <div class="track-right">
        <span class="track-badge">${isCurrent ? "[NOW PLAYING]" : "[PLAY]"}</span>
      </div>
    `

    item.addEventListener("click", () => {
      if (idx === p.currentIndex && !p.audio.paused) {
        togglePlayPause()
      } else {
        loadTrack(idx, true)
      }
    })

    tracklist.appendChild(item)
  })
}

// 5. Lifecycle hook for initial load and SPA transitions
function onNav() {
  initBgmPlayer()
}

document.addEventListener("nav", onNav)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onNav)
} else {
  onNav()
}
