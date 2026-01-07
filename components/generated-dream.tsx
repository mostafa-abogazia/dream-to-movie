"use client"

import { Button } from "@/components/ui/button"
import { Play, RotateCcw } from "lucide-react"

const moviePosters = [
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
  "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=800&q=80",
  "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80",
  "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
  "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&q=80",
]

const storylines = [
  "In a realm where reality bends to the will of imagination, our protagonist embarks on an extraordinary journey through landscapes that defy the laws of physics. As they navigate between consciousness and the ethereal plane of dreams, they discover that the key to understanding their destiny lies not in what they see, but in what they dare to believe.",
  "The boundaries between memory and fantasy blur as our dreamer finds themselves caught between two worlds. In this cinematic odyssey, past and present collide in spectacular fashion, revealing truths that have been hidden in the depths of the subconscious. Every scene unfolds like a painting coming to life, each moment more breathtaking than the last.",
  "A mystical force draws our protagonist into a dimension where emotions take physical form and thoughts sculpt reality. Through stunning visuals and heart-wrenching moments, this dream-turned-movie explores the deepest corners of human experience, asking the question: what if our dreams are messages from a version of ourselves we have yet to become?",
]

interface GeneratedDreamProps {
  formData: {
    title: string
    description: string
    emotion: string
  }
  onReplay: () => void
}

export default function GeneratedDream({ formData, onReplay }: GeneratedDreamProps) {
  const randomPoster = moviePosters[Math.floor(Math.random() * moviePosters.length)]
  const randomStoryline = storylines[Math.floor(Math.random() * storylines.length)]

  return (
    <div className="min-h-screen py-20 px-4 pt-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary">
            Your Dream Movie is Ready
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{formData.title}</h1>
          <p className="text-lg text-muted-foreground">
            Emotion: <span className="text-primary">{formData.emotion}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Movie Poster */}
          <div className="relative aspect-[2/3] rounded-2xl overflow-hidden border border-border">
            <img
              src={randomPoster || "/placeholder.svg"}
              alt={formData.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-balance">{formData.title}</h2>
              <p className="text-sm text-muted-foreground">A Dream Experience</p>
            </div>
          </div>

          {/* Dream Details */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-6">
              <h3 className="text-xl font-bold mb-4">Your Dream</h3>
              <p className="text-muted-foreground leading-relaxed">{formData.description}</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-6">
              <h3 className="text-xl font-bold mb-4">Cinematic Storyline</h3>
              <p className="text-muted-foreground leading-relaxed">{randomStoryline}</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-6">
              <h3 className="text-xl font-bold mb-4">Voice-Over Preview</h3>
              <audio controls className="w-full" preload="auto">
                <source src="https://cdn.pixabay.com/audio/2022/03/10/audio_c8c8e2c39e.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <p className="text-xs text-muted-foreground mt-2">AI-generated narration bringing your dream to life</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="group">
            <Play className="mr-2 w-5 h-5" />
            Watch Full Experience
          </Button>
          <Button size="lg" variant="outline" onClick={onReplay}>
            <RotateCcw className="mr-2 w-5 h-5" />
            Create Another Dream
          </Button>
        </div>
      </div>
    </div>
  )
}
