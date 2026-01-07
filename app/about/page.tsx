import { Sparkles, Film, Wand2 } from "lucide-react"

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Dream Architect",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Marcus Rodriguez",
    role: "AI Storytelling Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Yuki Tanaka",
    role: "Cinematic Experience Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "Alex Thompson",
    role: "Neural Narrative Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 pt-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-balance">About Dream to Movie</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe that every dream holds a story worth telling, a cinematic universe waiting to unfold.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To transform the ethereal nature of dreams into tangible cinematic experiences that inspire and captivate.
            </p>
          </div>

          <div className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Film className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To democratize storytelling by giving everyone the power to see their dreams come alive on screen.
            </p>
          </div>

          <div className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wand2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Technology</h3>
            <p className="text-muted-foreground leading-relaxed">
              Powered by advanced AI that understands emotion, narrative, and the language of cinema.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                />
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4 text-balance">Every Dream Deserves to Be Seen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dream to Movie was born from a simple belief: that the stories we experience in our sleep are just as valid and
            powerful as those we create while awake. Join us in exploring the infinite possibilities of the subconscious
            mind.
          </p>
        </div>
      </div>
    </div>
  )
}
