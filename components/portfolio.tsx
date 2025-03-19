"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Maximize } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Sample portfolio projects
const projects = [
  {
    id: 1,
    title: "VosynCore UI Design",
    category: "Enterprise UI",
    description:
      "Designed and optimized UI components for VosynCore, enhancing real-time voice, text, and video localization.",
    image: "/vosyn.png?height=600&width=800",
    tags: ["UI Design", "Enterprise", "Figma"],
  },
  {
    id: 2,
    title: "eCommerce Website",
    category: "eCommerce",
    description: "Developed responsive eCommerce interfaces to enhance user experience and boost engagement.",
    image: "/e-com.png?height=600&width=800",
    tags: ["eCommerce", "WordPress", "Responsive"],
  },
  {
    id: 3,
    title: "Pharmacy Management System",
    category: "Healthcare",
    description:
      "Developed a pharmacy management system using PHP and WordPress, improving accessibility for patients and pharmacists.",
    image: "/e-pharma.png?height=600&width=800",
    tags: ["Healthcare", "Accessibility", "UX Design"],
  },
  {
    id: 4,
    title: "VosynConnect Interface",
    category: "Enterprise UI",
    description:
      "Developed scalable, accessible interfaces in VosynConnect, ensuring seamless integration of localization services.",
    image: "/vosyn.png?height=600&width=800",
    tags: ["UI/UX", "Accessibility", "Enterprise"],
  },
  {
    id: 5,
    title: "Mobile App Design",
    category: "Mobile",
    description:
      "Designed a user-friendly mobile application interface with focus on accessibility and user experience.",
    image: "/mobile-app.png?height=600&width=800",
    tags: ["Mobile", "UI Design", "Prototyping"],
  },
  {
    id: 6,
    title: "Design System",
    category: "Design Systems",
    description: "Created a comprehensive design system to ensure consistency across multiple digital products.",
    image: "/Design-system.png?height=600&width=800",
    tags: ["Design Systems", "Component Library", "Documentation"],
  },
]

const categories = ["All", "Enterprise UI", "eCommerce", "Healthcare", "Mobile", "Design Systems"]

const Portfolio = () => {
  const [filter, setFilter] = useState("All")
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary/50" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Portfolio</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Explore my recent design projects showcasing my skills in UI/UX design, accessibility, and digital
          experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              className={
                filter === category ? "bg-primary text-primary-foreground" : "border-primary/20 hover:bg-primary/10"
              }
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`border-primary/20 overflow-hidden group hover:border-primary transition-all duration-300 ${
                inView ? `animate-fade-in animate-delay-${index % 5}00` : "opacity-0"
              }`}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full bg-background/80 mr-2">
                        <Maximize className="h-5 w-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>{project.category}</DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-md"
                        />
                        <div>
                          <p className="mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                              <span key={tag} className="bg-primary/20 text-sm px-3 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline" size="icon" className="rounded-full bg-background/80">
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-primary/20 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

