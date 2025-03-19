"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Github, Instagram, Twitter, ArrowUp } from "lucide-react"
import { SiBehance, SiDribbble } from "react-icons/si"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-secondary/50 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link href="/" className="text-2xl font-playfair font-bold text-foreground mb-4 md:mb-0">
            <span>Kriti</span>
            <span className="text-primary">.</span>
          </Link>

          <div className="flex space-x-4">
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <a href="mailto:karmacharyakriti08@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <a
                href="https://linkedin.com/in/karmakriti"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <a href="https://github.com/karmakriti" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <a href="https://www.behance.net/kritikarmacharya" target="_blank" rel="noopener noreferrer" aria-label="Behance">
                <SiBehance className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <a href="https://dribbble.com/Kikidaisy" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                <SiDribbble className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Kriti Karmacharya. All rights reserved.
          </p>

          <Button
            variant="outline"
            size="sm"
            className="border-primary hover:bg-primary/10 flex items-center"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

