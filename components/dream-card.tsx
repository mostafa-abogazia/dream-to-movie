"use client"

interface Dream {
  id: number
  title: string
  emotion: string
  image: string
  description: string
}

interface DreamCardProps {
  dream: Dream
  onClick: () => void
}

export default function DreamCard({ dream, onClick }: DreamCardProps) {
  return (
    <div onClick={onClick} className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
        <img
          src={dream.image || "/placeholder.svg"}
          alt={dream.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="text-xs text-primary mb-2">{dream.emotion}</div>
          <h3 className="text-xl font-bold mb-2">{dream.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{dream.description}</p>
        </div>
      </div>
    </div>
  )
}
