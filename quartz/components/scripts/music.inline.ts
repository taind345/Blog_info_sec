// Background Music Player & Cyber Glass Weather Engine for Security Blog
// Features: Vinyl Record HUD, Fine Cyber Rain, Delicate Glass Condensation & Trickling Water Droplets,
// Branching Jagged Lightning Arcs, Gapless SPA Audio, and Foolproof Autoplay System.
// Performance Optimized: Delta-Time Physics, Zero-Allocation Loop, Hardware GPU Layer, Single-Init SPA Router.

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
    file: "Tình Yêu Mới - Chillies (Official Audio) - (320 Kbps).mp3",
    title: "Tình Yêu Mới (Studio HQ)",
    artist: "Chillies",
    src: "static/music/T%C3%ACnh%20Y%C3%AAu%20M%E1%BB%9Bi%20-%20Chillies%20(Official%20Audio)%20-%20(320%20Kbps).mp3",
  },
  {
    id: 1,
    file: "Tình Yêu Mới - Chillies (Official Performance Video) [DZyeMmeQo-U].mp3",
    title: "Tình Yêu Mới (Live Performance)",
    artist: "Chillies",
    src: "static/music/T%C3%ACnh%20Y%C3%AAu%20M%E1%BB%9Bi%20-%20Chillies%20(Official%20Performance%20Video)%20%5BDZyeMmeQo-U%5D.mp3",
  },
  {
    id: 2,
    file: "Chờ Anh Nhé (feat. Hoàng Rob) [0chK12qHGfM].mp3",
    title: "Chờ Anh Nhé (feat. Hoàng Rob)",
    artist: "Hoàng Rob",
    src: "static/music/Ch%E1%BB%9D%20Anh%20Nh%C3%A9%20(feat.%20Ho%C3%A0ng%20Rob)%20%5B0chK12qHGfM%5D.mp3",
  },
  {
    id: 3,
    file: "GIẤC MƠ KHÁC - CHILLIES (Official Music Video) [WfGn1yTL8TI].mp3",
    title: "GIẤC MƠ KHÁC",
    artist: "CHILLIES",
    src: "static/music/GI%E1%BA%A4C%20M%C6%A0%20KH%C3%81C%20-%20CHILLIES%20(Official%20Music%20Video)%20%5BWfGn1yTL8TI%5D.mp3",
  },
  {
    id: 4,
    file: "Hạnh Phúc Mới (Cover) - Sơn Tùng M-TP x TUYENVU「Lo - Fi Version by 1 9 6 7」_ Audio Lyrics - (320 Kbps).mp3",
    title: "Hạnh Phúc Mới (Cover) (Studio HQ)",
    artist: "Sơn Tùng M-TP x TUYENVU",
    src: "static/music/H%E1%BA%A1nh%20Ph%C3%BAc%20M%E1%BB%9Bi%20(Cover)%20-%20S%C6%A1n%20T%C3%B9ng%20M-TP%20x%20TUYENVU%E3%80%8CLo%20-%20Fi%20Version%20by%201%209%206%207%E3%80%8D_%20Audio%20Lyrics%20-%20(320%20Kbps).mp3",
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

// 1. Falling rain streaks (airborne atmosphere, fine & delicate)
interface RainStreak {
  x: number
  y: number
  l: number
  speed: number
  alpha: number
}

// 2. Glass water droplets (small beads on screen, trickling down)
interface GlassDrop {
  x: number
  y: number
  startY: number
  r: number
  alpha: number
  isDripping: boolean
  dripDelay: number
  speed: number
  wigglePhase: number
  wiggleSpeed: number
}

// 3. Branching Lightning Bolt
interface LightningSegment {
  x1: number
  y1: number
  x2: number
  y2: number
  width: number
}

interface ActiveLightning {
  segments: LightningSegment[]
  startTime: number
  duration: number
  rootX: number
  rootY: number
}

class CyberWeatherEngine {
  canvas: HTMLCanvasElement | null = null
  ctx: CanvasRenderingContext2D | null = null
  animFrameId: number | null = null
  isInitialized: boolean = false
  lastTime: number = 0

  // Rain Sound Engine using Authentic Audio from music folder
  rainAudio: HTMLAudioElement | null = null
  isSoundRunning: boolean = false
  isWeatherActive: boolean = true

  // Atmospheric Particles (Pre-allocated Static Pool)
  streaks: RainStreak[] = []
  glassDrops: GlassDrop[] = []
  activeLightning: ActiveLightning | null = null

  width: number = 0
  height: number = 0
  nextLightningTime: number = 0
  frameCounter: number = 0
  isTabVisible: boolean = true
  resizeTimeout: any = null

  constructor() {
    const saved = localStorage.getItem("weather_active")
    this.isWeatherActive = saved === null ? true : saved === "true"
  }

  initDOM() {
    const canvas = document.getElementById("weather-rain-canvas") as HTMLCanvasElement | null
    if (!canvas) return

    const canvasChanged = this.canvas !== canvas || !this.ctx
    this.canvas = canvas

    if (canvasChanged) {
      this.ctx = canvas.getContext("2d", { alpha: true })
      this.resize()
    }

    window.removeEventListener("resize", this.handleResize)
    window.addEventListener("resize", this.handleResize)

    document.removeEventListener("visibilitychange", this.handleVisibility)
    document.addEventListener("visibilitychange", this.handleVisibility)

    if (this.isWeatherActive) {
      this.canvas.classList.add("is-active")
      this.updateButtons(true)
      if (!this.animFrameId && this.isTabVisible) {
        this.lastTime = 0
        this.loop(performance.now())
      }
    } else {
      this.canvas.classList.remove("is-active")
      this.updateButtons(false)
    }
  }

  handleVisibility = () => {
    this.isTabVisible = !document.hidden
    if (this.isTabVisible && this.isWeatherActive && !this.animFrameId) {
      this.lastTime = 0
      this.loop(performance.now())
    }
  }

  handleResize = () => {
    clearTimeout(this.resizeTimeout)
    this.resizeTimeout = setTimeout(() => {
      this.resize()
    }, 150)
  }

  resize() {
    if (!this.canvas) return
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.canvas.width = this.width
    this.canvas.height = this.height
    this.canvas.style.width = `${this.width}px`
    this.canvas.style.height = `${this.height}px`

    // Pre-allocated Static Pool of Fine Streaks (75 particles, allocate only once)
    if (this.streaks.length === 0) {
      const streakCount = Math.min(75, Math.max(45, Math.floor((this.width * this.height) / 19000)))
      for (let i = 0; i < streakCount; i++) {
        this.streaks.push({
          x: Math.random() * (this.width + 100) - 50,
          y: Math.random() * this.height,
          l: 10 + Math.random() * 12,
          speed: 15 + Math.random() * 8,
          alpha: 0.22 + Math.random() * 0.25,
        })
      }
    }

    // Pre-allocated Static Pool of Delicate Glass Droplets (16 particles, allocate only once)
    if (this.glassDrops.length === 0) {
      const dropCount = Math.min(18, Math.max(10, Math.floor((this.width * this.height) / 80000)))
      for (let i = 0; i < dropCount; i++) {
        const y = Math.random() * this.height
        this.glassDrops.push({
          x: Math.random() * this.width,
          y: y,
          startY: y,
          r: 0.85 + Math.random() * 1.15,
          alpha: 0.32 + Math.random() * 0.25,
          isDripping: Math.random() < 0.2,
          dripDelay: Math.floor(60 + Math.random() * 240),
          speed: 1.1 + Math.random() * 1.3,
          wigglePhase: Math.random() * Math.PI * 2,
          wiggleSpeed: 0.04 + Math.random() * 0.04,
        })
      }
    }
  }

  initRainAudio() {
    if (this.rainAudio) return
    try {
      this.rainAudio = new Audio()
      this.rainAudio.preload = "none"
      this.rainAudio.src = resolveAssetUrl("static/music/rain-ambient.mp3")
      this.rainAudio.loop = true
      this.rainAudio.volume = 0.35
    } catch (e) {
      console.warn("[Weather] Rain audio init error:", e)
    }
  }

  start() {
    this.isWeatherActive = true
    localStorage.setItem("weather_active", "true")
    if (this.canvas) this.canvas.classList.add("is-active")
    this.updateButtons(true)

    this.startRainSound()
    this.scheduleNextLightning()

    if (!this.animFrameId && this.isTabVisible) {
      this.lastTime = 0
      this.loop(performance.now())
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
      setTimeout(() => this.triggerLightning(), 400)
    }
  }

  updateButtons(active: boolean) {
    const quickBtn = document.getElementById("bgm-quick-weather")
    const modalBtn = document.getElementById("bgm-modal-weather")
    const label = document.getElementById("bgm-weather-label")

    if (quickBtn) {
      if (active) {
        quickBtn.classList.add("is-weather-on")
        quickBtn.title = "Thời tiết: Mưa kính & tia sét (ĐANG BẬT) - Bấm để tắt"
      } else {
        quickBtn.classList.remove("is-weather-on")
        quickBtn.title = "Thời tiết: Mưa kính & tia sét (ĐANG TẮT) - Bấm để bật"
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

  startRainSound() {
    if (!this.isWeatherActive) return
    this.initRainAudio()
    if (this.rainAudio && this.rainAudio.paused) {
      this.rainAudio.play().then(() => {
        this.isSoundRunning = true
      }).catch((e) => {
        console.log("[Weather] Rain audio waiting for gesture unlock:", e)
      })
    }
  }

  stopRainSound() {
    if (this.rainAudio && !this.rainAudio.paused) {
      this.rainAudio.pause()
      this.isSoundRunning = false
    }
  }

  scheduleNextLightning() {
    const delay = 18000 + Math.random() * 22000
    this.nextLightningTime = Date.now() + delay
  }

  // Lightweight Fractal Lightning Bolt (Zero Gaussian Blur Overhead)
  triggerLightning() {
    if (!this.isWeatherActive) return

    const rootX = this.width * (0.2 + Math.random() * 0.6)
    const rootY = 0
    const endX = rootX + (Math.random() - 0.5) * 400
    const endY = this.height * (0.65 + Math.random() * 0.35)

    const segments: LightningSegment[] = []

    const createBolt = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      roughness: number,
      depth: number,
      width: number
    ) => {
      const dist = Math.hypot(x2 - x1, y2 - y1)
      if (depth >= 4 || dist < 22) {
        segments.push({ x1, y1, x2, y2, width })
        return
      }

      const angle = Math.atan2(y2 - y1, x2 - x1)
      const normal = angle + Math.PI / 2
      const offset = (Math.random() - 0.5) * roughness

      const midX = (x1 + x2) / 2 + Math.cos(normal) * offset
      const midY = (y1 + y2) / 2 + Math.sin(normal) * offset

      createBolt(x1, y1, midX, midY, roughness * 0.55, depth + 1, width)
      createBolt(midX, midY, x2, y2, roughness * 0.55, depth + 1, width)

      if (depth < 3 && Math.random() < 0.28) {
        const branchAngle = angle + (Math.random() - 0.5) * 0.9
        const branchLen = 40 + Math.random() * 90
        const bx = midX + Math.cos(branchAngle) * branchLen
        const by = midY + Math.sin(branchAngle) * branchLen
        createBolt(midX, midY, bx, by, roughness * 0.45, depth + 2, width * 0.6)
      }
    }

    createBolt(rootX, rootY, endX, endY, 150, 0, 2.0)

    this.activeLightning = {
      segments,
      startTime: Date.now(),
      duration: 220,
      rootX,
      rootY,
    }

    this.scheduleNextLightning()
  }

  // High-Performance Delta-Time Loop with Zero Garbage-Collection Allocations
  loop = (timestamp: number) => {
    if (!this.isWeatherActive || !this.isTabVisible) {
      this.animFrameId = null
      this.lastTime = 0
      return
    }

    if (!this.lastTime) this.lastTime = timestamp
    const elapsed = timestamp - this.lastTime
    this.lastTime = timestamp
    const dt = Math.min(Math.max(elapsed / 16.67, 0.5), 2.0)

    if (Date.now() >= this.nextLightningTime) {
      this.triggerLightning()
    }

    this.frameCounter++

    const ctx = this.ctx
    if (ctx && this.canvas) {
      ctx.clearRect(0, 0, this.width, this.height)

      const windAngle = -1.5

      // ==========================================
      // 1. RENDER LIGHTNING BOLT (Dual-Pass, Zero Blur)
      // ==========================================
      if (this.activeLightning) {
        const elapsed = Date.now() - this.activeLightning.startTime
        if (elapsed > this.activeLightning.duration) {
          this.activeLightning = null
        } else {
          let alpha = 1.0
          if (elapsed < 40) alpha = 1.0
          else if (elapsed < 80) alpha = 0.25
          else if (elapsed < 140) alpha = 0.85
          else alpha = Math.max(0, 0.85 * (1 - (elapsed - 140) / 80))

          if (alpha > 0.02) {
            ctx.fillStyle = `rgba(56, 189, 248, ${alpha * 0.06})`
            ctx.fillRect(0, 0, this.width, this.height)

            ctx.lineCap = "round"
            ctx.lineJoin = "round"
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.5})`
            ctx.lineWidth = 3.0
            ctx.beginPath()
            for (let i = 0; i < this.activeLightning.segments.length; i++) {
              const seg = this.activeLightning.segments[i]
              ctx.moveTo(seg.x1, seg.y1)
              ctx.lineTo(seg.x2, seg.y2)
            }
            ctx.stroke()

            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.95})`
            ctx.lineWidth = 1.0
            ctx.stroke()
          }
        }
      }

      // ==========================================
      // 2. RENDER FINE FALLING RAIN (Single 1-Pass Batch)
      // ==========================================
      ctx.lineWidth = 0.75
      ctx.strokeStyle = "rgba(186, 230, 253, 0.35)"
      ctx.beginPath()

      for (let i = 0; i < this.streaks.length; i++) {
        const s = this.streaks[i]
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x + windAngle * (s.l / 10), s.y + s.l)

        s.x += windAngle * dt
        s.y += s.speed * dt

        if (s.y > this.height) {
          s.y = -s.l
          s.x = Math.random() * (this.width + 100) - 50
        }
      }
      ctx.stroke()

      // ==========================================
      // 3. RENDER GLASS WATER DROPLETS & WET TRAILS (Zero Allocation)
      // ==========================================
      // Pass A: Wet Trails
      ctx.lineWidth = 0.55
      ctx.strokeStyle = "rgba(186, 230, 253, 0.16)"
      ctx.beginPath()
      for (let d = 0; d < this.glassDrops.length; d++) {
        const drop = this.glassDrops[d]
        if (drop.isDripping && drop.y > drop.startY + 4) {
          ctx.moveTo(drop.x, drop.startY)
          ctx.lineTo(drop.x, drop.y)
        }
      }
      ctx.stroke()

      // Pass B: Droplet Bodies (Meniscus)
      ctx.fillStyle = "rgba(186, 230, 253, 0.26)"
      ctx.beginPath()
      for (let d = 0; d < this.glassDrops.length; d++) {
        const drop = this.glassDrops[d]

        if (!drop.isDripping) {
          drop.dripDelay -= dt
          if (drop.dripDelay <= 0) {
            drop.isDripping = true
            drop.startY = drop.y
          }
        } else {
          drop.y += drop.speed * dt
          drop.x += Math.sin(drop.wigglePhase) * (0.22 * dt)
          drop.wigglePhase += drop.wiggleSpeed * dt
        }

        ctx.moveTo(drop.x + drop.r, drop.y)
        ctx.arc(drop.x, drop.y, drop.r, 0, Math.PI * 2)

        if (drop.y > this.height + 15) {
          drop.y = Math.random() * (this.height * 0.35)
          drop.startY = drop.y
          drop.x = Math.random() * this.width
          drop.isDripping = false
          drop.dripDelay = Math.floor(90 + Math.random() * 260)
        }
      }
      ctx.fill()

      // Pass C: Specular Highlights (Top-left Glint)
      ctx.fillStyle = "rgba(255, 255, 255, 0.75)"
      ctx.beginPath()
      for (let d = 0; d < this.glassDrops.length; d++) {
        const drop = this.glassDrops[d]
        const hr = Math.max(0.32, drop.r * 0.28)
        ctx.moveTo(drop.x - drop.r * 0.3 + hr, drop.y - drop.r * 0.3)
        ctx.arc(drop.x - drop.r * 0.3, drop.y - drop.r * 0.3, hr, 0, Math.PI * 2)
      }
      ctx.fill()
    }

    this.animFrameId = requestAnimationFrame(this.loop)
  }
}

