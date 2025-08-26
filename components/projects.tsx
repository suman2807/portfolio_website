"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "CampusConnect – SRM University AP",
      description:
        "A unified platform to enhance student collaboration and event coordination. Enables students to organize sports activities, coordinate group travel, and create gaming sessions while facilitating real-time connections.",
      image: "/p1.png?height=300&width=500",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/suman2807/CampusConnect",
      demo: null,
    },
    {
      title: "AI-Powered Crowd Behavior Prediction System",
      description:
        "An intelligent system to analyze and predict crowd behavior using YOLOv8, LSTM, and ByteTrack. Processes real-time and pre-recorded video footage to detect crowd density, movement patterns, and potential hazards.",
      image: "/p2.png?height=300&width=500",
      tags: ["Python", "YOLOv8", "LSTM", "ByteTrack", "Streamlit"],
      github: "https://github.com/suman2807/crowd_analysis",
      demo: null,
    },
    {
      title: "EduPulse - Online Learning Portal",
      description:
        "A modern, full-stack online learning platform built with React, TypeScript, Node.js, and MongoDB. Features user authentication, role-based access, course management, and real-time progress tracking.",
      image: "/p3.png?height=300&width=500",
      tags: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
      github: "https://github.com/suman2807/edupulse",
      demo: null,
    },
    {
      title: "AgriMitra – Smart Farming Assistant",
      description:
        "An AI-powered assistant for smart farming, built with Next.js and Google AI Genkit. It empowers farmers with actionable insights for better yields and sustainable agriculture—all through a clean, authentication-free interface.",
      image: "/p4.png?height=300&width=500",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Google AI Genkit"],
      github: "https://github.com/suman2807/AgriMitra",
      demo: null,
    },
    {
      title: "Shopzy - E-Commerce Platform",
      description:
        "A modern full-stack e-commerce application built with the MERN stack featuring user authentication, shopping cart, Stripe payment integration, admin dashboard, and Redis caching for performance.",
      image: "/p5.png?height=300&width=500",
      tags: ["React", "Node.js", "Express", "MongoDB", "Redis", "Stripe", "Tailwind CSS"],
      github: "https://github.com/suman2807/shopzy",
      demo: null,
    },
    {
      title: "Wave - Video Calling & Language Exchange",
      description:
        "Real-time video calling and chat platform for language learners to connect with native speakers worldwide. Features 1-on-1 and group video calls, messaging, friend system, and 32 customizable UI themes.",
      image: "/p6.png?height=300&width=500",
      tags: ["React", "Express.js", "MongoDB", "JWT", "Stream API", "Tailwind CSS"],
      github: "https://github.com/suman2807/wave",
      demo: null,
    },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-70 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent -z-10"></div>

      {/* Decorative shapes */}
      <div className="absolute top-40 right-10 w-64 h-64 rounded-full border border-primary/20 -z-10"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 rounded-full border border-primary/20 -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full border border-primary/20 -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in web development, machine learning, and
            problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-primary/10 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
