import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiEye } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { SiLeetcode } from 'react-icons/si'
import ActionButton from '../components/ActionButton.jsx'
import ProfileImage from '../components/ProfileImage.jsx'
import vinayFront from '../assets/vinay-front.jpeg'

const resumeUrl = '/resume/VinayGoelResume.pdf'

const roles = ['Full-stack Engineer', 'UI Architect', 'Digital Product Maker']

const heroSocials = [
  {
    name: 'Email',
    href: 'mailto:work.vinaygoel@gmail.com',
    icon: HiOutlineMail,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/vinay-goel-691960278',
    icon: FaLinkedin,
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/FvfnNjdyCP/',
    icon: SiLeetcode,
  },
]

export default function Hero() {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [cursor, setCursor] = useState(true)

  const currentRole = useMemo(() => roles[index % roles.length], [index])

  useEffect(() => {
    const speed = deleting ? 80 : 125
    const timeout = setTimeout(() => {
      setText((value) => {
        const next = deleting
          ? currentRole.slice(0, value.length - 1)
          : currentRole.slice(0, value.length + 1)
        if (!deleting && next === currentRole) {
          setTimeout(() => setDeleting(true), 900)
        }
        if (deleting && next === '') {
          setDeleting(false)
          setIndex((prev) => prev + 1)
        }
        return next
      })
    }, speed)

    return () => clearTimeout(timeout)
  }, [currentRole, deleting])

  useEffect(() => {
    const blink = setInterval(() => setCursor((value) => !value), 500)
    return () => clearInterval(blink)
  }, [])

  return (
    <section id="home" className="relative overflow-hidden px-6 py-16 sm:py-24">
      <div className="hero-blob" style={{ top: '8%', left: '12%', width: '320px', height: '320px', background: 'radial-gradient(circle, rgba(56,189,248,0.28), transparent 38%)' }} />
      <div className="hero-blob" style={{ bottom: '6%', right: '10%', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(168,85,247,0.26), transparent 42%)' }} />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="glass-card relative overflow-hidden bg-slate-950/70 p-10 sm:p-14"
        >
          <div className="absolute inset-0 bg-hero-gradient opacity-80" aria-hidden="true" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-[0.32em] text-sky-300/80">Futuristic Portfolio</span>
              <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
                Hi, I’m Vinay.
                <br />
                I build polished digital experiences.
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                A premium developer portfolio showcasing a clean, immersive dark UI with subtle glow and smooth motion.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {heroSocials.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2, scale: 1.02 }}
                      className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/75 px-4 py-3 text-sm text-slate-100 transition hover:border-sky-400/50 hover:bg-slate-900/95 hover:text-sky-200"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/80 text-sky-300 shadow-glow">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </motion.a>
                  )
                })}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <ActionButton href={resumeUrl} icon={FiEye} className="min-w-[12rem] justify-center">
                  View Resume
                </ActionButton>
                <ActionButton href={resumeUrl} icon={FiDownload} download className="min-w-[12rem] justify-center">
                  Download Resume
                </ActionButton>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400/40 hover:text-sky-200">
                  Let&apos;s connect
                </a>
              </div>
            </div>

          <div className="relative space-y-6 flex flex-col items-center justify-center">
            <ProfileImage
              src={vinayFront}
              alt="Vinay - Full Stack Developer"
              variant="circular"
              animate={true}
              delay={0.3}
              glowColor="combined"
              className="drop-shadow-2xl"
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 transform rounded-full border border-white/20 bg-slate-900/80 px-6 py-3 shadow-lg backdrop-blur-md"
            >
              <span className="text-sm font-semibold text-sky-300">✨ Available for new projects</span>
            </motion.div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
