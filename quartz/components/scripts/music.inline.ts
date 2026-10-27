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
    file: "Tình Yêu Mới - Chillies (Official Performance Video) [DZyeMmeQo-U].mp3",
    title: "Tình Yêu Mới",
    artist: "Chillies",
    src: "static/music/T%C3%ACnh%20Y%C3%AAu%20M%E1%BB%9Bi%20-%20Chillies%20(Official%20Performance%20Video)%20%5BDZyeMmeQo-U%5D.mp3",
  },
  {
    id: 1,
    file: "Chờ Anh Nhé (feat. Hoàng Rob) [0chK12qHGfM].mp3",
    title: "Chờ Anh Nhé (feat. Hoàng Rob)",
    artist: "Hoàng Rob",
    src: "static/music/Ch%E1%BB%9D%20Anh%20Nh%C3%A9%20(feat.%20Ho%C3%A0ng%20Rob)%20%5B0chK12qHGfM%5D.mp3",
  },
  {
    id: 2,
    file: "GIẤC MƠ KHÁC - CHILLIES (Official Music Video) [WfGn1yTL8TI].mp3",
    title: "GIẤC MƠ KHÁC",
    artist: "CHILLIES",
    src: "static/music/GI%E1%BA%A4C%20M%C6%A0%20KH%C3%81C%20-%20CHILLIES%20(Official%20Music%20Video)%20%5BWfGn1yTL8TI%5D.mp3",
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

interface RainDrop {
  x: number
  y: number
  l: number
  speed: number
  alpha: number
  width: number
}

interface RainSplash {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
}

class CyberWeatherEngine {
  canvas: HTMLCanvasElement | null = null
  ctx: CanvasRenderingContext2D | null = null
  flashEl: HTMLElement | null = null
  animFrameId: number | null = null

  // Sound Engine
  audioCtx: AudioContext | null = null
  rainGain: GainNode | null = null
  rainSource: AudioBufferSourceNode | null = null
  isSoundRunning: boolean = false
  isWeatherActive: boolean = true

  // Visuals
  drops: RainDrop[] = []
  splashes: RainSplash[] = []
  width: number = 0
  height: number = 0
  nextLightningTime: number = 0

  constructor() {
    const saved = localStorage.getItem("weather_active")
    this.isWeatherActive = saved === null ? true : saved === "true"
  }

  initDOM() {
    this.canvas = document.getElementById("weather-rain-canvas") as HTMLCanvasElement | null
    this.flashEl = document.getElementById("weather-flash-overlay")
    if (!this.canvas) return

    this.ctx = this.canvas.getContext("2d")
    this.resize()

    window.removeEventListener("resize", this.handleResize)
    window.addEventListener("resize", this.handleResize)

    if (this.isWeatherActive) {
      this.start()
    } else {
      this.stop(false)
    }
  }

  handleResize = () => {
    this.resize()
  }

  resize() {
    if (!this.canvas) return
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.canvas.width = this.width
    this.canvas.height = this.height

    const count = Math.min(220, Math.max(90, Math.floor((this.width * this.height) / 8000)))
    this.drops = []
    for (let i = 0; i < count; i++) {
      this.drops.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        l: 14 + Math.random() * 18,
        speed: 13 + Math.random() * 10,
        alpha: 0.15 + Math.random() * 0.35,
        width: 1 + Math.random() * 0.8,
      })
    }
    this.splashes = []
  }

  start() {
    this.isWeatherActive = true
    localStorage.setItem("weather_active", "true")
    if (this.canvas) this.canvas.classList.add("is-active")
    this.updateButtons(true)

    this.startRainSound()
    this.scheduleNextLightning()

    if (!this.animFrameId) {
      this.loop()
    }
  }

  stop(save: boolean = true) {
    this.isWeatherActive = false
    if (save) localStorage.setItem("weather_active", "false")
    if (this.canvas) this.canvas.classList.remove("is-active")
    this.updateButtons(false)

    this.stopRainSound()

    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId)
      this.animFrameId = null
    }
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.width, this.height)
    }
  }

  toggle() {
    if (this.isWeatherActive) {
      this.stop(true)
    } else {
      this.start()
    }
  }

  updateButtons(active: boolean) {
    const quickBtn = document.getElementById("bgm-quick-weather")
    const modalBtn = document.getElementById("bgm-modal-weather")
    const label = document.getElementById("bgm-weather-label")

    if (quickBtn) {
      if (active) {
        quickBtn.classList.add("is-weather-on")
        quickBtn.title = "Thời tiết: Mưa chill & sấm chớp (ĐANG BẬT) - Bấm để tắt"
      } else {
        quickBtn.classList.remove("is-weather-on")
        quickBtn.title = "Thời tiết: Mưa chill & sấm chớp (ĐANG TẮT) - Bấm để bật"
      }
    }
    if (modalBtn) {
      if (active) {
        modalBtn.classList.add("is-weather-on")
      } else {
        modalBtn.classList.remove("is-weather-on")
      }
    }
    if (label) {
      label.textContent = active ? "🌧️ MƯA: BẬT" : "☁️ MƯA: TẮT"
    }
  }

  // Web Audio Rain Ambient Synthesis
  initAudio() {
    if (this.audioCtx) return
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
    if (!AudioContextClass) return
    this.audioCtx = new AudioContextClass()
  }

  startRainSound() {
    try {
      this.initAudio()
      if (!this.audioCtx) return
      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume().catch(() => {})
      }
      if (this.isSoundRunning) return

      const bufferSize = this.audioCtx.sampleRate * 2
      const noiseBuffer = this.audioCtx.createBuffer(2, bufferSize, this.audioCtx.sampleRate)
      for (let channel = 0; channel < 2; channel++) {
        const output = noiseBuffer.getChannelData(channel)
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1
          b0 = 0.99886 * b0 + white * 0.0555179
          b1 = 0.99332 * b1 + white * 0.0750759
          b2 = 0.96900 * b2 + white * 0.1538520
          b3 = 0.86650 * b3 + white * 0.3104856
          b4 = 0.55000 * b4 + white * 0.5329522
          b5 = -0.7616 * b5 - white * 0.0168980
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.045
          b6 = white * 0.115926
        }
      }

      const source = this.audioCtx.createBufferSource()
      source.buffer = noiseBuffer
      source.loop = true

      const lowpass = this.audioCtx.createBiquadFilter()
      lowpass.type = "lowpass"
      lowpass.frequency.setValueAtTime(1050, this.audioCtx.currentTime)

      const highpass = this.audioCtx.createBiquadFilter()
      highpass.type = "highpass"
      highpass.frequency.setValueAtTime(200, this.audioCtx.currentTime)

      this.rainGain = this.audioCtx.createGain()
      this.rainGain.gain.setValueAtTime(0.001, this.audioCtx.currentTime)
      this.rainGain.gain.exponentialRampToValueAtTime(0.22, this.audioCtx.currentTime + 1.8)

      source.connect(highpass)
      highpass.connect(lowpass)
      lowpass.connect(this.rainGain)
      this.rainGain.connect(this.audioCtx.destination)

      source.start()
      this.rainSource = source
      this.isSoundRunning = true
    } catch (_) {}
  }

  stopRainSound() {
    if (!this.audioCtx || !this.isSoundRunning) return
    try {
      if (this.rainGain) {
        this.rainGain.gain.setValueAtTime(this.rainGain.gain.value, this.audioCtx.currentTime)
        this.rainGain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 1.0)
      }
      setTimeout(() => {
        try {
          if (this.rainSource) {
            this.rainSource.stop()
            this.rainSource.disconnect()
            this.rainSource = null
          }
        } catch (_) {}
        this.isSoundRunning = false
      }, 1100)
    } catch (_) {
      this.isSoundRunning = false
    }
  }

  scheduleNextLightning() {
    const delay = 18000 + Math.random() * 22000
    this.nextLightningTime = Date.now() + delay
  }

  triggerLightning() {
    if (!this.isWeatherActive || !this.flashEl) return

    this.flashEl.classList.add("is-flashing")
    setTimeout(() => {
      if (this.flashEl) this.flashEl.classList.remove("is-flashing")
      setTimeout(() => {
        if (this.flashEl && Math.random() > 0.35) {
          this.flashEl.classList.add("is-flashing")
          setTimeout(() => {
            if (this.flashEl) this.flashEl.classList.remove("is-flashing")
          }, 80)
        }
      }, 50)
    }, 90)

    setTimeout(() => {
      this.playThunderSound()
    }, 400 + Math.random() * 300)

    this.scheduleNextLightning()
  }

  playThunderSound() {
    if (!this.isWeatherActive || !this.audioCtx) return
    if (this.audioCtx.state === "suspended") return

    try {
      const duration = 3.5 + Math.random() * 2.2
      const bufferSize = Math.floor(this.audioCtx.sampleRate * duration)
      const thunderBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate)
      const data = thunderBuffer.getChannelData(0)
      let lastOut = 0.0
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1
        data[i] = (lastOut + 0.02 * white) / 1.02
        lastOut = data[i]
        data[i] *= 3.8
      }

      const thunderSource = this.audioCtx.createBufferSource()
      thunderSource.buffer = thunderBuffer

      const thunderFilter = this.audioCtx.createBiquadFilter()
      thunderFilter.type = "lowpass"
      thunderFilter.frequency.setValueAtTime(140, this.audioCtx.currentTime)
      thunderFilter.frequency.exponentialRampToValueAtTime(55, this.audioCtx.currentTime + duration)

      const gain = this.audioCtx.createGain()
      const now = this.audioCtx.currentTime
      gain.gain.setValueAtTime(0.001, now)
      gain.gain.linearRampToValueAtTime(0.35 + Math.random() * 0.25, now + 0.35)
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration)

      thunderSource.connect(thunderFilter)
      thunderFilter.connect(gain)
      gain.connect(this.audioCtx.destination)

      thunderSource.start()
    } catch (_) {}
  }

  loop = () => {
    if (!this.isWeatherActive) return

    if (Date.now() >= this.nextLightningTime) {
      this.triggerLightning()
    }

    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.width, this.height)

      const windAngle = -1.2
      this.ctx.lineWidth = 1.2
      this.ctx.lineCap = "round"

      for (let i = 0; i < this.drops.length; i++) {
        const d = this.drops[i]
        this.ctx.strokeStyle = `rgba(140, 220, 255, ${d.alpha})`
        this.ctx.beginPath()
        this.ctx.moveTo(d.x, d.y)
        this.ctx.lineTo(d.x + windAngle * (d.l / 10), d.y + d.l)
        this.ctx.stroke()

        d.x += windAngle
        d.y += d.speed

        if (d.y > this.height) {
          if (Math.random() < 0.25 && this.splashes.length < 50) {
            this.splashes.push({
              x: d.x,
              y: this.height - 2,
              vx: (Math.random() - 0.5) * 3,
              vy: -Math.random() * 2.5 - 1,
              radius: 1 + Math.random() * 1.5,
              alpha: 0.6,
            })
          }
          d.y = -d.l
          d.x = Math.random() * (this.width + 100) - 50
        }
      }

      for (let s = this.splashes.length - 1; s >= 0; s--) {
        const sp = this.splashes[s]
        this.ctx.fillStyle = `rgba(180, 235, 255, ${sp.alpha})`
        this.ctx.beginPath()
        this.ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2)
        this.ctx.fill()

        sp.x += sp.vx
        sp.y += sp.vy
        sp.vy += 0.25
        sp.alpha -= 0.04

        if (sp.alpha <= 0) {
          this.splashes.splice(s, 1)
        }
      }
    }

    this.animFrameId = requestAnimationFrame(this.loop)
  }
}

