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

// 4. Cozy Drifting Snowflakes
interface Snowflake {
  x: number
  y: number
  r: number
  speedY: number
  driftSpeed: number
  swayPhase: number
  swaySpeed: number
  swayAmp: number
  alpha: number
}

type WeatherMode = "rain" | "snow" | "off"

class CyberWeatherEngine {
  canvas: HTMLCanvasElement | null = null
  ctx: CanvasRenderingContext2D | null = null
  animFrameId: number | null = null
  isInitialized: boolean = false
  lastTime: number = 0

  // Weather Mode: "rain" | "snow" | "off"
  weatherMode: WeatherMode = "rain"

  // Audio Engines for Rain & Christmas Noel Ambience
  rainAudio: HTMLAudioElement | null = null
  christmasAudio: HTMLAudioElement | null = null
  isSoundRunning: boolean = false

  // Atmospheric Particles (Pre-allocated Static Pools)
  streaks: RainStreak[] = []
  glassDrops: GlassDrop[] = []
  snowflakes: Snowflake[] = []
  activeLightning: ActiveLightning | null = null

  width: number = 0
  height: number = 0
  nextLightningTime: number = 0
  frameCounter: number = 0
  isTabVisible: boolean = true
  resizeTimeout: any = null

  constructor() {
    const savedMode = localStorage.getItem("weather_mode") as WeatherMode | null
    if (savedMode === "rain" || savedMode === "snow" || savedMode === "off") {
      this.weatherMode = savedMode
    } else {
      const legacy = localStorage.getItem("weather_active")
      this.weatherMode = legacy === "false" ? "off" : "rain"
    }
  }

  get isWeatherActive(): boolean {
    return this.weatherMode !== "off"
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

    if (this.weatherMode !== "off") {
      this.canvas.classList.add("is-active")
      if (!this.animFrameId && this.isTabVisible) {
        this.lastTime = 0
        this.loop(performance.now())
      }
    } else {
      this.canvas.classList.remove("is-active")
    }

    this.updateButtons()
    this.updateSnowman()
  }

