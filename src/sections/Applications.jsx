import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading.jsx'
import ApplicationCard from '../components/ApplicationCard.jsx'
import screenshot from '../assets/applications/team-iron-champ-preview.png'

const applications = [
  {
    name: 'Team Iron Champ',
    description: 'Windows desktop automation and management application designed for workflow efficiency, operational control, and premium desktop usability.',
    version: '2.0.3',
    features: ['Desktop automation tools', 'Fast performance', 'Biometric Attendance Automation', 'User-friendly interface', 'Windows desktop ', 'Regular updates'],
    downloadLink: 'https://github.com/VinayGoel000/team-iron-champ-releases/releases/download/v2.0.3/Team.Iron.Champ.Setup.2.0.3.exe',
    screenshot,
  },
]

export default function Applications() {
  return (
    <section id="applications" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Applications" subtitle="Keep the real desktop release showcase, download link, and screenshot preview intact." />
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mt-10">
          {applications.map((application) => (
            <ApplicationCard key={application.name} {...application} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
