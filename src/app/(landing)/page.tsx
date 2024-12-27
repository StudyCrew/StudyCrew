import Hero from './_components/Hero'
import Footer from './_components/Footer'
import Mission from './_components/Mission'
import Project from './_components/Project'
import Features from './_components/Features'
import Development from './_components/Development'
import { SectionProvider } from './_components/SectionContext'
import Header from './_components/Header'

export default function LandingPage() {
  return (
    <>
      <main>
        <SectionProvider>
          <section className="fixed top-0 left-0 right-0 z-50">
            <Header />
          </section>
        </SectionProvider>
        <section id="hero" className="mt-32">
          <Hero />
        </section>
        <section id="mission" className="relative">
          <Mission/>
        </section>
        <section id="features" className="mt-64">
          <Features />
        </section>
        <section id="project" className="mt-32">
          <Project />
        </section>
        <section id="development" className="mt-32">
          <Development />
        </section>
        <section id="footer" className="mt-32">
          <Footer />
        </section>
        
      </main>
    </>
  )
}
