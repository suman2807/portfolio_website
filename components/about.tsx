"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-70 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-tr-[100px] -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-lg"></div>
              <img
                src="/my3.jpg?height=400&width=400"
                alt="About Suman Saurabh"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-lg"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1"
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-muted-foreground mb-4">
              I'm a Computer Science student at SRM University–AP with a CGPA of 9.28. I'm passionate about web
              development, data science, and machine learning.
            </p>
            <p className="text-muted-foreground mb-4">
              My journey in tech began with web development, creating responsive and user-friendly applications. I've
              since expanded my skills to include data science and machine learning, always eager to learn and apply
              cutting-edge technologies to real-world challenges.
            </p>
            <p className="text-muted-foreground mb-6">
              I believe in continuous learning and problem-solving. Whether it's building a web application or
              developing an AI model, I approach each project with enthusiasm and dedication.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/50 p-3 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Name:</h4>
                <p className="text-muted-foreground">Suman Saurabh</p>
              </div>
              <div className="bg-card/50 p-3 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Email:</h4>
                <p className="text-muted-foreground">suman_saurabh@srmap.edu.in</p>
              </div>
              <div className="bg-card/50 p-3 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Phone:</h4>
                <p className="text-muted-foreground">+91-8210203698</p>
              </div>
              <div className="bg-card/50 p-3 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Study:</h4>
                <p className="text-muted-foreground">SRM University–AP</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
