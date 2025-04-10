"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Navbar from "./navbar"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Computer Science Student & Web Developer"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <Navbar />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 animated-gradient -z-10"></div>

      <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div
        className="absolute bottom-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="absolute top-1/4 right-1/4 w-64 h-64 blob blob-1 bg-primary/5 -z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 blob blob-2 bg-primary/5 -z-10"></div>

      <div className="absolute inset-0 grid-pattern -z-10"></div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Suman Saurabh</h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 h-8">
              {typedText}
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mb-8">
              Motivated and passionate Computer Science student with expertise in web development and a strong
              enthusiasm for data science and machine learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex gap-4 mt-8">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/suman2807" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/suman-saurabh-9ab4b9276"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:suman_saurabh@srmap.edu.in" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg shadow-primary/20">
              <img
                src="/my1.jpg?height=320&width=320"
                alt="Suman Saurabh"
                className="w-full h-full object-cover"
              />

              {/* Decorative elements around the profile image */}
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-primary/20 blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-primary/20 blur-sm"></div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
