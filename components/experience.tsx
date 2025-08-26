"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "MERN Full Stack Intern",
      company: "Edubot",
      period: "June 2025 – July 2025",
      description:
        "Worked on building full-stack web applications using MongoDB, Express, React, and Node, implementing CRUD operations, user authentication, and responsive UI components. Gained hands-on experience in real-world project development and team collaboration.",
    },
    {
      title: "AI and Machine Learning Intern",
      company: "SRM University – AP (with Edunet Foundation)",
      period: "June 2024 – July 2024",
      description:
        "EduPulse - Online Learning Portal: A modern, full-stack online learning platform built with React, TypeScript, Node.js, and MongoDB. Features include user authentication with JWT, role-based access for students/instructors/admins, course management, enrollment system, responsive design with Tailwind CSS, and real-time progress tracking. Built with React 18, Vite, Express, MongoDB, and deployed with comprehensive API endpoints for authentication, courses, and enrollments.",
    },
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 animated-gradient -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-[200px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-tr-[200px] -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and internship experiences that have shaped my skills and knowledge.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20"></div>

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-8 h-8 -ml-4 rounded-full bg-primary/20 flex items-center justify-center shadow-md shadow-primary/20">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
              </div>

              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-md border border-primary/10 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center mb-2">
                  <Briefcase className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                </div>
                <div className="mb-2">
                  <span className="text-muted-foreground">{exp.company}</span>
                </div>
                <div className="mb-4">
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
