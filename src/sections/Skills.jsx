import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import SkillCard from '../components/SkillCard.jsx'
import ProfileImage from '../components/ProfileImage.jsx'
import { SiReact, SiTailwindcss, SiFramer, SiNodedotjs, SiTypescript, SiVite } from 'react-icons/si'
import vinayFront from '../assets/vinay-side.jpeg'

const skills = [
  { title: 'React & UI Components', detail: 'Reusable UI systems with responsive behavior and motion.', icon: SiReact },
  { title: 'Tailwind CSS', detail: 'Modern utility-first styling with glassmorphism and vivid glow effects.', icon: SiTailwindcss },
  { title: 'Framer Motion', detail: 'Polished transitions, entrance reveals, and micro-interactions.', icon: SiFramer },
  { title: 'TypeScript', detail: 'Strong typing for predictable interfaces and scalable apps.', icon: SiTypescript },
  { title: 'Node.js APIs', detail: 'Backend integration for full-stack web applications.', icon: SiNodedotjs },
  { title: 'Vite Optimized', detail: 'Fast bundling, quick refresh, and performance-first development.', icon: SiVite },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Skills" subtitle="Tools and technologies I use daily." />
        
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          {/* Skills Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                <SkillCard icon={skill.icon} title={skill.title} detail={skill.detail} />
              </motion.div>
            ))}
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="sticky top-32 flex justify-center"
          >
            <ProfileImage
              src={vinayFront}
              alt="Vinay - Professional profile"
              variant="side"
              animate={true}
              delay={0.3}
              glowColor="purple"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
