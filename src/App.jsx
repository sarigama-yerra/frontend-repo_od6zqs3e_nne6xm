import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Highlights from './components/Highlights'
import Admissions from './components/Admissions'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">About the institute</h2>
              <p className="mt-4 text-lg">We are a skills‑first training organization focused on practical learning. Our mission is to bridge the gap between education and employment by offering affordable, job‑ready programs guided by experienced mentors.</p>
              <ul className="mt-6 space-y-2 text-slate-300">
                <li>• Focus on applied learning and projects</li>
                <li>• Small batch sizes with personalized attention</li>
                <li>• Regular assessments and feedback</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
              <img className="rounded-lg object-cover aspect-[16/9] w-full" src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop" alt="Classroom"/>
            </div>
          </div>
        </div>
      </section>
      <Programs />
      <Highlights />
      <Admissions />
      <Footer />
    </div>
  )
}

export default App
