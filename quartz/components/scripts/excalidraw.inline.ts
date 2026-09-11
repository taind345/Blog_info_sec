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

    function applyTransform() {
      if (!wrapper) return
      wrapper.style.transform = `translate3d(${pointX}px, ${pointY}px, 0) scale(${scale})`
      wrapper.style.transformOrigin = "0 0"
    }

    function scheduleUpdate() {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        applyTransform()
      })
    }

    const btnZoomIn = container.querySelector(".zoom-in")
    const btnZoomOut = container.querySelector(".zoom-out")
    const btnReset = container.querySelector(".zoom-reset")
    const btnFullscreen = container.querySelector(".fullscreen")

    btnZoomIn?.addEventListener("click", (e) => {
      e.stopPropagation()
      scale = Math.min(scale * 1.25, 4)
      scheduleUpdate()
    })

    btnZoomOut?.addEventListener("click", (e) => {
      e.stopPropagation()
      scale = Math.max(scale / 1.25, 0.25)
      scheduleUpdate()
    })

    btnReset?.addEventListener("click", (e) => {
      e.stopPropagation()
      scale = 1
      pointX = 0
      pointY = 0
      scheduleUpdate()
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
    })

    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement) {
        container.classList.remove("is-fullscreen")
      }
    })

    // MOUSE PANNING: Ignore if clicking directly on a link!
    viewport.addEventListener("mousedown", (e) => {
      const target = e.target as Element
      if (target && (target.closest("a") || target.tagName.toLowerCase() === "a")) {
        return // Let native link click through!
      }
      isPanning = true
      startX = e.clientX - pointX
      startY = e.clientY - pointY
      viewport.style.cursor = "grabbing"
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
    })

    // WHEEL ZOOM (Ctrl/Meta + Wheel or in Fullscreen)
    viewport.addEventListener("wheel", (e) => {
      if (e.ctrlKey || e.metaKey || container.classList.contains("is-fullscreen")) {
        e.preventDefault()
        const rect = viewport.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const prevScale = scale
        const delta = -e.deltaY
        if (delta > 0) {
          scale = Math.min(scale * 1.15, 4)
        } else {
          scale = Math.max(scale / 1.15, 0.25)
        }

        // Zoom toward cursor
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
