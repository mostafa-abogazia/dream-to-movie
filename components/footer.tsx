import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span>Dream to Movie</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Transforming dreams into cinematic experiences through the power of advanced AI technology.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/gallery" className="block text-muted-foreground hover:text-foreground transition-colors">
                Gallery
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>dreams@dreamtomovie.ai</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2025 Dream to Movie. All dreams reserved.</p>
        </div>
      </div>
    </footer>
  )
}
