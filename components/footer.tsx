import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-70 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">
              Suman<span className="text-primary">.</span>
            </h2>
          </div>

          <div className="flex space-x-4 mb-6">
            <a
              href="https://github.com/suman2807"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 transition-colors shadow-sm hover:shadow-md"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/suman-saurabh-9ab4b9276"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 transition-colors shadow-sm hover:shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:sumansaurabh@srmap.edu.in"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 transition-colors shadow-sm hover:shadow-md"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-center text-muted-foreground">
            <p>&copy; {currentYear} Suman Saurabh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
