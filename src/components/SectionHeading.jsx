export default function SectionHeading({ title, subtitle, id }) {
  return (
    <div id={id} className="max-w-3xl">
      <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">{title}</p>
      <h2 className="mt-4 font-serif text-4xl tracking-tight text-[color:var(--text)] sm:text-5xl">{subtitle}</h2>
    </div>
  )
}
