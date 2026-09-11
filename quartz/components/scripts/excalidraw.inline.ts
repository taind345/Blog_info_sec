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

    function updateTransform() {
      if (!wrapper) return
      wrapper.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`
      wrapper.style.transformOrigin = "0 0"
    }

    const btnZoomIn = container.querySelector(".zoom-in")
    const btnZoomOut = container.querySelector(".zoom-out")
    const btnReset = container.querySelector(".zoom-reset")
    const btnFullscreen = container.querySelector(".fullscreen")

    btnZoomIn?.addEventListener("click", (e) => {
      e.stopPropagation()
      scale = Math.min(scale * 1.25, 5)
      updateTransform()
    })

    btnZoomOut?.addEventListener("click", (e) => {
      e.stopPropagation()
      scale = Math.max(scale / 1.25, 0.2)
      updateTransform()
    })

    btnReset?.addEventListener("click", (e) => {
      e.stopPropagation()
      scale = 1
      pointX = 0
      pointY = 0
      updateTransform()
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

    viewport.addEventListener("mousedown", (e) => {
      if ((e.target as HTMLElement).closest("a")) return
      isPanning = true
      startX = e.clientX - pointX
      startY = e.clientY - pointY
      viewport.style.cursor = "grabbing"
    })

    window.addEventListener("mousemove", (e) => {
      if (!isPanning) return
      pointX = e.clientX - startX
      pointY = e.clientY - startY
      updateTransform()
    })

    window.addEventListener("mouseup", () => {
      if (!isPanning) return
      isPanning = false
      viewport.style.cursor = "grab"
    })

    viewport.addEventListener("wheel", (e) => {
      if (e.ctrlKey || e.metaKey || container.classList.contains("is-fullscreen")) {
        e.preventDefault()
        const xs = (e.clientX - pointX) / scale
        const ys = (e.clientY - pointY) / scale
        const delta = -e.deltaY
        if (delta > 0) {
          scale = Math.min(scale * 1.15, 5)
        } else {
          scale = Math.max(scale / 1.15, 0.2)
        }
        pointX = e.clientX - xs * scale
        pointY = e.clientY - ys * scale
        updateTransform()
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
