import { motion } from 'framer-motion'
import { FiDownload, FiEye } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading.jsx'
import ActionButton from '../components/ActionButton.jsx'

const resumeUrl = '/resume/VinayGoelResume.pdf'

export default function Resume() {
  return (
    <section id="resume" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Resume" subtitle="View or download my resume without breaking the existing flow." />
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mt-10 rounded-[1.75rem] border border-white/10 bg-[color:var(--surface)] p-8 shadow-soft">
          <p className="max-w-3xl text-[color:var(--muted)]">My resume highlights Java web development, React frontend work, Spring Boot services, SQL experience, and a commitment to shipping polished, dependable applications.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton href={resumeUrl} icon={FiEye}>View Resume</ActionButton>
            <ActionButton href={resumeUrl} icon={FiDownload} download>Download Resume</ActionButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
