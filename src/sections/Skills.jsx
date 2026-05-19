import { motion } from 'framer-motion'
import { FaJava } from 'react-icons/fa'
import { SiMysql, SiMongodb, SiNodedotjs, SiReact, SiSpringboot, SiTailwindcss } from 'react-icons/si'
import { FiCode, FiDatabase, FiLayout } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading.jsx'
import SkillCard from '../components/SkillCard.jsx'
import ProfileImage from '../components/ProfileImage.jsx'
import vinayFront from '../assets/vinay-side.jpeg'

const skills = [
  { title: 'Java', detail: 'Backend development, OOP, and application logic.', icon: FaJava },
  { title: 'Spring Boot', detail: 'REST APIs and server-side architecture.', icon: SiSpringboot },
  { title: 'Node.js', detail: 'Lightweight services and tooling.', icon: SiNodedotjs },
  { title: 'REST APIs', detail: 'Clean integrations and service contracts.', icon: FiCode },
  { title: 'React', detail: 'Component-driven frontend development.', icon: SiReact },
  { title: 'HTML / CSS / JS', detail: 'Strong responsive UI foundations.', icon: FiLayout },
  { title: 'Tailwind CSS', detail: 'Fast, modern styling for production UIs.', icon: SiTailwindcss },
  { title: 'MongoDB', detail: 'Flexible document data modeling.', icon: SiMongodb },
  { title: 'MySQL / SQL', detail: 'Reliable relational data handling.', icon: SiMysql },
  { title: 'Full Stack', detail: 'End-to-end product delivery mindset.', icon: FiDatabase },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Skills" subtitle="Backend, frontend, and database tools I use to build production-ready work." />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div key={skill.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.04 }}>
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="flex justify-center">
            <ProfileImage src={vinayFront} alt="Vinay" variant="side" animate delay={0.1} glowColor="cyan" className="max-w-md" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
