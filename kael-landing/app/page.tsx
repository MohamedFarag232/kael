import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { WhyKael } from "@/components/sections/why-kael"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { Results } from "@/components/sections/results"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <WhyKael />
        <Services />
        <Process />
        <Results />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
