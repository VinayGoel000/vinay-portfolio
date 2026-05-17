export default function SectionHeading({ title, subtitle, id }) {
  return (
    <div id={id} className="pb-6">
      <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-sky-300/80">
        <span className="block h-0.5 w-12 rounded-full bg-sky-400/70" />
        {title}
      </div>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {subtitle}
      </h2>
    </div>
  )
}
