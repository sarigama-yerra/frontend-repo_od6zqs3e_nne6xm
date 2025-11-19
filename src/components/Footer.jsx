export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6 text-sm text-slate-300">
          <div>
            <div className="text-white font-semibold">Al‑Shifa Technical Institute</div>
            <div className="text-emerald-300/80">OPC Private Limited</div>
            <p className="mt-3">Career‑oriented training in technology and trades.</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Contact</div>
            <p>Phone: +91 9XXXXXXXXX</p>
            <p>Email: info@alshifa‑tech.in</p>
            <p>Address: Your city, state</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Quick links</div>
            <ul className="space-y-1">
              <li><a href="#programs" className="hover:text-white">Programs</a></li>
              <li><a href="#admissions" className="hover:text-white">Admissions</a></li>
              <li><a href="#highlights" className="hover:text-white">Highlights</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-400">© {new Date().getFullYear()} Al‑Shifa Technical Institute (OPC) Pvt. Ltd. All rights reserved.</div>
      </div>
    </footer>
  )
}
