import Link from "next/link"
import { Button } from "@/components/ui/button"

const dreams = [
  {
    title: "The Floating City",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    emotion: "Surreal",
  },
  {
    title: "Ocean of Stars",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    emotion: "Mysterious",
  },
  {
    title: "The Last Train Home",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80",
    emotion: "Nostalgic",
  },
]

export default function SampleDreams() {
  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Featured Dreams</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore dreams that have been transformed into cinematic experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {dreams.map((dream, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                <img
                  src={dream.image || "/placeholder.svg"}
                  alt={dream.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs text-primary mb-2">{dream.emotion}</div>
                  <h3 className="text-xl font-bold">{dream.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery">
            <Button size="lg" variant="outline">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
