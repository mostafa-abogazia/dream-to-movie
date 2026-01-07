import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=1080&q=90&fit=crop"
          alt="Cinematic dream landscape"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary">
          Powered by Advanced AI Technology
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-balance leading-tight">
          Turn Your Dreams into{" "}
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Movies</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience the magic of seeing your dreams transformed into stunning cinematic stories. Every dream has a
          narrative waiting to be discovered.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/gallery">
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-transparent w-full sm:w-auto">
              Explore Gallery
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mt-16 sm:mt-20">
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Dreams Created</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Hours of Content</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
