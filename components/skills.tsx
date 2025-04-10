"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Server, Globe, Cpu, GitBranch, BarChart, Layers } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "C", "C++", "JavaScript"],
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"],
    },
    {
      title: "Machine Learning",
      icon: <Cpu className="h-6 w-6" />,
      skills: ["scikit-learn", "TensorFlow (Basics)", "NumPy", "Pandas", "SciPy", "Data Preprocessing"],
    },
    {
      title: "Tools",
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"],
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["SQL", "MySQL", "MongoDB"],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express.js", "API Development"],
    },
    {
      title: "Data Visualization",
      icon: <BarChart className="h-6 w-6" />,
      skills: ["Tableau", "Power BI"],
    },
    {
      title: "Other Skills",
      icon: <Layers className="h-6 w-6" />,
      skills: ["DSA", "OOP", "Problem Solving"],
    },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 animated-gradient -z-10"></div>
      <div className="absolute top-1/3 left-0 w-32 h-32 bg-primary/10 rounded-full blur-xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-primary/10 rounded-full blur-xl -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my academic and project experiences. Here's a
            comprehensive overview of my technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-primary/10"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/20 rounded-md text-primary mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
