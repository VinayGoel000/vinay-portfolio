import { motion } from 'framer-motion'
import { FiDownload, FiEye } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading.jsx'
import ActionButton from '../components/ActionButton.jsx'

const resumeUrl = '/resume/VinayGoelResume.pdf'

export default function Resume() {
  return (
    <section id="resume" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Resume" subtitle="View and download my professional web developer resume." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
          className="glass-card overflow-hidden p-8 sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-lg leading-8 text-slate-300">
                My resume highlights hands-on Java web development, full-stack projects, backend and frontend skills, and a problem-solving mindset for software teams.
              </p>
              <div className="grid gap-3 text-sm text-slate-400 sm:grid-cols-2">
                <p>• Java web development with Spring Boot and SQL</p>
                <p>• Responsive React UI and clean frontend delivery</p>
                <p>• Scalable backend architecture and API design</p>
                <p>• Practical engineering mindset and problem solving</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <ActionButton href={resumeUrl} icon={FiEye} className="min-w-[11rem] justify-center">
                View Resume
              </ActionButton>
              <ActionButton href={resumeUrl} icon={FiDownload} download className="min-w-[11rem] justify-center">
                Download Resume
              </ActionButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
