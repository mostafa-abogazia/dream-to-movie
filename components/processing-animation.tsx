"use client"

import { useEffect, useState } from "react"
import { Sparkles, Film, Wand2 } from "lucide-react"

const stages = [
  { icon: Sparkles, text: "Analyzing dream patterns...", duration: 1000 },
  { icon: Wand2, text: "Crafting cinematic narrative...", duration: 1500 },
  { icon: Film, text: "Generating movie poster...", duration: 1500 },
]

export default function ProcessingAnimation() {
  const [currentStage, setCurrentStage] = useState(0)

  useEffect(() => {
    if (currentStage < stages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStage(currentStage + 1)
      }, stages[currentStage].duration)
      return () => clearTimeout(timer)
    }
  }, [currentStage])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="relative mb-12">
          {stages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentStage
                    ? "opacity-100 scale-100"
                    : index < currentStage
                      ? "opacity-50 scale-95"
                      : "opacity-20 scale-90"
                }`}
              >
                {index === currentStage && (
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{stage.text}</h2>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-300 rounded-full"
            style={{
              width: `${((currentStage + 1) / stages.length) * 100}%`,
            }}
          />
        </div>

        <p className="text-muted-foreground mt-6">Creating your cinematic dream experience...</p>
      </div>
    </div>
  )
}
