"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "SRM University–AP",
      period: "2023 - Present",
      grade: "CGPA: 9.39",
    },
    {
      degree: "Class 12th, CBSE Board",
      institution: "",
      period: "2022",
      grade: "Percentage: 81.4%",
    },
    {
      degree: "Class 10th, CBSE Board",
      institution: "",
      period: "2020",
      grade: "Percentage: 95%",
    },
  ]

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-70 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full border-2 border-dashed border-primary/20 -z-10"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-2 border-dashed border-primary/20 -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My academic journey and educational qualifications.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
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
                  <GraduationCap className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                </div>
                {edu.institution && (
                  <div className="mb-2">
                    <span className="text-muted-foreground">{edu.institution}</span>
                  </div>
                )}
                <div className="flex flex-wrap gap-4 mb-2">
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{edu.period}</span>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{edu.grade}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
