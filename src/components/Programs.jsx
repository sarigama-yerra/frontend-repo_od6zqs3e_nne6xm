const programs = [
  {
    title: 'Computer Hardware & Networking',
    duration: '6 months',
    desc: 'Hands-on training in PC assembly, troubleshooting, and network setup (LAN/Wi‑Fi).',
  },
  {
    title: 'Electrical Technician',
    duration: '12 months',
    desc: 'Domestic wiring, motor winding basics, safety practices, and installation skills.',
  },
  {
    title: 'Mobile Repairing',
    duration: '3 months',
    desc: 'Chip‑level diagnostics, soldering, software flashing, and repair workflow.',
  },
  {
    title: 'Tally & GST Accounting',
    duration: '6 months',
    desc: 'Tally Prime, bookkeeping, GST returns, and small‑business finance operations.',
  },
  {
    title: 'Computer Applications (DCA)',
    duration: '6 months',
    desc: 'MS Office suite, internet tools, productivity workflows, and documentation.',
  },
  {
    title: 'Soft Skills & Employability',
    duration: '2 months',
    desc: 'Communication, interview prep, resume building, and workplace etiquette.',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-20 sm:py-28 bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Programs</h2>
          <p className="mt-2 text-slate-300">Industry‑aligned courses designed to make you job‑ready.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="group relative rounded-xl border border-white/10 bg-slate-900/60 p-5 hover:border-emerald-400/40 transition-colors">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-tr from-emerald-500/0 to-teal-400/0 opacity-0 group-hover:opacity-100 blur-xl -z-10 transition" />
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300">{p.duration}</span>
              </div>
              <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
