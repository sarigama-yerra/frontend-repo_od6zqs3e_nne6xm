import { useState } from 'react'

export default function Admissions() {
  const [status, setStatus] = useState('idle')

  function onSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => setStatus('success'), 800)
  }

  return (
    <section id="admissions" className="py-20 sm:py-24 bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Admissions</h2>
          <p className="mt-2 text-slate-300">Tell us a few details and our team will call you back.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-4 bg-slate-900/60 rounded-xl border border-white/10 p-5">
          <input required className="px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-slate-400" placeholder="Full name"/>
          <input required className="px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-slate-400" placeholder="Phone number"/>
          <input className="px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-slate-400 sm:col-span-2" placeholder="Email (optional)"/>
          <select className="px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-slate-400">
            <option>Program of interest</option>
            <option>Computer Hardware & Networking</option>
            <option>Electrical Technician</option>
            <option>Mobile Repairing</option>
            <option>Tally & GST Accounting</option>
            <option>Computer Applications (DCA)</option>
          </select>
          <button disabled={status!=='idle'} className="px-5 py-3 rounded-md bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition-colors disabled:opacity-60">
            {status==='submitting' ? 'Submitting...' : status==='success' ? 'Submitted' : 'Submit enquiry'}
          </button>
        </form>
      </div>
    </section>
  )
}
