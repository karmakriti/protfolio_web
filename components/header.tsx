"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-playfair font-bold text-foreground animate-fade-in">
          <span>Kriti</span>
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["About", "Skills", "Portfolio", "Experience", "Contact"].map((item, index) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-foreground hover:text-primary transition-colors animate-fade-in animate-delay-${
                index + 1
              }00`}
            >
              {item}
            </Link>
          ))}
          <Button
            asChild
            variant="outline"
            className="border-primary hover:bg-primary/10 animate-fade-in animate-delay-500"
          >
            <Link href="/resume.pdf" target="_blank">
              Resume
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["About", "Skills", "Portfolio", "Experience", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button asChild variant="outline" className="border-primary hover:bg-primary/10 w-full">
              <Link href="/resume.pdf" target="_blank" onClick={() => setIsMobileMenuOpen(false)}>
                Resume
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

