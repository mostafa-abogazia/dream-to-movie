"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Emma Wilson",
    dream: "Flying Through Neon Cities",
    quote:
      "I never thought I could see my recurring dream visualized so perfectly. Dream2Movie captured every emotion and detail.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "James Martinez",
    dream: "Conversations with My Grandfather",
    quote:
      "This platform helped me preserve a dream I had about my late grandfather. It's like having a piece of him with me forever.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Sophia Lee",
    dream: "The Crystal Forest",
    quote:
      "The AI understood the magical, mystical feeling of my dream and turned it into something I can share with others.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Dream Stories</h2>
          <p className="text-lg text-muted-foreground">Hear from dreamers who brought their visions to life</p>
        </div>

        <div className="relative">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-12">
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[current].image || "/placeholder.svg"}
                alt={testimonials[current].name}
                className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-primary/20"
              />
              <p className="text-xl md:text-2xl mb-6 leading-relaxed text-pretty">"{testimonials[current].quote}"</p>
              <div className="font-bold text-lg">{testimonials[current].name}</div>
              <div className="text-sm text-primary">{testimonials[current].dream}</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button onClick={prev} size="icon" variant="outline">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-primary w-8" : "bg-muted"}`}
                />
              ))}
            </div>
            <Button onClick={next} size="icon" variant="outline">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
