import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

const projects = [
  {
    title: 'Project Placeholder One',
    description: 'A full-stack application example built with Java, Spring Boot, SQL, and React. Replace this card with a real project overview.',
    tags: ['Java', 'Spring Boot', 'React'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Placeholder Two',
    description: 'A scalable web application structure showcasing backend APIs, responsive UI, and data workflows.',
    tags: ['SQL', 'React', 'REST API'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Placeholder Three',
    description: 'A clean, reusable project card ready for your next Java web development case study.',
    tags: ['Java', 'Full Stack', 'Responsive'],
    github: '#',
    live: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Projects" subtitle="Selected work with polished visuals." />
        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
