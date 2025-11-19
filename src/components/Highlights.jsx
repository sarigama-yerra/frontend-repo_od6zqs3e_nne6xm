const highlights = [
  { title: 'NSDC/SSC aligned modules', desc: 'Syllabus mapped to industry standards' },
  { title: 'Modern labs & tools', desc: 'Practice on updated equipment' },
  { title: 'Scholarships available', desc: 'Merit & need‑based support' },
  { title: 'Placement assistance', desc: 'Interview practice & referrals' },
]

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Why choose us</h2>
          <p className="mt-2 text-slate-300">Practical learning with outcome‑focused guidance.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-emerald-400 to-teal-500 mb-3" />
              <div className="text-white font-semibold">{h.title}</div>
              <div className="text-slate-300 text-sm mt-1">{h.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
