"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={`transition-opacity duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
              <span className="text-primary">UI/UX Designer</span> with a passion for accessible experiences
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up animate-delay-100">
              Creating intuitive, user-centered digital solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-200">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#portfolio">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary hover:bg-primary/10">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-opacity duration-1000 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            } animate-slide-in-right`}
          >
            <div className="relative w-full aspect-square rounded-full bg-primary/20 overflow-hidden">
              <div className="absolute inset-4 rounded-full bg-primary/30 animate-pulse"></div>
              <div className="absolute inset-8 rounded-full bg-primary/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/dp.png"
                  alt="Kriti Karmacharya"
                  className="w-3/4 h-3/4 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <Link href="#about">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero

