interface Domino {
  id: string
  name: string
  description: string
  icon: string
  color: string
  triggered: boolean
  impact: string
}

interface DominoCardProps {
  domino: Domino
  isTriggered: boolean
  index: number
  isPrimary?: boolean
}

export function DominoCard({ domino, isTriggered, index, isPrimary }: DominoCardProps) {
  return (
    <div
      className={`w-full max-w-sm transition-all duration-500 transform ${
        isTriggered ? "scale-100 opacity-100" : "scale-95 opacity-40"
      }`}
    >
      <div
        className={`
          rounded-lg p-6 border-2 transition-all duration-500
          ${isTriggered ? `bg-gradient-to-br ${domino.color} border-current shadow-lg` : "bg-card border-border"}
          ${isPrimary ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}
        `}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className={`text-lg font-bold ${isTriggered ? "text-white" : "text-foreground"}`}>{domino.name}</h4>
            <p className={`text-xs font-semibold mt-1 ${isTriggered ? "text-white/80" : "text-muted-foreground"}`}>
              {domino.impact}
            </p>
          </div>
          <span className="text-3xl">{domino.icon}</span>
        </div>

        <p className={`text-sm ${isTriggered ? "text-white/90" : "text-muted-foreground"}`}>{domino.description}</p>

        {isTriggered && (
          <div className="mt-4 inline-block">
            <div className="animate-pulse px-3 py-1 bg-white/20 rounded-full text-xs font-semibold text-white">
              Cascading
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
