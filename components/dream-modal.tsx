"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Dream {
  id: number
  title: string
  emotion: string
  image: string
  description: string
  storyline: string
}

interface DreamModalProps {
  dream: Dream
  onClose: () => void
}

export default function DreamModal({ dream, onClose }: DreamModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-card rounded-2xl border border-border">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="relative aspect-[2/3] rounded-xl overflow-hidden">
            <img src={dream.image || "/placeholder.svg"} alt={dream.title} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-sm text-primary mb-2">{dream.emotion}</div>
              <h2 className="text-3xl font-bold mb-4">{dream.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{dream.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Cinematic Storyline</h3>
              <p className="text-muted-foreground leading-relaxed">{dream.storyline}</p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}
