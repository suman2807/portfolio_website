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
      image: "/p1.jpg?height=300&width=500",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/derangee/Campus-Connect",
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
      title: "Netra - AI Construction Monitoring Tool",
      description:
        "An AI-powered tool to monitor building construction progress using image analysis. Leverages machine learning algorithms to track construction stages and compute real-time percentage completion.",
      image: "/p3.png?height=300&width=500",
      tags: ["Python", "Machine Learning", "Image Analysis", "Web Interface"],
      github: "https://github.com/suman2807/Neetra",
      demo: null,
    },
    {
      title: "Flipkart Clone",
      description:
        "An e-commerce website inspired by Flipkart's UI using HTML, CSS, and JavaScript. Includes basic web pages and navigation with a simple and user-friendly design.",
      image: "/p4.png?height=300&width=500",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/suman2807/flipkart_clone",
      demo: null,
    },
    {
      title: "Weather Forecast App",
      description:
        "A simple weather forecast application using HTML, CSS, and JavaScript. Allows users to search for weather conditions by city name or use their current location.",
      image: "/p5.png?height=300&width=500",
      tags: ["HTML", "CSS", "JavaScript", "Weather API"],
      github: "https://github.com/suman2807/weather",
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
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
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
