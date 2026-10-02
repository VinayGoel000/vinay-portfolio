import { useEffect, useRef } from 'react'

const COLORS = ['#22d3ee', '#a78bfa', '#ff6ec4', '#4ade80', '#f0d89a']

function hexA(hex, a) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${a})`
}

/**
 * AuraBackground — full-viewport cursor aura in the spirit of Originkit's
 * aura-cursor: soft colorful dye blooms from the pointer, drifts and fades.
 * Pure canvas, pointer-events-none, sits behind all content.
 */
export default function AuraBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let w = 0
    let h = 0
    let raf = 0
    let blobs = []
    let colorIdx = 0
    let last = { x: -9999, y: -9999 }

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e) => {
      const dx = e.clientX - last.x
      const dy = e.clientY - last.y
      const dist = Math.hypot(dx, dy)
      if (dist < 4) return
      const steps = Math.min(Math.floor(dist / 12), 6)
      for (let i = 0; i <= steps; i++) {
        const t = steps === 0 ? 1 : i / steps
        blobs.push({
          x: last.x + dx * t,
          y: last.y + dy * t,
          r: 90 + Math.random() * 70,
          color: COLORS[colorIdx % COLORS.length],
          life: 1,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6 - 0.2,
        })
      }
      colorIdx += 1
      last = { x: e.clientX, y: e.clientY }
      if (blobs.length > 220) blobs = blobs.slice(-220)
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'
      blobs = blobs.filter((b) => b.life > 0.02)
      for (const b of blobs) {
        b.x += b.vx
        b.y += b.vy
        b.life *= 0.965
        b.r *= 1.004
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r)
        g.addColorStop(0, hexA(b.color, 0.16 * b.life))
        g.addColorStop(1, hexA(b.color, 0))
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
}
