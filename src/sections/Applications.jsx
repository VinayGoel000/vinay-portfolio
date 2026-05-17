import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import ApplicationCard from '../components/ApplicationCard.jsx'
import screenshot from '../assets/applications/team-iron-champ-preview.png'

const applications = [
  {
    name: 'Team Iron Champ',
    description:
      'A Windows desktop automation and management tool designed for streamlined workflows, premium usability, and efficient operational control.',
    version: '1.8.0',
    features: [
      'Automation tools',
      'Fast desktop performance',
      'User-friendly interface',
      'Workflow optimization',
      'Regular updates',
    ],
    downloadLink:
      'https://github.com/YOUR_USERNAME/YOUR_REPO/releases/download/v1.8.0/Team-Iron-Champ-Setup.exe',
    screenshot,
  },
]

export default function Applications() {
  return (
    <section id="applications" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Applications"
          subtitle="Desktop software showcases built for performance and premium workflow control."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-10 grid gap-8"
        >
          {applications.map((application) => (
            <ApplicationCard key={application.name} {...application} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
