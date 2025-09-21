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
// some import libaries are being depreceated 
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { MobileMenu } from "@/components/mobile/mobile-menu"

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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">VNS</div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex space-x-8 mr-4">
                {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-colors hover:text-slate-800 dark:hover:text-white cursor-pointer px-1 py-0.5 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded ${
                      activeSection === item.toLowerCase() ? "text-slate-800 dark:text-white font-semibold" : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <div className="flex items-center md:hidden">
              <div className="mr-2">
                <ThemeToggle />
              </div>
              <MobileMenu activeSection={activeSection} scrollToSection={scrollToSection} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
        <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-800/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full">
          <div className="mb-6 md:mb-8">
            <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-6 md:mb-8 rounded-full border-2 border-slate-300 dark:border-slate-700 p-1 shadow-md">
              <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <span className="text-3xl md:text-4xl font-bold">VNS</span>
              </div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6">
            Vinayak Narayan
            <span className="block text-slate-600 dark:text-slate-300">
              Srivastava
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-6 md:mb-8 max-w-3xl mx-auto px-2">
            Full Stack Developer & UI/UX Designer crafting digital experiences that inspire and engage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-slate-800 hover:bg-slate-700 text-white dark:bg-slate-700 dark:hover:bg-slate-600 cursor-pointer shadow-sm hover:shadow-md transition-all duration-200"
              onClick={() => scrollToSection("projects")}
            >
              View My Work <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 bg-transparent cursor-pointer shadow-sm hover:shadow-md transition-all duration-200"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-500 dark:bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">Passionate about creating exceptional digital experiences</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-8 border border-slate-200 dark:border-slate-700">
                <img
                  src="/image.jpg"
                  alt="Vinayak Narayan Srivastava"
                  className="w-90 h-80 rounded-xl object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Hello! I'm Vinayak, a passionate full-stack developer and have experience in creating
                beautiful, functional, and user-centered digital experiences. I specialize in modern web technologies
                and have a keen eye for design.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through technical writing and mentoring.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-slate-200 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                  GCAP milestone
                </Badge>
                <Badge variant="secondary" className="bg-slate-200 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                  Working on live projects
                </Badge>
                <Badge variant="secondary" className="bg-slate-200 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
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
      <section id="skills" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="relative text-center mb-12 md:mb-16">
            <div className="hidden sm:block absolute -left-2 top-1/2 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700"></div>
            <span className="inline-block text-xs font-mono tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-2">Capabilities</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Skills & Expertise</h2>
            <div className="w-12 h-1 bg-slate-300 dark:bg-slate-700 mx-auto mb-4"></div>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Technologies and tools I work with</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 left-0 h-1 w-full bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-400 dark:group-hover:bg-slate-600 transition-colors"></div>
              <CardHeader className="relative pt-8">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">01</span>
                </div>
                <Code className="h-12 w-12 text-slate-700 dark:text-slate-300 mb-4" />
                <CardTitle className="text-slate-800 dark:text-slate-200 text-xl">Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-md px-3 py-1 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 left-0 h-1 w-full bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-400 dark:group-hover:bg-slate-600 transition-colors"></div>
              <CardHeader className="relative pt-8">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">02</span>
                </div>
                <Globe className="h-12 w-12 text-slate-700 dark:text-slate-300 mb-4" />
                <CardTitle className="text-slate-800 dark:text-slate-200 text-xl">Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Node.js",  "MongoDB", "MySQL"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-md px-3 py-1 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 left-0 h-1 w-full bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-400 dark:group-hover:bg-slate-600 transition-colors"></div>
              <CardHeader className="relative pt-8">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-300">03</span>
                </div>
                <Palette className="h-12 w-12 text-slate-700 dark:text-slate-300 mb-4" />
                <CardTitle className="text-slate-800 dark:text-slate-200 text-xl">Design & UX</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Figma",  "Photoshop", "UI/UX Design", "Prototyping"].map((skill) => (
                    <Badge key={skill} variant="outline" className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-md px-3 py-1 text-xs">
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
      <section id="projects" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="relative text-center mb-12 md:mb-16">
            <div className="hidden sm:block absolute -left-2 top-1/2 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700"></div>
            <span className="inline-block text-xs font-mono tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-2">Portfolio</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Featured Projects</h2>
            <div className="w-12 h-1 bg-slate-300 dark:bg-slate-700 mx-auto mb-4"></div>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Some of my recent work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "YouFinance ",
                description: "take control of your money with a clean, beautiful interface. ",
                image: "you.png",
                tags: ["React", "TailwindCSS","ExpressJS", "NodeJS", "MongoDb"],
                color: "purple",
                githubUrl: "https://github.com/manavvinayak/YouFinance",
                demoUrl: "https://you-finance-frontend.vercel.app/"
              },
              {
                title: "Event Management App",
                description: "A collaborative event management application with real-time updates",
                image: "event.png",
                tags: ["React", "TailwindCSS","ExpressJS", "NodeJS", "MongoDb"],
                color: "blue",
                githubUrl: "https://github.com/manavvinayak/EventHub_frontend",
                demoUrl: "https://event-hub-frontend-omega.vercel.app/"
              },
              {
                title: "GradUs",
                description: "A smart GPA and credit tracking tool designed for students. ",
                image: "grade.png",
                tags: ["React", "CSS"],
                color: "green",
                githubUrl: "https://github.com/manavvinayak/GradUs",
                demoUrl: "https://gradus-vm9e-is5th9s05-manavvinayaks-projects.vercel.app/"
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-400 dark:group-hover:bg-slate-600 transition-colors"></div>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Desktop hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-end justify-center pb-4">
                    <div className="flex gap-2">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-white text-slate-800 hover:bg-slate-100 cursor-pointer shadow-sm hover:shadow-md transition-all duration-200">
                          <ExternalLink className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" />
                          Live Demo
                        </Button>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 cursor-pointer hover:shadow-md transition-all duration-200">
                          <Github className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" />
                          Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-800 dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-md px-2 py-1 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {/* Mobile buttons - only visible on mobile */}
                  <div className="flex gap-2 md:hidden mt-3">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 group">
                      <Button 
                        size="sm" 
                        className="w-full bg-slate-800 hover:bg-slate-700 text-white dark:bg-slate-700 dark:hover:bg-slate-600 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                        <span className="group-hover:translate-x-0.5 transition-transform duration-300">Live Demo</span>
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 group">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="w-full border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="group-hover:translate-x-0.5 transition-transform duration-300">Code</span>
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="relative text-center mb-12 md:mb-16">
            <div className="hidden sm:block absolute -left-2 top-1/2 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700"></div>
            <span className="inline-block text-xs font-mono tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-2">Connect</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Let's Work Together</h2>
            <div className="w-12 h-1 bg-slate-300 dark:bg-slate-700 mx-auto mb-4"></div>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-400 dark:group-hover:bg-slate-600 transition-colors"></div>
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-slate-700 dark:text-slate-300" />
                </div>
                <h3 className="text-slate-800 dark:text-white font-semibold text-lg mb-2">Email</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">narayanvinayak95@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-400 dark:group-hover:bg-slate-600 transition-colors"></div>
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mx-auto mb-4">
                  <Twitter className="h-8 w-8 text-slate-700 dark:text-slate-300" />
                </div>
                <h3 className="text-slate-800 dark:text-white font-semibold text-lg mb-2">Twitter</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Vinn</p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-slate-300 dark:bg-slate-700 group-hover:bg-slate-400 dark:group-hover:bg-slate-600 transition-colors"></div>
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="h-8 w-8 text-slate-700 dark:text-slate-300" />
                </div>
                <h3 className="text-slate-800 dark:text-white font-semibold text-lg mb-2">LinkedIn</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">@ cd vinayak</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 max-w-md mx-auto">
            <a href="mailto:vinndevelop99@gmail.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white cursor-pointer shadow-sm hover:shadow-md transition-all duration-200"
              >
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Send Mail
              </Button>
            </a>
            
            <a href="https://github.com/manavvinayak" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 bg-transparent cursor-pointer shadow-sm hover:shadow-md transition-all duration-200"
              >
                <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                GitHub
              </Button>
            </a>

            <a href="https://www.linkedin.com/in/cdvinayak-437bb4228/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 bg-transparent cursor-pointer shadow-sm hover:shadow-md transition-all duration-200"
              >
                <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto text-center">
         
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">©  {new Date().getFullYear()} Vinayak Narayan Srivastava. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}