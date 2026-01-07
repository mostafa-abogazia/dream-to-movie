"use client"

import { useState } from "react"
import DreamCard from "@/components/dream-card"
import DreamModal from "@/components/dream-modal"

const galleryDreams = [
  {
    id: 1,
    title: "The Floating City",
    emotion: "Surreal",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    description:
      "I found myself walking through a city suspended in the clouds, where buildings defied gravity and waterfalls flowed upward into the sky.",
    storyline:
      "In a realm where physics bends to imagination, a lone wanderer discovers the Floating City—a metropolis suspended between earth and heaven. As they navigate impossible architecture and gravity-defying landscapes, they uncover the truth: this city exists in the space between dreams and reality, accessible only to those who dare to believe in the impossible.",
  },
  {
    id: 2,
    title: "Ocean of Stars",
    emotion: "Mysterious",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&q=80",
    description:
      "Swimming through an ocean where every drop of water was a glowing star, I felt the universe breathing around me.",
    storyline:
      "Beneath the surface of a cosmic ocean, where starlight replaces water and constellations swim like celestial fish, a dreamer embarks on a journey through the fabric of space itself. Each stroke through this astral sea reveals memories of distant galaxies and whispers of civilizations long forgotten.",
  },
  {
    id: 3,
    title: "The Last Train Home",
    emotion: "Nostalgic",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&q=80",
    description:
      "An endless train journey through landscapes of my childhood, each stop revealing memories I thought I had forgotten.",
    storyline:
      "The Last Train Home travels through time rather than space, each station a portal to cherished memories. As the dreamer rides through scenes of childhood summers and forgotten friendships, they realize that home is not a place but a collection of moments that live forever in the heart.",
  },
  {
    id: 4,
    title: "Garden of Mirrors",
    emotion: "Mysterious",
    image: "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?w=1200&q=80",
    description:
      "A vast garden where every flower was made of reflective glass, showing me different versions of myself in parallel worlds.",
    storyline:
      "In the Garden of Mirrors, each crystalline bloom reflects a different possibility, a different choice, a different life. The dreamer wanders through this kaleidoscope of alternate realities, learning that every reflection is both a glimpse of what could have been and what still might be.",
  },
  {
    id: 5,
    title: "Symphony of Colors",
    emotion: "Adventurous",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1200&q=80",
    description:
      "In this dream, music was visible—each note a burst of color painting the sky with emotion and melody.",
    storyline:
      "A world where sound and sight merge into one, where melodies paint the air and harmonies sculpt the landscape. The dreamer conducts an orchestra of pure color, learning that the most powerful music is seen not with the eyes, but felt with the soul.",
  },
  {
    id: 6,
    title: "The Endless Library",
    emotion: "Hopeful",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80",
    description:
      "Books floating in infinite space, each one containing not just stories, but entire universes waiting to be explored.",
    storyline:
      "Within the Endless Library, knowledge transcends paper and ink. Each book is a doorway to another dimension, another life, another truth. The dreamer discovers that they are both reader and author, that every story they open writes them in return.",
  },
]

export default function GalleryPage() {
  const [selectedDream, setSelectedDream] = useState<(typeof galleryDreams)[0] | null>(null)

  return (
    <div className="min-h-screen py-20 pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-balance">Dream Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore cinematic dreams transformed by our AI. Each one is a unique journey into the subconscious.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryDreams.map((dream) => (
            <DreamCard key={dream.id} dream={dream} onClick={() => setSelectedDream(dream)} />
          ))}
        </div>
      </div>

      {selectedDream && <DreamModal dream={selectedDream} onClose={() => setSelectedDream(null)} />}
    </div>
  )
}
