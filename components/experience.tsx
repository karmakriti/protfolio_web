"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Web Designer UI/UX",
    company: "Vosyn",
    location: "Etobicoke, Ontario, Canada",
    period: "September 2024 - Present",
    description: [
      "Designed and optimized UI components for VosynCore, enhancing real-time voice, text, and video localization.",
      "Developed scalable, accessible interfaces in VosynConnect, ensuring seamless integration of localization services.",
      "Led iterative UI/UX improvements based on user analytics, feedback, and usability testing to refine enterprise solutions.",
    ],
  },
  {
    title: "UI/UX Designer",
    company: "Gurzu Inc.",
    location: "Kathmandu, Bāgmatī, Nepal",
    period: "March 2021 - May 2023",
    description: [
      "Designed and optimized responsive eCommerce interfaces to enhance user experience and boost engagement.",
      "Developed and customized WordPress-based eCommerce websites, ensuring seamless UI and accessibility.",
      "Built reusable UI components for product pages and checkout flows, improving scalability and consistency.",
      "Conducted usability testing and A/B experiments to refine eCommerce design elements and increase conversions.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "AMNIL Technologies Pvt. Ltd.",
    location: "Kathmandu, Bāgmatī, Nepal",
    period: "June 2020 - January 2021",
    description: [
      "Developed a pharmacy management system using PHP and WordPress, improving accessibility for patients and pharmacists.",
      "Implemented WCAAG-compliant UI elements to enhance readability and navigation for users with visual impairments.",
      "Optimized database operations to ensure fast, reliable access to patient prescriptions and inventory data.",
      "Designed user-friendly interfaces for streamlined prescription management, improving efficiency for healthcare providers.",
    ],
  },
  {
    title: "Code Sensei",
    company: "Code Ninjas",
    location: "Etobicoke, Ontario, Canada",
    period: "October 2023 - Present",
    description: [
      "Empowered 80+ students in coding by teaching Scratch & Python, mentoring a recognized student project, and introducing Minecraft & Tinkercad to enhance STEAM engagement and learning outcomes by 50%",
    ],
  },
]

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          My professional journey in UI/UX design and development.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${inView ? `animate-fade-in animate-delay-${index % 5}00` : "opacity-0"}`}
            >
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 pb-8 md:pb-0">
                  <div className="w-full max-w-md">
                    <Card className="border-primary/20 h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="p-2 bg-primary/10 rounded-full mr-3">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <p className="text-primary">{exp.company}</p>
                          </div>
                        </div>

                        <div className="flex items-center mb-4">
                          <div className="p-2 bg-primary/10 rounded-full mr-3">
                            <Calendar className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-muted-foreground">{exp.period}</p>
                        </div>

                        <p className="text-muted-foreground mb-2">{exp.location}</p>

                        <ul className="list-disc list-inside space-y-2 mt-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-muted-foreground">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="md:w-1/2 flex justify-center md:justify-start md:pl-12 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-0 top-0 w-6 h-6 rounded-full bg-primary -ml-3 md:-ml-3 z-10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