  handleVisibility = () => {
    this.isTabVisible = !document.hidden
    if (this.isTabVisible && this.weatherMode !== "off" && !this.animFrameId) {
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

    // Pre-allocated Static Pool of Fine Rain Streaks (75 particles, allocate only once)
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

    // Pre-allocated Static Pool of Delicate Glass Droplets (18 particles, allocate only once)
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

    // Pre-allocated Static Pool of Realistic Snowflakes (85 particles, allocate only once)
    if (this.snowflakes.length === 0) {
      const flakeCount = Math.min(90, Math.max(50, Math.floor((this.width * this.height) / 16000)))
      for (let i = 0; i < flakeCount; i++) {
        const depth = Math.random()
        this.snowflakes.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          r: 1.0 + depth * 2.2,
          speedY: 0.65 + depth * 1.25,
          driftSpeed: -0.3 + (Math.random() - 0.5) * 0.35,
          swayPhase: Math.random() * Math.PI * 2,
          swaySpeed: 0.015 + Math.random() * 0.02,
          swayAmp: 0.6 + depth * 0.8,
          alpha: 0.35 + depth * 0.55,
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
      const masterVol = window.__bgm_player?.volume ?? 0.7
      const isMuted = window.__bgm_player?.isMuted ?? false
      this.rainAudio.volume = isMuted ? 0 : Math.min(0.5, masterVol * 0.5)
      this.rainAudio.muted = isMuted
    } catch (e) {
      console.warn("[Weather] Rain audio init error:", e)
    }
  }

  initChristmasAudio() {
    if (this.christmasAudio) return
    try {
      this.christmasAudio = new Audio()
      this.christmasAudio.preload = "none"
      this.christmasAudio.src = resolveAssetUrl("static/music/christmas-ambient.mp3")
      this.christmasAudio.loop = true
      const masterVol = window.__bgm_player?.volume ?? 0.7
      const isMuted = window.__bgm_player?.isMuted ?? false
      this.christmasAudio.volume = isMuted ? 0 : Math.min(0.42, masterVol * 0.42)
      this.christmasAudio.muted = isMuted
    } catch (e) {
      console.warn("[Weather] Christmas audio init error:", e)
    }
  }

  syncVolume() {
    const masterVol = window.__bgm_player?.volume ?? 0.7
    const isMuted = window.__bgm_player?.isMuted ?? false
    if (this.rainAudio) {
      this.rainAudio.volume = isMuted ? 0 : Math.min(0.5, masterVol * 0.5)
      this.rainAudio.muted = isMuted
    }
    if (this.christmasAudio) {
      this.christmasAudio.volume = isMuted ? 0 : Math.min(0.42, masterVol * 0.42)
      this.christmasAudio.muted = isMuted
    }
  }

  setMode(mode: WeatherMode) {
    this.weatherMode = mode
    localStorage.setItem("weather_mode", mode)
    localStorage.setItem("weather_active", mode !== "off" ? "true" : "false")

    if (mode === "rain") {
      if (this.canvas) this.canvas.classList.add("is-active")
      this.stopChristmasSound()
      this.startRainSound()
      this.scheduleNextLightning()
    } else if (mode === "snow") {
      if (this.canvas) this.canvas.classList.add("is-active")
      this.stopRainSound()
      this.startChristmasSound()
      this.activeLightning = null
    } else {
      if (this.canvas) this.canvas.classList.remove("is-active")
      this.stopAllAudio()
      this.activeLightning = null
      if (this.ctx && this.canvas) {
        this.ctx.clearRect(0, 0, this.width, this.height)
      }
    }

    this.updateButtons()
    this.updateSnowman()

    if (mode !== "off" && !this.animFrameId && this.isTabVisible) {
      this.lastTime = 0
      this.loop(performance.now())
    }
  }

  cycleMode() {
    if (this.weatherMode === "rain") {
      this.setMode("snow")
    } else if (this.weatherMode === "snow") {
      this.setMode("off")
    } else {
      this.setMode("rain")
    }
  }

  start() {
    this.setMode(this.weatherMode === "off" ? "rain" : this.weatherMode)
  }

  stop(save: boolean = true) {
    this.setMode("off")
    if (!save) localStorage.removeItem("weather_mode")
  }

  toggle() {
    this.cycleMode()
  }

  updateButtons() {
    const quickBtn = document.getElementById("bgm-quick-weather")
    const quickIcon = quickBtn?.querySelector(".weather-icon-indicator") as HTMLElement | null

    const btnRain = document.getElementById("weather-btn-rain")
    const btnSnow = document.getElementById("weather-btn-snow")
    const btnOff = document.getElementById("weather-btn-off")

    // Update Quick Pill button
    if (quickBtn) {
      quickBtn.classList.remove("is-weather-on", "is-rain-mode", "is-snow-mode")
      if (this.weatherMode === "rain") {
        quickBtn.classList.add("is-weather-on", "is-rain-mode")
        quickBtn.title = "Thời tiết: Mưa kính & tia sét (Đang bật) - Bấm để chuyển sang Tuyết rơi"
        if (quickIcon) quickIcon.textContent = "🌧️"
      } else if (this.weatherMode === "snow") {
        quickBtn.classList.add("is-weather-on", "is-snow-mode")
        quickBtn.title = "Thời tiết: Tuyết rơi & Giáng sinh (Đang bật) - Bấm để tắt"
        if (quickIcon) quickIcon.textContent = "❄️"
      } else {
        quickBtn.title = "Thời tiết: Đang tắt - Bấm để bật Mưa kính"
        if (quickIcon) quickIcon.textContent = "☁️"
      }
    }

    // Update Modal selector chips
    const setChip = (btn: HTMLElement | null, active: boolean, type: string) => {
      if (!btn) return
      btn.classList.remove("is-active", "is-rain", "is-snow", "is-off")
      if (active) {
        btn.classList.add("is-active", `is-${type}`)
      }
    }

    setChip(btnRain, this.weatherMode === "rain", "rain")
    setChip(btnSnow, this.weatherMode === "snow", "snow")
    setChip(btnOff, this.weatherMode === "off", "off")
  }

  updateSnowman() {
    const snowman = document.getElementById("cyber-snowman-corner")
    if (snowman) {
      if (this.weatherMode === "snow") {
        snowman.classList.add("is-active")
      } else {
        snowman.classList.remove("is-active")
      }
    }
  }

  startRainSound() {
    if (this.weatherMode !== "rain") return
    this.stopChristmasSound()
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
    }
  }

  startChristmasSound() {
    if (this.weatherMode !== "snow") return
    this.stopRainSound()
    this.initChristmasAudio()
    if (this.christmasAudio && this.christmasAudio.paused) {
      this.christmasAudio.play().then(() => {
        this.isSoundRunning = true
      }).catch((e) => {
        console.log("[Weather] Christmas audio waiting for gesture unlock:", e)
      })
    }
  }

  stopChristmasSound() {
    if (this.christmasAudio && !this.christmasAudio.paused) {
      this.christmasAudio.pause()
    }
  }

  stopAllAudio() {
    this.stopRainSound()
    this.stopChristmasSound()
    this.isSoundRunning = false
  }

  startWeatherAudio() {
    if (this.weatherMode === "rain") {
      this.startRainSound()
    } else if (this.weatherMode === "snow") {
      this.startChristmasSound()
    }
  }

  scheduleNextLightning() {
    const delay = 18000 + Math.random() * 22000
    this.nextLightningTime = Date.now() + delay
  }

  // Lightweight Fractal Lightning Bolt (Zero Gaussian Blur Overhead)
  triggerLightning() {
    if (this.weatherMode !== "rain") return

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
    if (this.weatherMode === "off" || !this.isTabVisible) {
      this.animFrameId = null
      this.lastTime = 0
      return
    }

    if (!this.lastTime) this.lastTime = timestamp
    const elapsed = timestamp - this.lastTime
    this.lastTime = timestamp
    const dt = Math.min(Math.max(elapsed / 16.67, 0.5), 2.0)

    this.frameCounter++

    const ctx = this.ctx
    if (ctx && this.canvas) {
      ctx.clearRect(0, 0, this.width, this.height)

      if (this.weatherMode === "rain") {
        if (Date.now() >= this.nextLightningTime) {
          this.triggerLightning()
        }

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
        const windAngle = -1.5
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

      } else if (this.weatherMode === "snow") {
        // ==========================================
        // 4. RENDER REALISTIC FALLING SNOW (Zero Heap Alloc)
        // ==========================================
        // Pass A: Soft Flake Outer Glow
        ctx.fillStyle = "rgba(224, 242, 254, 0.22)"
        ctx.beginPath()
        for (let i = 0; i < this.snowflakes.length; i++) {
          const f = this.snowflakes[i]
          if (f.r > 2.0) {
            ctx.moveTo(f.x + f.r * 1.9, f.y)
            ctx.arc(f.x, f.y, f.r * 1.9, 0, Math.PI * 2)
          }
        }
        ctx.fill()

        // Pass B: Crisp White Snowflakes Body
        ctx.fillStyle = "rgba(255, 255, 255, 0.88)"
        ctx.beginPath()
        for (let i = 0; i < this.snowflakes.length; i++) {
          const f = this.snowflakes[i]
          f.swayPhase += f.swaySpeed * dt
          f.x += (f.driftSpeed + Math.sin(f.swayPhase) * f.swayAmp) * dt
          f.y += f.speedY * dt

          if (f.y > this.height + 10) {
            f.y = -10
            f.x = Math.random() * (this.width + 100) - 50
          }
          if (f.x > this.width + 50) f.x = -30
          else if (f.x < -50) f.x = this.width + 30

          ctx.moveTo(f.x + f.r, f.y)
          ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
        }
        ctx.fill()
      }
    }

    this.animFrameId = requestAnimationFrame(this.loop)
  }
}

// 5. Dynamic Undulating Audio Soundwave Line (Sóng âm uốn lượn)
class SoundwaveEngine {
  canvas: HTMLCanvasElement | null = null
  ctx: CanvasRenderingContext2D | null = null
  animId: number | null = null
  phase: number = 0
  currentAmp: number = 2.0
  targetAmp: number = 2.0

