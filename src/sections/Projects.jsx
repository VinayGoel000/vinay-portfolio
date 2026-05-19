import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

const projects = [
  {
    title: 'Gym Management System',
    description: 'Manages members, attendance, subscriptions, and workflow automation.',
    tags: ['Java', 'Spring Boot', 'SQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'Expense Tracker',
    description: 'Personal finance tracking with category management and analytics.',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    title: 'Work Task Manager',
    description: 'Organizes tasks and workflows across multiple projects.',
    tags: ['React', 'Spring Boot', 'SQL'],
    github: '#',
    live: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Projects" subtitle="Selected work with reusable layouts and space for future additions." />
        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
