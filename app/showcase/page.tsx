export default function ShowcasePage() {
  const readyMadeDreams = [
    {
      id: 1,
      title: "The Cosmic Library",
      emotion: "Wonder",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80",
      description:
        "A vast library floating in space where each book contains the memories of a different civilization across the cosmos.",
      storyline:
        "Among infinite shelves that stretch across galaxies, a seeker discovers the Cosmic Library—a repository of every thought, every story, every dream ever conceived. Here, books write themselves as new dreams are born, and readers become authors of their own cosmic tales. The seeker learns that knowledge is not found, but created in the space between imagination and reality.",
      theme: "Knowledge & Discovery",
      setting: "Cosmic Space",
    },
    {
      id: 2,
      title: "The Clockwork Garden",
      emotion: "Curious",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&q=80",
      description:
        "A mechanical garden where flowers bloom and wither in perfect synchronization with the ticking of an enormous clock tower.",
      storyline:
        "In the heart of time itself, the Clockwork Garden grows—a place where nature and machinery merge into perfect harmony. Each flower is a moment, each petal a second that blooms and fades with precision. A wanderer enters this temporal paradise and realizes that time is not linear, but circular, and every ending is simply a new beginning waiting to unfold.",
      theme: "Time & Cycles",
      setting: "Mechanical Paradise",
    },
    {
      id: 3,
      title: "The Painted Desert",
      emotion: "Serene",
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80",
      description:
        "An endless desert where the sand shifts to form living paintings, each dune a masterpiece created by the wind.",
      storyline:
        "The Painted Desert is a canvas without borders, where nature becomes the artist and sand becomes paint. A traveler walks through landscapes that change with every breeze—portraits of forgotten souls, abstract expressions of pure emotion, landscapes within landscapes. They discover that art is not created but revealed, waiting patiently beneath the surface of all things.",
      theme: "Art & Expression",
      setting: "Desert Landscapes",
    },
    {
      id: 4,
      title: "The Memory Archipelago",
      emotion: "Nostalgic",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
      description:
        "A chain of islands where each shore contains memories from different periods of life, crystallized in shimmering tide pools.",
      storyline:
        "Scattered across an ethereal ocean, the Memory Archipelago holds fragments of a life lived fully. Each island represents an age, each tide pool a crystallized moment—first loves, childhood laughter, bittersweet goodbyes. A visitor island-hops through time, collecting not memories but understanding, realizing that who we are is simply the sum of everywhere we've been.",
      theme: "Memory & Identity",
      setting: "Island Chain",
    },
    {
      id: 5,
      title: "The Symphony Hall of Silence",
      emotion: "Peaceful",
      image: "https://offloadmedia.feverup.com/secretphiladelphia.co/wp-content/uploads/2022/03/13052334/2021_11_17_BOK_Auditorium_Philadelphia_US_04-1-1024x684.jpg",
      description:
        "A grand concert hall where music is felt rather than heard, where silence creates the most powerful symphony.",
      storyline:
        "In the Symphony Hall of Silence, the greatest compositions are those left unplayed. Here, music exists in the space between notes, in the anticipation before sound, in the resonance after it fades. An audience of one sits in perfect stillness and hears everything—the music of breathing, of heartbeats, of existence itself. True harmony, they learn, is found in the quiet moments between.",
      theme: "Peace & Presence",
      setting: "Concert Hall",
    },
    {
      id: 6,
      title: "The Bridge Between Worlds",
      emotion: "Adventurous",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
      description:
        "An ancient bridge that connects countless parallel realities, each step leading to a different version of the same world.",
      storyline:
        "The Bridge Between Worlds stretches across the multiverse, its architecture impossible, its destination uncertain. With each step, a traveler glimpses alternate lives—choices made differently, paths not taken, loves never lost. They realize that every decision creates a new world, and we walk bridges between realities every moment of our lives, choosing which world to inhabit with every breath.",
      theme: "Choice & Possibility",
      setting: "Interdimensional Bridge",
    },
    {
      id: 7,
      title: "The Crystal Caverns",
      emotion: "Mystical",
      image: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=1200&q=80",
      description:
        "Deep underground caverns filled with luminescent crystals that hum with ancient wisdom and forgotten songs.",
      storyline:
        "Beneath the earth's surface, the Crystal Caverns pulse with ethereal light and resonant frequencies from ages past. Each crystal is a vessel of knowledge, each hum a story from civilizations that predated history itself. An explorer touches the formations and feels the vibrations of ancient truths—that wisdom is not learned but remembered, and we are all connected to the deep song of the earth.",
      theme: "Ancient Wisdom",
      setting: "Underground Caverns",
    },
    {
      id: 8,
      title: "The Infinite Staircase",
      emotion: "Determined",
      image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=1200&q=80",
      description:
        "A staircase that spirals endlessly upward through clouds and stars, each step a challenge, each landing a revelation.",
      storyline:
        "The Infinite Staircase rises from earth to cosmos, from doubt to clarity, from fear to courage. A climber ascends through layers of existence—past physical exhaustion, through mental barriers, beyond spiritual limitations. At each plateau, they gain perspective, seeing further, understanding deeper. The summit remains unseen, but they climb anyway, learning that the journey itself is the destination.",
      theme: "Growth & Perseverance",
      setting: "Celestial Stairway",
    },
  ]

  return (
    <div className="min-h-screen py-20 pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Ready-Made Dreams</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Step into fully realized dream worlds, each one crafted with cinematic storytelling and vivid imagery. These
            dreams are ready to inspire your imagination.
          </p>
        </div>

        {/* Dreams Grid */}
        <div className="space-y-24">
          {readyMadeDreams.map((dream, index) => (
            <div
              key={dream.id}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl">
                  <img
                    src={dream.image || "/placeholder.svg"}
                    alt={dream.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs text-primary mb-2">
                      {dream.emotion}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">{dream.title}</h2>
                  <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {dream.theme}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {dream.setting}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">The Dream</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">{dream.description}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">The Story</h3>
                    <p className="text-base leading-relaxed">{dream.storyline}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Create Your Own?</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              These ready-made dreams are just the beginning. Transform your own dreams into cinematic stories with our
              AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/gallery"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