  init() {
    this.canvas = document.getElementById("bgm-soundwave-canvas") as HTMLCanvasElement | null
    if (!this.canvas) return
    this.ctx = this.canvas.getContext("2d")
    this.resize()

    if (!this.animId) {
      this.loop()
    }
  }

  resize() {
    if (!this.canvas) return
    const rect = this.canvas.parentElement?.getBoundingClientRect()
    const w = rect && rect.width > 0 ? Math.floor(rect.width) : 380
    this.canvas.width = w
    this.canvas.height = 34
    this.canvas.style.width = `${w}px`
    this.canvas.style.height = `34px`
  }

  loop = () => {
    this.animId = requestAnimationFrame(this.loop)

    const modal = document.getElementById("bgm-modal-backdrop")
    // Only execute render pass when modal is open to ensure zero background CPU usage
    if (!modal || modal.style.display === "none") return

    if (!this.canvas || !this.ctx) {
      this.canvas = document.getElementById("bgm-soundwave-canvas") as HTMLCanvasElement | null
      if (this.canvas) {
        this.ctx = this.canvas.getContext("2d")
        this.resize()
      }
      return
    }

    const ctx = this.ctx
    const w = this.canvas.width
    const h = this.canvas.height
    if (w <= 0 || h <= 0) return

    const midY = h / 2
    const isPlaying = window.__bgm_player?.isPlaying ?? false

    // Smooth amplitude transitions (lerp)
    this.targetAmp = isPlaying ? 9.5 : 1.2
    this.currentAmp += (this.targetAmp - this.currentAmp) * 0.08

    if (isPlaying) {
      this.phase += 0.075
    } else {
      this.phase += 0.015
    }

    ctx.clearRect(0, 0, w, h)

    const segments = 60
    const step = w / segments

    // 1. Primary glowing undulating wave line (Uốn lượn chính - Cyber Neon Green #00ff66)
    ctx.beginPath()
    ctx.lineWidth = 2.2
    ctx.strokeStyle = "#00ff66"
    ctx.shadowColor = "#00ff66"
    ctx.shadowBlur = 8

    for (let i = 0; i <= segments; i++) {
      const x = i * step
      const taper = Math.sin((i / segments) * Math.PI)
      const y =
        midY +
        Math.sin(i * 0.25 + this.phase) * (this.currentAmp * taper) +
        Math.sin(i * 0.12 - this.phase * 0.75) * (this.currentAmp * 0.45 * taper)

      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.stroke()

    // 2. Secondary translucent harmonic wave line (Uốn lượn phụ mềm mại)
    ctx.beginPath()
    ctx.lineWidth = 1.2
    ctx.strokeStyle = "rgba(0, 255, 102, 0.4)"
    ctx.shadowBlur = 0

    for (let i = 0; i <= segments; i++) {
      const x = i * step
      const taper = Math.sin((i / segments) * Math.PI)
      const y =
        midY +
        Math.sin(i * 0.32 - this.phase * 1.3) * (this.currentAmp * 0.65 * taper) +
        Math.cos(i * 0.16 + this.phase * 0.6) * (this.currentAmp * 0.35 * taper)

      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.stroke()
  }
}

export {}

declare global {
  interface Window {
    __bgm_player?: BgmGlobalState
    __cyber_weather?: CyberWeatherEngine
    __soundwave_engine?: SoundwaveEngine
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

  // 3. Staggered Weather Canvas & Soundwave Engine Start
  if (!window.__cyber_weather) {
    window.__cyber_weather = new CyberWeatherEngine()
  }
  if (!window.__soundwave_engine) {
    window.__soundwave_engine = new SoundwaveEngine()
  }
  setTimeout(() => {
    window.__cyber_weather?.initDOM()
    window.__soundwave_engine?.init()
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
        window.__cyber_weather.startWeatherAudio()
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
        window.__cyber_weather.startWeatherAudio()
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
          window.__cyber_weather.startWeatherAudio()
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
      window.__cyber_weather.startWeatherAudio()
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

      <!-- Interactive Christmas Snowman in Screen Corner (Tuyết rơi & Noel) -->
      <div class="cyber-snowman-corner" id="cyber-snowman-corner" title="⛄ Chạm vào tớ để nhảy múa!">
        <div class="snowman-tooltip">Merry Christmas! 🎄✨</div>
        <svg class="snowman-svg" viewBox="0 0 120 140" width="86" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Ground Snow Drift -->
          <ellipse cx="60" cy="133" rx="46" ry="7" fill="rgba(255, 255, 255, 0.55)" filter="drop-shadow(0 0 8px rgba(56, 189, 248, 0.6))" />
          <ellipse cx="60" cy="131" rx="36" ry="5" fill="#e0f2fe" />

          <!-- Left Twig Arm (Waving hello) -->
          <g class="snowman-arm-left">
            <path d="M35 88 C25 82 15 72 10 65 M15 72 L12 80 M18 70 L26 66" stroke="#854d0e" stroke-width="3" stroke-linecap="round" />
          </g>

          <!-- Right Twig Arm -->
          <g class="snowman-arm-right">
            <path d="M85 88 C95 85 106 78 112 74 M102 81 L108 86 M104 79 L100 70" stroke="#854d0e" stroke-width="3" stroke-linecap="round" />
          </g>

          <!-- Snowman Bottom Ball -->
          <circle cx="60" cy="104" r="28" fill="url(#snowGrad)" stroke="rgba(56, 189, 248, 0.45)" stroke-width="1.5" />
          <!-- Cyber Core Neon Buttons -->
          <circle cx="60" cy="95" r="2.8" fill="#00ff66" filter="drop-shadow(0 0 4px #00ff66)" />
          <circle cx="60" cy="106" r="2.8" fill="#38bdf8" filter="drop-shadow(0 0 4px #38bdf8)" />
          <circle cx="60" cy="117" r="2.8" fill="#00ff66" filter="drop-shadow(0 0 4px #00ff66)" />

          <!-- Snowman Head Ball -->
          <circle cx="60" cy="62" r="20" fill="url(#snowGrad)" stroke="rgba(56, 189, 248, 0.45)" stroke-width="1.5" />

          <!-- Blushing Cheeks -->
          <ellipse cx="48" cy="68" rx="3" ry="2" fill="rgba(244, 63, 94, 0.4)" />
          <ellipse cx="72" cy="68" rx="3" ry="2" fill="rgba(244, 63, 94, 0.4)" />

          <!-- Coal Eyes with Blinking Animation -->
          <g class="snowman-eyes">
            <ellipse cx="53" cy="59" rx="2.5" ry="3" fill="#0f172a" />
            <circle cx="54" cy="58" r="0.8" fill="#ffffff" />
            <ellipse cx="67" cy="59" rx="2.5" ry="3" fill="#0f172a" />
            <circle cx="68" cy="58" r="0.8" fill="#ffffff" />
          </g>

          <!-- Glowing Carrot Nose -->
          <polygon points="60,63 59,67 43,67" fill="#f97316" stroke="#ea580c" stroke-width="0.8" filter="drop-shadow(0 0 4px rgba(249, 115, 22, 0.7))" />

          <!-- Friendly Smile -->
          <circle cx="53" cy="72" r="1.2" fill="#334155" />
          <circle cx="57" cy="74" r="1.2" fill="#334155" />
          <circle cx="63" cy="74" r="1.2" fill="#334155" />
          <circle cx="67" cy="72" r="1.2" fill="#334155" />

          <!-- Festive Scarf -->
          <g class="snowman-scarf">
            <path d="M42 75 C48 79 72 79 78 75 C80 81 74 86 60 86 C46 86 40 81 42 75 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="1" />
            <line x1="50" y1="76" x2="52" y2="84" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="2 2" />
            <line x1="68" y1="76" x2="66" y2="84" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="2 2" />
            <!-- Fluttering Scarf Tail -->
            <path class="scarf-tail" d="M68 81 C72 88 75 97 78 106 C74 107 68 105 66 99 C66 92 67 86 68 81 Z" fill="#dc2626" />
            <line x1="72" y1="106" x2="72" y2="110" stroke="#fef08a" stroke-width="1.2" />
            <line x1="75" y1="106" x2="76" y2="110" stroke="#fef08a" stroke-width="1.2" />
          </g>

          <!-- Top Hat -->
          <g class="snowman-hat">
            <ellipse cx="60" cy="46" rx="24" ry="4.5" fill="#1e293b" stroke="#0f172a" stroke-width="1" />
            <path d="M46 44 L49 18 C49 16 52 14 60 14 C68 14 71 16 71 18 L74 44 Z" fill="#1e293b" stroke="#0f172a" stroke-width="1" />
            <!-- Festive Hat Ribbon -->
            <path d="M48 42 L48.5 36 C54 38 66 38 71.5 36 L72 42 Z" fill="#ef4444" />
            <!-- Cyber Neon Holly -->
            <circle cx="68" cy="37" r="2.2" fill="#00ff66" filter="drop-shadow(0 0 3px #00ff66)" />
            <circle cx="71" cy="35" r="1.8" fill="#f43f5e" filter="drop-shadow(0 0 3px #f43f5e)" />
          </g>

          <defs>
            <linearGradient id="snowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="70%" stop-color="#f0f9ff" />
              <stop offset="100%" stop-color="#bae6fd" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Autoplay Unlock Prompt Banner (Cyber HUD) -->
      <div class="bgm-autoplay-prompt" id="bgm-autoplay-prompt" style="display: none;" title="Bấm vào để mở âm thanh ngay">
        <span class="prompt-pulse-dot"></span>
        <span class="prompt-text">🎵 CHẠM BẤT KỲ ĐÂU ĐỂ BẬT NHẠC NỀN & THỜI TIẾT 🌧️❄️</span>
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
              <svg viewBox="0 0 24 24" class="vinyl-music-icon" fill="currentColor">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
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
                <span class="eq-bar bar-4"></span>
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
            <button class="pill-btn weather-toggle-btn is-weather-on" id="bgm-quick-weather" title="Thời tiết: Bật/Đổi hiệu ứng (Mưa 🌧️ / Tuyết ❄️ / Tắt ☁️)" aria-label="Toggle Weather FX">
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
                    <svg viewBox="0 0 24 24" class="spotlight-music-icon" fill="currentColor">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
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

                <!-- Animated Undulating Music Wave Line (Sóng âm uốn lượn) -->
                <div class="bgm-soundwave-container" id="bgm-soundwave-container" title="Audio Waveform Visualizer">
                  <canvas id="bgm-soundwave-canvas" class="bgm-soundwave-canvas" height="34"></canvas>
                </div>

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

                  <!-- Row 2: Secondary Utilities (Mode, Weather Selector, Volume) -->
                  <div class="bgm-utility-row">
                    <div class="utility-left">
                      <button class="bgm-pill-chip" id="bgm-btn-mode" title="Chế độ phát">
                        <span id="bgm-mode-label">🔁 TẤT CẢ</span>
                      </button>
                      <!-- Weather Selector: 3 direct options (Mưa, Tuyết, Tắt) -->
                      <div class="bgm-weather-selector" id="bgm-weather-selector" title="Chọn hiệu ứng thời tiết">
                        <button class="weather-chip-btn" data-weather="rain" id="weather-btn-rain" title="Thời tiết Mưa kính & Sấm sét">
                          🌧️ MƯA
                        </button>
                        <button class="weather-chip-btn" data-weather="snow" id="weather-btn-snow" title="Thời tiết Tuyết rơi & Giáng sinh">
                          ❄️ TUYẾT
                        </button>
                        <button class="weather-chip-btn" data-weather="off" id="weather-btn-off" title="Tắt hiệu ứng thời tiết">
                          ☁️ TẮT
                        </button>
                      </div>
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

  const weatherBtnRain = document.getElementById("weather-btn-rain")
  const weatherBtnSnow = document.getElementById("weather-btn-snow")
  const weatherBtnOff = document.getElementById("weather-btn-off")
  const snowmanCorner = document.getElementById("cyber-snowman-corner")

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
      window.__soundwave_engine?.resize()
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
      window.__cyber_weather.cycleMode()
    }
  })

  weatherBtnRain?.addEventListener("click", (e) => {
    e.stopPropagation()
    window.__cyber_weather?.setMode("rain")
  })

  weatherBtnSnow?.addEventListener("click", (e) => {
    e.stopPropagation()
    window.__cyber_weather?.setMode("snow")
  })

  weatherBtnOff?.addEventListener("click", (e) => {
    e.stopPropagation()
    window.__cyber_weather?.setMode("off")
  })

  snowmanCorner?.addEventListener("click", (e) => {
    e.stopPropagation()
    snowmanCorner.classList.remove("is-bouncing")
    void snowmanCorner.offsetWidth // Trigger reflow for re-animation
    snowmanCorner.classList.add("is-bouncing")
    setTimeout(() => {
      snowmanCorner.classList.remove("is-bouncing")
    }, 650)
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

    if (window.__cyber_weather) {
      window.__cyber_weather.syncVolume()
    }
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

    if (window.__cyber_weather) {
      window.__cyber_weather.syncVolume()
    }
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
    window.__soundwave_engine?.init()
  }
}

document.addEventListener("nav", onNav)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", onNav)
} else {
  onNav()
}