export {}

declare global {
  interface Window {
    __bgm_player?: BgmGlobalState
    __cyber_weather?: CyberWeatherEngine
    __bgm_initialized?: boolean
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

  // 1. Initialize Global Singleton Audio Player with lazy preloading (0 initial network lag)
  if (!window.__bgm_player) {
    const audio = new Audio()
    audio.preload = "none"

    const savedVol = parseFloat(localStorage.getItem("bgm_vol") || "0.7")
    const savedMode = (localStorage.getItem("bgm_mode") || "all") as "all" | "one" | "shuffle"

    audio.volume = isNaN(savedVol) ? 0.7 : Math.max(0, Math.min(1, savedVol))

    window.__bgm_player = {
      audio,
      playlist: [...FALLBACK_PLAYLIST],
      currentIndex: 0,
      isPlaying: false,
      isMuted: false,
      volume: audio.volume,
      mode: savedMode,
      hasUserInteracted: false,
      initialized: false,
    }

    audio.addEventListener("play", () => {
      if (window.__bgm_player) window.__bgm_player.isPlaying = true
      updatePlayVisuals(true)
      hideAutoplayPrompt()
    })

    audio.addEventListener("playing", () => {
      if (window.__bgm_player) window.__bgm_player.isPlaying = true
      updatePlayVisuals(true)
      hideAutoplayPrompt()
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

    localStorage.removeItem("bgm_user_paused")
    setupFirstGestureTrigger()

    // Progressive Staggered Loading
    setTimeout(() => {
      fetch(resolveAssetUrl("static/music/playlist.json"))
        .then((res) => (res.ok ? res.json() : null))
        .then((data: Track[]) => {
          if (Array.isArray(data) && data.length > 0 && window.__bgm_player) {
            window.__bgm_player.playlist = data
            renderTracklist()
            updatePillInfo()
          }
        })
        .catch(() => {})

      loadTrack(0, true)
      attemptAutoplay()
    }, 300)
  }

  // 2. Render DOM Elements immediately (zero lag layout)
  ensurePlayerDom()
  updatePlayVisuals(window.__bgm_player.isPlaying)
  updatePillInfo()
  renderTracklist()

  // 3. Staggered Weather Canvas Engine Start
  if (!window.__cyber_weather) {
    window.__cyber_weather = new CyberWeatherEngine()
  }
  setTimeout(() => {
    window.__cyber_weather?.initDOM()
  }, 200)
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
  }

  updatePillInfo()
  renderTracklist()

  if (autoPlay) {
    p.audio.play().then(() => {
      p.isPlaying = true
      updatePlayVisuals(true)
      hideAutoplayPrompt()
      if (window.__cyber_weather && window.__cyber_weather.isWeatherActive) {
        window.__cyber_weather.startRainSound()
      }
    }).catch(() => {
      attemptAutoplay()
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

  hideAutoplayPrompt()

  if (p.audio.paused) {
    p.audio.muted = false
    p.audio.volume = p.volume > 0 ? p.volume : 0.7
    p.audio.play().then(() => {
      p.isPlaying = true
      updatePlayVisuals(true)
      if (window.__cyber_weather && window.__cyber_weather.isWeatherActive) {
        window.__cyber_weather.startRainSound()
      }
    }).catch((err) => {
      console.warn("[BGM] Play error:", err)
    })
  } else {
    p.audio.pause()
    p.isPlaying = false
    updatePlayVisuals(false)
  }
}

function attemptAutoplay() {
  const p = window.__bgm_player
  if (!p) return

  p.audio.muted = false
  p.audio.volume = p.volume > 0 ? p.volume : 0.7

  const playPromise = p.audio.play()
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        p.isPlaying = true
        updatePlayVisuals(true)
        hideAutoplayPrompt()
        if (window.__cyber_weather && window.__cyber_weather.isWeatherActive) {
          window.__cyber_weather.startRainSound()
        }
      })
      .catch((err) => {
        console.log("[BGM] Autoplay policy held unmuted playback. Starting active timeline:", err)
        p.audio.muted = true
        p.audio.play().then(() => {
          p.isPlaying = true
          updatePlayVisuals(true)
        }).catch(() => {})

        showAutoplayPrompt()
        setupFirstGestureTrigger()
      })
  }
}

function setupFirstGestureTrigger() {
  const events = ["click", "pointerdown", "mousedown", "touchstart", "keydown", "wheel"]

  const unlockAndPlay = () => {
    const p = window.__bgm_player
    if (p) {
      p.audio.muted = false
      p.audio.volume = p.volume > 0 ? p.volume : 0.7
      p.audio.play().then(() => {
        p.isPlaying = true
        updatePlayVisuals(true)
        hideAutoplayPrompt()
      }).catch(() => {})
    }

    if (window.__cyber_weather && window.__cyber_weather.isWeatherActive) {
      window.__cyber_weather.startRainSound()
    }

    removeListeners()
  }

  const removeListeners = () => {
    events.forEach((evt) => {
      window.removeEventListener(evt, unlockAndPlay, true)
      document.removeEventListener(evt, unlockAndPlay, true)
    })
  }

  events.forEach((evt) => {
    window.addEventListener(evt, unlockAndPlay, { passive: true, capture: true })
    document.addEventListener(evt, unlockAndPlay, { passive: true, capture: true })
  })

  const promptBtn = document.getElementById("bgm-prompt-btn")
  const promptBanner = document.getElementById("bgm-autoplay-prompt")
  promptBtn?.addEventListener("click", (e) => {
    e.stopPropagation()
    unlockAndPlay()
  })
  promptBanner?.addEventListener("click", () => {
    unlockAndPlay()
  })
}

function showAutoplayPrompt() {
  const prompt = document.getElementById("bgm-autoplay-prompt")
  if (prompt) {
    prompt.style.display = "flex"
  }
}

function hideAutoplayPrompt() {
  const prompt = document.getElementById("bgm-autoplay-prompt")
  if (prompt) {
    prompt.style.display = "none"
  }
}

// 4. UI DOM Construction & Binding
function ensurePlayerDom() {
  let root = document.getElementById("quartz-bgm-root")
  if (!root) {
    root = document.createElement("div")
    root.id = "quartz-bgm-root"
    root.className = "quartz-bgm"
    root.setAttribute("data-persist", "true")

    root.innerHTML = `
      <!-- Ambient Rain Canvas & Glass Water Simulation -->
      <canvas id="weather-rain-canvas" class="weather-rain-canvas"></canvas>

      <!-- Autoplay Unlock Prompt Banner (Cyber HUD) -->
      <div class="bgm-autoplay-prompt" id="bgm-autoplay-prompt" style="display: none;" title="Bấm vào để mở âm thanh ngay">
        <span class="prompt-pulse-dot"></span>
        <span class="prompt-text">🎵 CHẠM BẤT KỲ ĐÂU ĐỂ BẬT NHẠC NỀN & THỜI TIẾT 🌧️</span>
        <button class="prompt-btn" id="bgm-prompt-btn">BẬT NGAY ▶</button>
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
        <div class="bgm-vinyl-wrapper" id="bgm-vinyl-btn" title="Bấm để mở Trình phát nhạc Jukebox">
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
              <span class="pill-track-title" id="bgm-track-title">Tình Yêu Mới • Chillies</span>
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
            <button class="pill-btn weather-toggle-btn is-weather-on" id="bgm-quick-weather" title="Thời tiết: Bật/Tắt mưa kính & sấm sét" aria-label="Toggle Weather FX">
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
            <!-- Spotlight: Big Vinyl & Spacious Controls -->
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

                <!-- Controls Panel (Spacious 2-tier layout, no crowding) -->
                <div class="bgm-controls-panel">
                  <!-- Row 1: Primary Centered Transport Controls -->
                  <div class="bgm-transport-row">
                    <button class="bgm-step-btn" id="bgm-btn-prev" title="Bài trước (Prev)" aria-label="Previous track">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
                    </button>
                    <button class="bgm-ctrl-play" id="bgm-btn-play" title="Phát / Tạm dừng" aria-label="Play or Pause">
                      <svg class="icon-play" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                      <svg class="icon-pause" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                    </button>
                    <button class="bgm-step-btn" id="bgm-btn-next" title="Bài tiếp (Next)" aria-label="Next track">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
                    </button>
                  </div>

                  <!-- Row 2: Secondary Utilities (Mode, Weather, Volume) -->
                  <div class="bgm-utility-row">
                    <div class="utility-left">
                      <button class="bgm-pill-chip" id="bgm-btn-mode" title="Chế độ phát">
                        <span id="bgm-mode-label">🔁 TẤT CẢ</span>
                      </button>
                      <button class="bgm-pill-chip bgm-weather-chip is-weather-on" id="bgm-modal-weather" title="Bật / Tắt thời tiết mưa kính & sấm sét">
                        <span id="bgm-weather-label">🌧️ MƯA: BẬT</span>
                      </button>
                    </div>
                    <div class="bgm-volume-box">
                      <button class="bgm-mute-btn" id="bgm-btn-mute" title="Tắt / Bật âm">
                        <span id="bgm-mute-icon">🔊</span>
                      </button>
                      <input type="range" class="bgm-volume-slider" id="bgm-volume-slider" min="0" max="1" step="0.01" value="0.7" />
                    </div>
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
                <span class="playlist-count" id="bgm-playlist-count">5 tracks</span>
              </div>

              <div class="bgm-tracklist" id="bgm-tracklist">
                <!-- Tracks dynamically rendered -->
              </div>
            </div>
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

  btnMode?.addEventListener("click", () => {
    const p = window.__bgm_player
    if (!p) return
    if (p.mode === "all") p.mode = "one"
    else if (p.mode === "one") p.mode = "shuffle"
    else p.mode = "all"

    localStorage.setItem("bgm_mode", p.mode)
    updateModeDisplay()
  })

  volSlider?.addEventListener("input", (e) => {
    const p = window.__bgm_player
    if (!p) return
    const val = parseFloat((e.target as HTMLInputElement).value)
    p.volume = val
    p.audio.volume = val
    p.isMuted = val === 0
    localStorage.setItem("bgm_vol", String(val))
    updateVolumeIcon()

    if (window.__cyber_weather?.rainAudio) {
      window.__cyber_weather.rainAudio.volume = Math.min(0.5, val * 0.5)
      window.__cyber_weather.rainAudio.muted = p.isMuted
    }
  })

  btnMute?.addEventListener("click", () => {
    const p = window.__bgm_player
    if (!p) return
    p.isMuted = !p.isMuted
    if (p.isMuted) {
      p.audio.volume = 0
      if (volSlider) volSlider.value = "0"
      if (window.__cyber_weather?.rainAudio) window.__cyber_weather.rainAudio.muted = true
    } else {
      const v = p.volume > 0 ? p.volume : 0.7
      p.audio.volume = v
      if (volSlider) volSlider.value = String(v)
      if (window.__cyber_weather?.rainAudio) {
        window.__cyber_weather.rainAudio.muted = false
        window.__cyber_weather.rainAudio.volume = Math.min(0.5, v * 0.5)
      }
    }
    updateVolumeIcon()
  })

  progressBar?.addEventListener("click", (e) => {
    const p = window.__bgm_player
    if (!p || !p.audio.duration) return
    const rect = progressBar.getBoundingClientRect()
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    p.audio.currentTime = pos * p.audio.duration
  })
}

// 5. Visual State Updaters
function updatePlayVisuals(isPlaying: boolean) {
  const modalContainer = document.getElementById("bgm-modal-container")
  const widget = document.getElementById("bgm-floating-widget")
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
    modalContainer?.classList.add("is-playing")
    widget?.classList.add("is-playing")
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
    modalContainer?.classList.remove("is-playing")
    widget?.classList.remove("is-playing")
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

// 6. Robust Lifecycle hook: runs once for singleton setup, preserves continuity on SPA transitions
let bgmInitialized = false

function onNav() {
  ensurePlayerDom()

  if (!bgmInitialized) {
    bgmInitialized = true
    initBgmPlayer()
  } else {
    // On subsequent SPA page transitions, keep audio & canvas running with zero interruption
    updatePlayVisuals(window.__bgm_player?.isPlaying ?? false)
    updatePillInfo()
    renderTracklist()
    // Re-verify & re-sync weather engine canvas across notes
    window.__cyber_weather?.initDOM()
  }
}

document.addEventListener("nav", onNav)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onNav)
} else {
  onNav()
}