declare global {
  interface Window {
    __bgm_player?: BgmGlobalState
    __cyber_weather?: CyberWeatherEngine
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
    const savedMode = (localStorage.getItem("bgm_mode") || "all") as "all" | "one" | "shuffle"

    audio.volume = isNaN(savedVol) ? 0.7 : Math.max(0, Math.min(1, savedVol))

    window.__bgm_player = {
      audio,
      playlist: [...FALLBACK_PLAYLIST],
      currentIndex: 0, // Mặc định luôn ưu tiên phát bài 0 ("Tình Yêu Mới")
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
          // Tìm bài "Tình Yêu Mới" để ưu tiên phát đầu tiên
          const targetIndex = data.findIndex(
            (t) =>
              t.title.toLowerCase().includes("tình yêu mới") ||
              t.file.toLowerCase().includes("tình yêu mới") ||
              t.title.toLowerCase().includes("tinh yeu moi")
          )
          if (targetIndex >= 0 && !window.__bgm_player.isPlaying) {
            window.__bgm_player.currentIndex = targetIndex
            loadTrack(targetIndex, true)
          } else if (window.__bgm_player.currentIndex >= data.length) {
            window.__bgm_player.currentIndex = 0
            loadTrack(0, true)
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

    // Setup initial source (Bài 0: "Tình Yêu Mới") và tự động phát ngay
    loadTrack(0, true)
    attemptAutoplay()
    setupFirstGestureTrigger()
  }

  // 2. Render or Re-attach DOM Elements
  ensurePlayerDom()
  updatePlayVisuals(window.__bgm_player.isPlaying)
  updatePillInfo()
  renderTracklist()

  // 3. Initialize or Re-attach Weather Engine
  if (!window.__cyber_weather) {
    window.__cyber_weather = new CyberWeatherEngine()
  }
  window.__cyber_weather.initDOM()
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

  const playPromise = p.audio.play()
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        p.isPlaying = true
        updatePlayVisuals(true)
        hideAutoplayHint()
      })
      .catch((err) => {
        console.log("[BGM] Autoplay blocked by browser policy, awaiting first gesture:", err)
        showAutoplayHint()
        setupFirstGestureTrigger()
      })
  }
}

