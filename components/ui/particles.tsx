"use client"

import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react"

import { cn } from "@/lib/utils"

// ─── Mouse tracker ────────────────────────────────────────────────────────────
interface MousePosition {
  x: number
  y: number
}

function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return mousePosition
}

// ─── SVG star spark (exact shape from provided SVG) ──────────────────────────
// The original SVG is 509×490. The 4-pointed star is traced from the PNG
// embedded in that SVG. We reproduce it as a clean path in a 100×100 viewBox.
const STAR_PATH = `
  M 50,2
  C 50,2 43,43 2,50
  C 2,50 43,57 50,98
  C 50,98 57,57 98,50
  C 98,50 57,43 50,2
  Z
`.trim()

// ─── Roaming Sparks component ─────────────────────────────────────────────────
// Exactly 2 sparks, staggered by 1.1 s.
// Each cycle: fade-in + grow → hold → fade-out + shrink → teleport → repeat.
const RoamingSparks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cleanups: (() => void)[] = []

    // Build one SVG spark element
    function makeSVGEl(): SVGSVGElement {
      const gradId = `sg_${Math.random().toString(36).slice(2)}`
      const ns = "http://www.w3.org/2000/svg"

      const svg = document.createElementNS(ns, "svg") as SVGSVGElement
      svg.setAttribute("viewBox", "0 0 100 100")
      svg.setAttribute("xmlns", ns)

      // Defs: radial gradient (purple, matching the original image)
      const defs = document.createElementNS(ns, "defs")

      const grad = document.createElementNS(ns, "radialGradient")
      grad.setAttribute("id", gradId)
      grad.setAttribute("cx", "50%")
      grad.setAttribute("cy", "50%")
      grad.setAttribute("r", "50%")

      const stops: [string, string][] = [
        ["0%", "#6118C8"],
        ["30%", "#6118C8"],
        ["65%", "#6118C8"],
        ["100%", "#6118C8"],
      ]
      stops.forEach(([offset, color]) => {
        const s = document.createElementNS(ns, "stop")
        s.setAttribute("offset", offset)
        s.setAttribute("stop-color", color)
        grad.appendChild(s)
      })
      defs.appendChild(grad)
      svg.appendChild(defs)

      const path = document.createElementNS(ns, "path")
      path.setAttribute("d", STAR_PATH)
      path.setAttribute("fill", `url(#${gradId})`)
      svg.appendChild(path)

      return svg
    }

    // Build a wrapper div for one spark
    function makeSpark(): HTMLDivElement {
      const el = document.createElement("div")
      el.style.cssText = `
        position: absolute;
        pointer-events: none;
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
        will-change: transform, opacity;
      `
      const svg = makeSVGEl()
      el.appendChild(svg)
      container.appendChild(el)
      return el
    }

    // Pick a random position inside the container (padded so sparks don't clip)
    function randomPos(): { x: number; y: number } {
      const pad = 80
      const w = container.offsetWidth
      const h = container.offsetHeight
      return {
        x: pad + Math.random() * Math.max(0, w - pad * 2),
        y: pad + Math.random() * Math.max(0, h - pad * 2),
      }
    }

    // Animate one spark indefinitely
    function animateSpark(el: HTMLDivElement) {
      const { x, y } = randomPos()

      // Randomise size each cycle (56 – 96 px)
      const size = 16 + Math.random() * 40
      const svg = el.querySelector("svg") as SVGSVGElement
      svg.style.width = `${size}px`
      svg.style.height = `${size}px`

      // Position
      el.style.left = `${x}px`
      el.style.top = `${y}px`

     
     

      // Slow animation: 3.6 – 5 s total per cycle
      const dur = 3600 + Math.random() * 1400
      const rot = (Math.random() - 0.5) * 15  // subtle rotation

      const anim = el.animate(
        [
          // Start: invisible, tiny
          {
            opacity: 0,
            transform: `translate(-50%, -50%) scale(0.03) rotate(${rot}deg)`,
          },
          // Peak: fully visible, full size (at ~40% of duration)
          {
            opacity: 1,
            transform: `translate(-50%, -50%) scale(1) rotate(${rot * 0.15}deg)`,
            offset: 0.40,
          },
          // Hold: stay visible a little (at ~60%)
          {
            opacity: 1,
            transform: `translate(-50%, -50%) scale(1) rotate(${-rot * 0.05}deg)`,
            offset: 0.60,
          },
          // End: fade out + shrink
          {
            opacity: 0,
            transform: `translate(-50%, -50%) scale(0.03) rotate(${-rot * 0.5}deg)`,
          },
        ],
        {
          duration: dur,
          easing: "ease-in-out",
          fill: "forwards",
        }
      )

      anim.onfinish = () => {
        // Brief pause (100–400 ms) then start the next cycle at a new position
        const tid = setTimeout(() => animateSpark(el), 100 + Math.random() * 300)
        cleanups.push(() => clearTimeout(tid))
      }
    }

    // Create exactly 2 sparks, staggered by 1.1 s
    const spark1 = makeSpark()
    const spark2 = makeSpark()

    animateSpark(spark1)

    const staggerTid = setTimeout(() => animateSpark(spark2), 1100)
    cleanups.push(() => clearTimeout(staggerTid))

    return () => {
      cleanups.forEach((fn) => fn())
      spark1.remove()
      spark2.remove()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      aria-hidden="true"
    />
  )
}

