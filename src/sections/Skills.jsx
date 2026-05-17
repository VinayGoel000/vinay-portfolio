import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import SkillCard from '../components/SkillCard.jsx'
import ProfileImage from '../components/ProfileImage.jsx'
import {
  SiSpringboot,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiPostman,
  SiNodedotjs
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

import vinayFront from '../assets/vinay-side.jpeg'

const skills = [
  { title: 'Java', detail: 'Core backend development with strong object-oriented design and application logic.', icon: FaJava },
  { title: 'Spring Boot', detail: 'Building production-ready services, REST APIs, and server-side application layers.', icon: SiSpringboot },
  { title: 'SQL / MySQL', detail: 'Designing relational schemas, queries, and database workflows for reliable data access.', icon: SiMysql },
  { title: 'React', detail: 'Responsive component-driven UI with modern frontend state management.', icon: SiReact },
  { title: 'Tailwind CSS', detail: 'Fast styling with responsive layouts, glassmorphism, and polished interfaces.', icon: SiTailwindcss },
  { title: 'Git & GitHub', detail: 'Version control, collaboration, and clean code management for development teams.', icon: SiGithub },
  { title: 'REST APIs', detail: 'Designing and consuming RESTful services for scalable frontend-backend integration.', icon: SiPostman },
  { title: 'Full Stack Development', detail: 'End-to-end delivery of web applications across backend and frontend layers.', icon: SiNodedotjs },
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
