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
        <section id="hero" className="hero-component">
          <Hero />
        </section>
        <section id="mission" className="mission-component">
          <Mission />
        </section>
        <section id="features" className="features-component">
          <Features />
        </section>
        <section id="project" className="project-component">
          <Project />
        </section>
        <section id="development" className="development-component">
          <Development />
        </section>
      </main>
      <Footer />
    </>
  )
}