function setupFirstGestureTrigger() {
  const unlockAudio = () => {
    const p = window.__bgm_player
    if (p && p.audio.paused) {
      p.audio
        .play()
        .then(() => {
          p.isPlaying = true
          updatePlayVisuals(true)
          hideAutoplayHint()
        })
        .catch(() => {})
    }
    // Also unlock rain ambient audio
    if (window.__cyber_weather && window.__cyber_weather.isWeatherActive) {
      window.__cyber_weather.startRainSound()
    }
    const events = ["click", "keydown", "touchstart", "scroll", "pointerdown", "mousedown"]
    events.forEach((evt) => {
      window.removeEventListener(evt, unlockAudio, true)
      document.removeEventListener(evt, unlockAudio, true)
    })
  }

  const events = ["click", "keydown", "touchstart", "scroll", "pointerdown", "mousedown"]
  events.forEach((evt) => {
    window.addEventListener(evt, unlockAudio, { once: true, passive: true, capture: true })
    document.addEventListener(evt, unlockAudio, { once: true, passive: true, capture: true })
  })
}

function showAutoplayHint() {
  const hint = document.getElementById("bgm-autoplay-hint")
  if (hint) {
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
      <!-- Ambient Rain Canvas & Lightning Flash -->
      <canvas id="weather-rain-canvas" class="weather-rain-canvas"></canvas>
      <div id="weather-flash-overlay" class="weather-flash-overlay"></div>

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
            <button class="pill-btn weather-toggle-btn is-weather-on" id="bgm-quick-weather" title="Thời tiết: Bật/Tắt mưa chill & sấm chớp" aria-label="Toggle Weather FX">
              <span class="weather-icon-indicator">🌧️</span>
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
                  <button class="bgm-ctrl-btn bgm-weather-ctrl-btn is-weather-on" id="bgm-modal-weather" title="Bật / Tắt thời tiết mưa chill & sấm chớp">
                    <span id="bgm-weather-label">🌧️ MƯA: BẬT</span>
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
  const quickWeather = document.getElementById("bgm-quick-weather")
  const quickPlaylist = document.getElementById("bgm-quick-playlist")
  const modalWeather = document.getElementById("bgm-modal-weather")
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

  quickWeather?.addEventListener("click", (e) => {
    e.stopPropagation()
    if (window.__cyber_weather) {
      window.__cyber_weather.toggle()
    }
  })

  modalWeather?.addEventListener("click", (e) => {
    e.stopPropagation()
    if (window.__cyber_weather) {
      window.__cyber_weather.toggle()
    }
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
