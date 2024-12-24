import Hero from '@/app/(landing)/_components/Hero'
import Header from '@/app/(landing)/_components/Header'
import Footer from '@/app/(landing)/_components/Footer'
import Mission from '@/app/(landing)/_components/Mission'
import Project from '@/app/(landing)/_components/Project'
import Features from '@/app/(landing)/_components/Features'
import Development from '@/app/(landing)/_components/Development'
import ClientObserver from '@/app/(landing)/_components/ClientObserver'

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <ClientObserver>
        <div className="mission-component">
          <Mission />
        </div>
        <div className="features-component">
          <Features />
        </div>
        <div className="project-component">
          <Project />
        </div>
        <div className="development-component">
          <Development />
        </div>
      </ClientObserver>
      <Footer />
    </>
  )
}