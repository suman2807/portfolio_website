import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticlesBackground from "@/components/particles"

export const metadata: Metadata = {
  title: "Suman Saurabh | Portfolio",
  description: "Personal portfolio website of Suman Saurabh, Computer Science student and web developer",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <ParticlesBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
