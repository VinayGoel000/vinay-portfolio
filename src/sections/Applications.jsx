import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import ApplicationCard from '../components/ApplicationCard.jsx'
import screenshot from '../assets/applications/team-iron-champ-preview.png'

const applications = [
  {
    name: 'Team Iron Champ',
    description:
      'Team Iron Champ is a Windows desktop automation and management application designed for workflow efficiency, operational control, and premium desktop usability.',
    version: '1.8.0',
    features: [
      'Desktop automation tools',
      'Fast performance',
      'Workflow optimization',
      'User-friendly interface',
      'Windows desktop support',
      'Regular updates',
    ],
    downloadLink:
      'https://github.com/VinayGoel000/team-iron-champ-releases/releases/download/v1.8.0/Team.Iron.Champ.Setup.1.8.0.exe',
    screenshot,
  },
]

export default function Applications() {
  return (
    <section id="applications" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Applications"
          subtitle="Premium desktop software showcases built for Windows, productivity, and modern release-ready workflows."
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
