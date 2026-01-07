"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Sparkles className="w-6 h-6 text-primary" />
            <span>Dream to Movie</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/showcase" className="text-foreground/80 hover:text-foreground transition-colors">
              Showcase
            </Link>
            <Link href="/gallery" className="text-foreground/80 hover:text-foreground transition-colors">
              Gallery
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </Link>
            
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-foreground/80 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/showcase"
              onClick={() => setIsOpen(false)}
              className="block text-foreground/80 hover:text-foreground transition-colors"
            >
              Showcase
            </Link>
            <Link
              href="/create"
              onClick={() => setIsOpen(false)}
              className="block text-foreground/80 hover:text-foreground transition-colors"
            >
              Create
            </Link>
            <Link
              href="/gallery"
              onClick={() => setIsOpen(false)}
              className="block text-foreground/80 hover:text-foreground transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link href="/create" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Start Dreaming</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
