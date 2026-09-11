function setupExcalidraw() {
  const containers = document.querySelectorAll<HTMLElement>(".excalidraw-container")
  containers.forEach((container) => {
    if (container.dataset.initialized === "true") return
    container.dataset.initialized = "true"

    const viewport = container.querySelector<HTMLElement>(".excalidraw-viewport")
    const wrapper = container.querySelector<HTMLElement>(".excalidraw-canvas-wrapper")
    const svg = container.querySelector<SVGElement>("svg.excalidraw-svg")
    if (!viewport || !wrapper || !svg) return

    let scale = 1
    let pointX = 0
    let pointY = 0
    let isPanning = false
    let startX = 0
    let startY = 0
    let rafId: number | null = null

    // Hardware-accelerated 3D transform with subpixel positioning
    function applyTransform() {
      if (!wrapper) return
      wrapper.style.transform = `translate3d(${pointX.toFixed(2)}px, ${pointY.toFixed(2)}px, 0px) scale(${scale.toFixed(4)})`
    }

    function scheduleUpdate() {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        applyTransform()
      })
    }

    // Auto-fit & center the diagram within the viewport
    function fitToScreen() {
      const vRect = viewport.getBoundingClientRect()
      const vw = vRect.width || 800
      const vh = vRect.height || 560
      const svgW = parseFloat(svg.getAttribute("data-width") || "1000")
      const svgH = parseFloat(svg.getAttribute("data-height") || "800")

      const pad = 36
      const availW = Math.max(vw - pad * 2, 100)
      const availH = Math.max(vh - pad * 2, 100)

      const fitScale = Math.min(availW / svgW, availH / svgH, 1.25)
      scale = Math.max(Math.min(fitScale, 2.5), 0.25)

      pointX = (vw - svgW * scale) / 2
      pointY = (vh - svgH * scale) / 2

      scheduleUpdate()
    }

    // Initial fit on load
    requestAnimationFrame(() => {
      fitToScreen()
    })

    const btnZoomIn = container.querySelector(".zoom-in")
    const btnZoomOut = container.querySelector(".zoom-out")
    const btnReset = container.querySelector(".zoom-reset")
    const btnFullscreen = container.querySelector(".fullscreen")

    btnZoomIn?.addEventListener("click", (e) => {
      e.stopPropagation()
      const vRect = viewport.getBoundingClientRect()
      const cx = vRect.width / 2
      const cy = vRect.height / 2
      const prevScale = scale
      scale = Math.min(scale * 1.25, 5)
      pointX = cx - (cx - pointX) * (scale / prevScale)
      pointY = cy - (cy - pointY) * (scale / prevScale)
      scheduleUpdate()
    })

    btnZoomOut?.addEventListener("click", (e) => {
      e.stopPropagation()
      const vRect = viewport.getBoundingClientRect()
      const cx = vRect.width / 2
      const cy = vRect.height / 2
      const prevScale = scale
      scale = Math.max(scale / 1.25, 0.15)
      pointX = cx - (cx - pointX) * (scale / prevScale)
      pointY = cy - (cy - pointY) * (scale / prevScale)
      scheduleUpdate()
    })

    btnReset?.addEventListener("click", (e) => {
      e.stopPropagation()
      fitToScreen()
    })

    btnFullscreen?.addEventListener("click", (e) => {
      e.stopPropagation()
      if (!document.fullscreenElement) {
        if (container.requestFullscreen) {
          container.requestFullscreen()
        }
        container.classList.add("is-fullscreen")
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
        container.classList.remove("is-fullscreen")
      }
      setTimeout(fitToScreen, 150)
    })

    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        container.classList.remove("is-fullscreen")
      }
      setTimeout(fitToScreen, 100)
    })

    // MOUSE DRAGGING (Left click or Middle click)
    viewport.addEventListener("mousedown", (e) => {
      const target = e.target as Element
      // Let clickable links and jump buttons activate naturally
      if (target && (target.closest("a") || target.tagName.toLowerCase() === "a" || target.closest(".notion-embed-jump"))) {
        return
      }
      isPanning = true
      startX = e.clientX - pointX
      startY = e.clientY - pointY
      viewport.style.cursor = "grabbing"
      viewport.classList.add("is-panning")
    })

    window.addEventListener("mousemove", (e) => {
      if (!isPanning) return
      pointX = e.clientX - startX
      pointY = e.clientY - startY
      scheduleUpdate()
    }, { passive: true })

    window.addEventListener("mouseup", () => {
      if (!isPanning) return
      isPanning = false
      viewport.style.cursor = "grab"
      viewport.classList.remove("is-panning")
    })

    // TOUCH SUPPORT (Mobile & Tablet: 1-finger pan, 2-finger pinch zoom)
    let touchStartDist = 0
    let touchStartScale = 1
    let touchMidX = 0
    let touchMidY = 0

    viewport.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        const t = e.touches[0]
        const target = t.target as Element
        if (target && (target.closest("a") || target.tagName.toLowerCase() === "a")) return
        isPanning = true
        startX = t.clientX - pointX
        startY = t.clientY - pointY
        viewport.classList.add("is-panning")
      } else if (e.touches.length === 2) {
        isPanning = false
        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        touchStartDist = Math.hypot(dx, dy)
        touchStartScale = scale
        const rect = viewport.getBoundingClientRect()
        touchMidX = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left
        touchMidY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top
      }
    }, { passive: true })

    viewport.addEventListener("touchmove", (e) => {
      if (e.touches.length === 1 && isPanning) {
        pointX = e.touches[0].clientX - startX
        pointY = e.touches[0].clientY - startY
        scheduleUpdate()
      } else if (e.touches.length === 2 && touchStartDist > 0) {
        e.preventDefault()
        const dx = e.touches[0].clientX - e.touches[1].clientX
        const dy = e.touches[0].clientY - e.touches[1].clientY
        const dist = Math.hypot(dx, dy)
        const newScale = Math.max(Math.min(touchStartScale * (dist / touchStartDist), 5), 0.2)
        pointX = touchMidX - (touchMidX - pointX) * (newScale / scale)
        pointY = touchMidY - (touchMidY - pointY) * (newScale / scale)
        scale = newScale
        scheduleUpdate()
      }
    }, { passive: false })

    viewport.addEventListener("touchend", () => {
      isPanning = false
      touchStartDist = 0
      viewport.classList.remove("is-panning")
    })

    // SMOOTH WHEEL ZOOM (Trackpad pinch & Ctrl+Wheel zoom towards cursor)
    viewport.addEventListener("wheel", (e) => {
      // Zoom on Ctrl/Cmd + Wheel, or inside fullscreen, or normal wheel when over canvas
      const shouldZoom = e.ctrlKey || e.metaKey || container.classList.contains("is-fullscreen")
      if (shouldZoom) {
        e.preventDefault()
        const rect = viewport.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const prevScale = scale
        const zoomDelta = -e.deltaY
        const zoomFactor = Math.exp(Math.max(Math.min(zoomDelta * 0.0018, 0.22), -0.22))

        scale = Math.max(Math.min(scale * zoomFactor, 6), 0.15)

        // Zoom centered at cursor point
        pointX = mouseX - (mouseX - pointX) * (scale / prevScale)
        pointY = mouseY - (mouseY - pointY) * (scale / prevScale)
        scheduleUpdate()
      }
    }, { passive: false })
  })
}

document.addEventListener("nav", setupExcalidraw)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupExcalidraw)
} else {
  setupExcalidraw()
}