// ─── Particles types ──────────────────────────────────────────────────────────
interface ParticlesProps extends ComponentPropsWithoutRef<"div"> {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  size?: number
  refresh?: boolean
  color?: string
  vx?: number
  vy?: number
}

function hexToRgb(hex: string): number[] {
  hex = hex.replace("#", "")
  if (hex.length === 3)
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("")
  const n = parseInt(hex, 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}

type Circle = {
  x: number
  y: number
  translateX: number
  translateY: number
  size: number
  alpha: number
  targetAlpha: number
  dx: number
  dy: number
  magnetism: number
}

// ─── Main Particles component ─────────────────────────────────────────────────
export const Particles: React.FC<ParticlesProps> = ({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<Circle[]>([])
  const mousePosition = useMousePosition()
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1
  const rafID = useRef<number | null>(null)
  const resizeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")
    }
    initCanvas()
    animate()

    const handleResize = () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current)
      resizeTimeout.current = setTimeout(initCanvas, 200)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      if (rafID.current != null) cancelAnimationFrame(rafID.current)
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current)
      window.removeEventListener("resize", handleResize)
    }
  }, [color])

  useEffect(() => { onMouseMove() }, [mousePosition.x, mousePosition.y])
  useEffect(() => { initCanvas() }, [refresh])

  const initCanvas = () => {
    resizeCanvas()
    drawParticles()
  }

  const onMouseMove = () => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      const { w, h } = canvasSize.current
      const x = mousePosition.x - rect.left - w / 2
      const y = mousePosition.y - rect.top - h / 2
      if (x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2) {
        mouse.current.x = x
        mouse.current.y = y
      }
    }
  }

  const resizeCanvas = () => {
    if (!canvasContainerRef.current || !canvasRef.current || !context.current) return
    canvasSize.current.w = canvasContainerRef.current.offsetWidth
    canvasSize.current.h = canvasContainerRef.current.offsetHeight
    canvasRef.current.width = canvasSize.current.w * dpr
    canvasRef.current.height = canvasSize.current.h * dpr
    canvasRef.current.style.width = `${canvasSize.current.w}px`
    canvasRef.current.style.height = `${canvasSize.current.h}px`
    context.current.scale(dpr, dpr)
    circles.current = []
    for (let i = 0; i < quantity; i++) drawCircle(circleParams())
  }

  const circleParams = (): Circle => ({
    x: Math.floor(Math.random() * canvasSize.current.w),
    y: Math.floor(Math.random() * canvasSize.current.h),
    translateX: 0,
    translateY: 0,
    size: Math.floor(Math.random() * 2) + size,
    alpha: 0,
    targetAlpha: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
    dx: (Math.random() - 0.5) * 0.1,
    dy: (Math.random() - 0.5) * 0.1,
    magnetism: 0.1 + Math.random() * 4,
  })

  const rgb = hexToRgb(color)

  const drawCircle = (circle: Circle, update = false) => {
    if (!context.current) return
    const { x, y, translateX, translateY, size: s, alpha } = circle
    context.current.translate(translateX, translateY)
    context.current.beginPath()
    context.current.arc(x, y, s, 0, 2 * Math.PI)
    context.current.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`
    context.current.fill()
    context.current.setTransform(dpr, 0, 0, dpr, 0, 0)
    if (!update) circles.current.push(circle)
  }

  const clearContext = () => {
    context.current?.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)
  }

  const drawParticles = () => {
    clearContext()
    for (let i = 0; i < quantity; i++) drawCircle(circleParams())
  }

  const remapValue = (v: number, s1: number, e1: number, s2: number, e2: number) => {
    const r = ((v - s1) * (e2 - s2)) / (e1 - s1) + s2
    return r > 0 ? r : 0
  }

  const animate = () => {
    clearContext()
    circles.current.forEach((circle, i) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSize.current.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.current.h - circle.y - circle.translateY - circle.size,
      ]
      const closest = edge.reduce((a, b) => Math.min(a, b))
      const remap = parseFloat(remapValue(closest, 0, 20, 0, 1).toFixed(2))
      if (remap > 1) {
        circle.alpha += 0.02
        if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha
      } else {
        circle.alpha = circle.targetAlpha * remap
      }
      circle.x += circle.dx + vx
      circle.y += circle.dy + vy
      circle.translateX +=
        (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease
      circle.translateY +=
        (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease
      drawCircle(circle, true)
      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.current.h + circle.size
      ) {
        circles.current.splice(i, 1)
        drawCircle(circleParams())
      }
    })
    rafID.current = requestAnimationFrame(animate)
  }

  return (
    <div
      className={cn("pointer-events-none relative", className)}
      ref={canvasContainerRef}
      aria-hidden="true"
      {...props}
    >
      <canvas ref={canvasRef} className="size-full" />
      {/* Exactly 2 roaming SVG star sparks */}
      <RoamingSparks />
    </div>
  )
}