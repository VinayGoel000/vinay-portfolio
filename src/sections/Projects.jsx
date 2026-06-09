import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import FeaturedProjectCard from '../components/FeaturedProjectCard.jsx'
import ProjectDetailsModal from '../components/ProjectDetailsModal.jsx'

const featuredProjects = [
  {
    title: 'College Discovery Platform',
    category: 'Full Stack Web Application',
    status: 'Live',
    description: 'A platform that helps students discover colleges, explore opportunities, and access educational information through a clean and responsive interface.',
    overview: 'College Discovery Platform helps students discover colleges and educational opportunities through a modern web-based interface.',
    tags: ['Featured Project', 'Full Stack', 'Recruiter Friendly'],
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    features: ['College exploration', 'Student-focused interface', 'Educational information access', 'Responsive design', 'Modern user experience'],
    challenges: ['Information organization', 'Responsive UI design', 'User-friendly navigation', 'Modern frontend architecture'],
    future: ['Authentication', 'Advanced filtering', 'AI-powered recommendations', 'Expanded college database'],
    live: 'https://college-discovery-platform-94m8.vercel.app/',
    demoVideo: 'https://youtu.be/1YmuW9RZg1g',
  },
  {
    title: 'TalentDash',
    category: 'Full Stack Web Application',
    status: 'Live',
    description: 'A talent discovery and management platform designed to connect opportunities with skilled individuals through a modern web experience.',
    overview: 'TalentDash is a talent discovery and management platform that connects opportunities with skilled individuals through an intuitive and modern web interface.',
    tags: ['Featured Project', 'Full Stack', 'Modern UI'],
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    features: ['Talent discovery', 'Opportunity matching', 'Modern web experience', 'Responsive interface', 'Skilled individuals management'],
    challenges: ['Talent-opportunity matching', 'Scalable architecture', 'Modern UI design', 'Data management'],
    future: ['AI-powered matching', 'Advanced analytics', 'Mobile app', 'Integration APIs'],
    live: 'https://talent-dash-seven.vercel.app/',
    demoVideo: 'https://youtu.be/AZFWvi6Iqdk',
  },
]

const otherProjects = [
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
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Projects" subtitle="Selected work with reusable layouts and space for future additions." />
        <div className="mt-10 space-y-6">
          {featuredProjects.map((project) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
              <FeaturedProjectCard project={project} onLearnMore={() => setActiveProject(project)} />
            </motion.div>
          ))}

          <div className="grid gap-6 xl:grid-cols-3">
            {otherProjects.map((project) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <ProjectDetailsModal open={Boolean(activeProject)} onClose={() => setActiveProject(null)} project={activeProject || featuredProjects[0]} />
    </section>
  )
}
