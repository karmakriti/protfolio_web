"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Code, Figma, Layers, Users, LineChart, Accessibility, Workflow } from "lucide-react"

const skillsData = [
  {
    category: "Design",
    icon: <Palette className="h-8 w-8 text-primary" />,
    skills: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    category: "Tools",
    icon: <Figma className="h-8 w-8 text-primary" />,
    skills: ["Figma", "Adobe XD", "Sketch", "Axure"],
  },
  {
    category: "Development",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ["HTML/CSS", "WordPress", "Responsive Design", "Accessibility"],
  },
  {
    category: "Methodologies",
    icon: <Workflow className="h-8 w-8 text-primary" />,
    skills: ["Agile", "Design Thinking", "User Research", "A/B Testing"],
  },
  {
    category: "Specialties",
    icon: <Layers className="h-8 w-8 text-primary" />,
    skills: ["eCommerce UI", "Enterprise Solutions", "Public Sector UX", "Design Systems"],
  },
  {
    category: "Accessibility",
    icon: <Accessibility className="h-8 w-8 text-primary" />,
    skills: ["WCAG 2.1+", "Inclusive Design", "Screen Reader Testing", "Color Contrast"],
  },
  {
    category: "Research",
    icon: <Users className="h-8 w-8 text-primary" />,
    skills: ["User Interviews", "Usability Testing", "Personas", "Journey Mapping"],
  },
  {
    category: "Analytics",
    icon: <LineChart className="h-8 w-8 text-primary" />,
    skills: ["User Behavior", "Conversion Optimization", "Heatmaps", "Metrics Analysis"],
  },
]

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          I've developed a diverse set of skills throughout my career, focusing on creating accessible and user-centered
          digital experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skillGroup, index) => (
            <Card
              key={skillGroup.category}
              className={`border-primary/20 hover:border-primary transition-all duration-300 ${
                inView ? `animate-fade-in animate-delay-${index % 5}00` : "opacity-0"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full">{skillGroup.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.skills.map((skill) => (
                      <li key={skill} className="text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

