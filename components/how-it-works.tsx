import { MessageSquare, Sparkles, Film } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Share Your Dream",
    description: "Tell us about your dream in as much detail as you remember. Every detail helps paint the picture.",
  },
  {
    icon: Sparkles,
    title: "AI Processing",
    description: "Our advanced AI analyzes your dream, understanding emotions, themes, and narrative structures.",
  },
  {
    icon: Film,
    title: "Cinematic Creation",
    description: "Watch as your dream transforms into a beautiful movie poster, storyline, and voice-over.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your dreams into cinematic masterpieces
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-6xl font-bold text-primary/20 mb-4">{(index + 1).toString().padStart(2, "0")}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
