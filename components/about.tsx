"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Linkedin, Globe } from "lucide-react"

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 px-4 bg-secondary/50" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`md:col-span-2 ${inView ? "animate-slide-in-left" : "opacity-0"}`}>
            <h3 className="text-2xl font-bold mb-4">UI/UX Designer & Developer</h3>
            <p className="text-muted-foreground mb-6">
              Creative and user-focused UI/UX Designer with a passion for designing accessible, intuitive digital
              experiences. With hands-on experience in eCommerce, enterprise platforms, and public sector services, I
              specialize in wireframing, prototyping, and design systems using Figma, WordPress, and HTML/CSS.
            </p>
            <p className="text-muted-foreground mb-6">
              I thrive in agile environments, ensuring designs align with WCAG 2.1+ standards for inclusivity and
              usability. Always eager to collaborate with cross-functional teams, iterate based on user feedback, and
              craft engaging, user-centered interfaces that drive meaningful impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Etobicoke, Ontario, Canada</span>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-4 flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:karmacharyakriti08@gmail.com" className="hover:text-primary transition-colors">
                    karmacharyakriti08@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-4 flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://linkedin.com/in/karmakriti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    in/karmakriti
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/20">
                <CardContent className="p-4 flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <a
                    href="https://www.karmakriti.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    www.karmakriti.me
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className={`${inView ? "animate-slide-in-right" : "opacity-0"}`}>
            <Card className="bg-card/50 border-primary/20 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-6 text-center">Personal Details</h3>

                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Languages</h4>
                    <p>English, Nepali</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-primary mb-2">Nationality</h4>
                    <p>Canadian</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-primary mb-2">Interests</h4>
                    <p>UI Design, Accessibility, User Research, Design Systems</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-medium text-primary mb-3">Download CV</h4>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                    rel="noreferrer"
                  >
                    Resume PDF
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

