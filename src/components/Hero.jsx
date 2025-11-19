export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 sm:pb-28">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(1000px_600px_at_50%_0%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.25),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(20,184,166,0.2),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(94,234,212,0.15),transparent_30%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-300 text-xs mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Admissions for 2025 are open
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Empowering careers through hands‑on technical education
            </h1>
            <p className="mt-5 text-slate-300 text-lg max-w-xl">
              Al‑Shifa Technical Institute (OPC) Pvt. Ltd. offers industry‑aligned courses that prepare you for real‑world jobs. Learn, build, and grow with mentorship from experts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#admissions" className="px-5 py-3 rounded-md bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition-colors">Apply Now</a>
              <a href="#programs" className="px-5 py-3 rounded-md border border-white/10 text-white hover:bg-white/5 transition-colors">Explore Programs</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-300">
              <div>
                <div className="text-white font-bold">1000+ alumni</div>
                Successful placements
              </div>
              <div>
                <div className="text-white font-bold">12+ programs</div>
                Job‑ready curriculum
              </div>
              <div>
                <div className="text-white font-bold">Industry mentors</div>
                Real‑world projects
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-teal-400/10 blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-4">
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMYWJ8ZW58MHwwfHx8MTc2MzU2MzAyMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Lab" className="rounded-lg object-cover aspect-[4/3] w-full"/>
              <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
                <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-slate-200">
                  Modern labs
                </div>
                <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-slate-200">
                  Experienced faculty
                </div>
                <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-slate-200">
                  Placement support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
