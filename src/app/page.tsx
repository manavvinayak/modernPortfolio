"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">VNS</div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                    activeSection === item.toLowerCase() ? "text-purple-400" : "text-white/80"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">VNS</span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Vinayak Narayan
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Srivastava
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Full Stack Developer & UI/UX Designer crafting digital experiences that inspire and engage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              onClick={() => scrollToSection("projects")}
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
            <p className="text-xl text-white/60">Passionate about creating exceptional digital experiences</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-8">
                <img
                  src="/image.jpg"
                  alt="Vinayak Narayan Srivastava"
                  className="w-90 h-80 rounded-xl object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                Hello! I'm Vinayak, a passionate full-stack developer and have experience in creating
                beautiful, functional, and user-centered digital experiences. I specialize in modern web technologies
                and have a keen eye for design.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through technical writing and mentoring.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  GCAP milestone
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  Working on live projects
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                  Available for Freelance
                </Badge>
              </div>
              {/* <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
            <p className="text-xl text-white/60">Technologies and tools I work with</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <Code className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-purple-500/30 text-purple-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Node.js",  "MongoDB", "MySQL"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-blue-500/30 text-blue-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <Palette className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Design & UX</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Figma",  "Photoshop", "UI/UX Design", "Prototyping"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-green-500/30 text-green-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-orange-400 mb-4" />
                <CardTitle className="text-white">Mobile & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["React Native", "Flutter", "Git", "Docker", "AWS"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-orange-500/30 text-orange-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-white/60">Some of my recent work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "JobConnect Platform",
                description: "A freelance job solution ",
                image: "/placeholder.svg?height=300&width=400",
                tags: ["React", "Node.js", "MongoDB", "Stripe"],
                color: "purple",
              },
              {
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates",
                image: "/placeholder.svg?height=300&width=400",
                tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
                color: "blue",
              },
              {
                title: "Portfolio Website",
                description: "A responsive portfolio website with modern animations and interactions",
                image: "/placeholder.svg?height=300&width=400",
                tags: ["Next", "Tailwind", "Framer Motion", "Vercel"],
                color: "green",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-white/60">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className={`border-${project.color}-500/30 text-${project.color}-300`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-white/60 mb-12">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <Mail className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-white/60">vinndevelop99@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <Twitter className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Twitter</h3>
                <p className="text-white/60">Vinn</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="pt-6 text-center">
                <Linkedin className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                <p className="text-white/60">@ cd vinayak</p>
              </CardContent>
            </Card>
          </div>

         <div className="flex justify-center gap-6">
  <a href="mailto:vinndevelop99@gmail.com" target="_blank" rel="noopener noreferrer">
    <Button
      size="lg"
      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
    >
      <Mail className="mr-2 h-4 w-4" />
      Send Mail
    </Button>
  </a>
  
  <a href="https://github.com/manavvinayak" target="_blank" rel="noopener noreferrer">
    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
      <Github className="mr-2 h-4 w-4" />
      GitHub
    </Button>
  </a>

  <a href="https://www.linkedin.com/in/cdvinayak-437bb4228/" target="_blank" rel="noopener noreferrer">
    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
      <Linkedin className="mr-2 h-4 w-4" />
      LinkedIn
    </Button>
  </a>
</div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
         
          <p className="text-white/60">©  {new Date().getFullYear()} Vinayak Narayan Srivastava. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}