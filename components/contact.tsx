"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        alert(result.message || "Thank you for your message! I'll get back to you soon.")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        alert(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert("Failed to send message. Please check your connection and try again.")
    }
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "SRM University–AP, Andhra Pradesh, India",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+91-8210203698",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "suman_saurabh@srmap.edu.in",
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 animated-gradient -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent -z-10"></div>

      <div className="absolute top-1/4 right-1/4 w-64 h-64 blob blob-3 bg-primary/5 -z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 blob blob-1 bg-primary/5 -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out to me for any questions, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-md border border-primary/10 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4 shadow-md shadow-primary/10">
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              <p className="text-muted-foreground">{info.details}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm rounded-lg p-8 shadow-md border border-primary/10"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-6">
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary"
              />
            </div>
            <div className="mb-6">
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full min-h-[150px] bg-background/50 backdrop-blur-sm border-primary/20 focus:border-primary"
              />
            </div>
            <Button
              type="submit"
              className="w-full group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              Send Message <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
