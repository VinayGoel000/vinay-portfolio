import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { FaGraduationCap, FaGamepad, FaLaptopCode, FaBriefcase, FaRocket, FaLock } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading.jsx'
import vinayFront from '../assets/vinay-front.jpeg'

const PATH_D = 'M200 40 C200 120 310 130 310 210 C310 290 90 310 90 390 C90 470 310 490 310 570 C310 650 90 670 90 750 C90 830 310 850 310 930 C310 1010 90 1030 90 1110 C90 1180 150 1200 200 1200'
const VB_W = 400
const VB_H = 1240

const MILESTONES = [
  { f: 0.04, year: '2022', title: 'B.Tech CSE, ABESIT', text: 'The journey begins. Hello, code.', Icon: FaGraduationCap },
  { f: 0.20, year: '2024', title: 'Genz Gaming', text: 'YouTube channel — Lords Mobile guides in Hindi.', Icon: FaGamepad },
  { f: 0.36, year: '2025', title: 'Projects shipped', text: 'College Discovery, TalentDash — live in production.', Icon: FaLaptopCode },
  { f: 0.52, year: 'Aug 2026', title: 'Chessveda', text: 'Internship — fair-play analysis, avatars, campus collabs.', Icon: FaBriefcase },
  { f: 0.68, year: 'Aug 2026', title: 'Full-Stack Dev @ Midas 24X7', text: 'You are here. Main-character arc.', Icon: FaRocket, here: true },
  { f: 0.86, year: 'Next', title: '???', text: 'Next level loading…', Icon: FaLock, locked: true },
]
function MilestoneNode({ milestone, progress, xPct, yPct }) {
  const reveal = useTransform(progress, [Math.max(0, milestone.f - 0.06), milestone.f], [0, 1])
  const scale = useTransform(reveal, [0, 1], [0.55, 1])
  const Icon = milestone.Icon
  const side = xPct < 50 ? 'right' : 'left'

  return (
    <motion.div
      className="absolute z-[5]"
      style={{ left: `${xPct}%`, top: `${yPct}%`, x: '-50%', y: '-50%', opacity: reveal, scale }}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full border-[3px] bg-[color:var(--surface-strong)] shadow-soft backdrop-blur-xl ${
          milestone.locked
            ? 'border-dashed border-[color:var(--muted)]/50'
            : milestone.here
              ? 'border-[color:var(--accent)] shadow-[0_0_28px_color-mix(in_srgb,var(--accent)_55%,transp
function Traveler({ progress, pathRef, totalRef }) {
  const ref = useRef(null)

  useMotionValueEvent(progress, 'change', (v) => {
export default function Journey() {
  const sectionRef = useRef(null)
  const pathRef = useRef(null)
  const totalRef = useRef(0)
  const [points, setPoints] = useState([])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.85', 'end 0.45'],
  })

  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    const total = path.getTotalLength()
    totalRef.current = total
    setPoints(
      MILESTONES.map((m) => {
        const pt = path.getPointAtLength(total * m.f)
        return { x: (pt.x / VB_W) * 100, y: (pt.y / VB_H) * 100 }
      }),
    )
  }, [])

  return (
    <section id="journey" ref={sectionRef} className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Journey" subtitle="Scroll down — this is the road so far." />

        <div className="relative mx-auto mt-12 max-w-xl">
          <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="block h-auto w-full" aria-hidden="true">
            <defs>
              <linearGradient id="journeyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#ff6ec4" />
              </linearGradient>
            </defs>
            <path
              d={PATH_D}
              fill="none"
              strokeWidth={16}
              strokeLinecap="round"
              className="stroke-[color-mix(in_srgb,var(--text)_10%,transparent)]"
            />
            <motion.path
              ref={pathRef}
              d={PATH_D}
              fill="none"
              stroke="url(#journeyGrad)"
              strokeWidth={7}
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress, filter: 'drop-shadow(0 0 6px rgba(167,139,250,0.8))' }}
            />
          </svg>

          {points.map((p, i) => (
            <MilestoneNode key={MILESTONES[i].title} milestone={MILESTONES[i]} progress={scrollYProgress} xPct={p.x} yPct={p.y} />
          ))}

          <Traveler progress={scrollYProgress} pathRef={pathRef} totalRef={totalRef} />
        </div>

        <p className="mt-8 text-center text-sm text-[color:var(--muted)]">
          Keep scrolling — every level unlocks on the way down.
        </p>
      </div>
    </section>
  )
}

    const path = pathRef.current
    const el = ref.current
    if (!path || !el || !totalRef.current) return
    const pt = path.getPointAtLength(totalRef.current * v)
    el.style.left = `${(pt.x / VB_W) * 100}%`
    el.style.top = `${(pt.y / VB_H) * 100}%`
  })

  return (
    <div ref={ref} className="absolute z-10" style={{ left: '50%', top: '3%', transform: 'translate(-50%, -50%)' }}>
      <img
        src={vinayFront}
        alt="Vinay Goel"
        className="h-14 w-14 rounded-full object-cover ring-2 ring-[color:var(--accent)] shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_60%,transparent)]"
      />
      <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-[11px] font-bold tracking-wide text-[color:var(--text)] [text-shadow:0_1px_8px_var(--bg)]">
        Vinay Goel
      </div>
    </div>
  )
}
arent)]'
              : 'border-white/25'
        } ${milestone.here ? 'animate-pulse' : ''}`}
      >
        <Icon className={`h-6 w-6 ${milestone.locked ? 'text-[color:var(--muted)]' : 'text-[color:var(--accent)]'}`} />
      </div>

      <div
        className={`absolute top-1/2 w-40 -translate-y-1/2 rounded-2xl border border-white/10 bg-[color:var(--surface)] p-3 shadow-soft backdrop-blur-xl ${
          side === 'right' ? 'left-16 text-left' : 'right-16 text-right'
        }`}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">{milestone.year}</p>
        <p className="mt-1 text-sm font-bold text-[color:var(--text)]">{milestone.title}</p>
        <p className="mt-1 text-xs leading-relaxed text-[color:var(--muted)]">{milestone.text}</p>
        {milestone.here ? (
          <p className="mt-2 inline-block rounded-full border border-[color:var(--accent)]/50 bg-[color:var(--accent)]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[color:var(--accent)]">
            You are here
          </p>
        ) : null}
      </div>
    </motion.div>
  )
}
