"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, Award } from "lucide-react"

const educationData = [
  {
    degree: "Ontario Graduate Certificate Computer Science",
    institution: "Georgian College",
    year: "2024",
    description:
      "UX principles to design accessible, user-centered digital solutions in alignment with government service standards.",
  },
  {
    degree: "Diploma, Computer Science",
    institution: "Trinity International College",
    year: "September 2019 - February 2022",
    description: "Computer Science.",
  },
]

const certifications = [
  {
    title: "Jira Project Management",
    issuer: "LinkedIn",
    year: "2025",
  },
]

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 px-4 bg-secondary/50" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Education & <span className="text-primary">Certifications</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          My academic background and professional certifications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={inView ? "animate-slide-in-left" : "opacity-0"}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-primary" />
              Education
            </h3>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <Card key={index} className="border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                    <p className="text-primary mb-2">{edu.institution}</p>

                    <div className="flex items-center mb-4">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <p className="text-muted-foreground">{edu.year}</p>
                    </div>

                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className={inView ? "animate-slide-in-right" : "opacity-0"}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Award className="mr-2 h-6 w-6 text-primary" />
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2">{cert.title}</h4>
                    <p className="text-primary mb-2">{cert.issuer}</p>

                    <div className="flex items-center mb-4">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <p className="text-muted-foreground">{cert.year}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Continuing Education</h4>
                <p className="text-muted-foreground mb-4">
                  I'm constantly learning and improving my skills through online courses, workshops, and industry
                  events.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-muted-foreground">Advanced UI/UX Design Principles</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-muted-foreground">Accessibility in Digital Design</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span className="text-muted-foreground">Design Systems Architecture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

