interface TimelineState {
  temperature: number
  seaLevel: number
  forestCoverage: number
  species: number
  population: number
}

interface TimelineCardProps {
  label: string
  year: string
  state: TimelineState
  variant: "primary" | "secondary"
}

export function TimelineCard({ label, year, state, variant }: TimelineCardProps) {
  const metrics = [
    {
      name: "Global Temperature",
      value: state.temperature.toFixed(2),
      unit: "°C above pre-industrial",
      icon: "🌡️",
    },
    {
      name: "Sea Level Rise",
      value: state.seaLevel,
      unit: "cm since 1993",
      icon: "🌊",
    },
    {
      name: "Forest Coverage",
      value: state.forestCoverage,
      unit: "% of land",
      icon: "🌲",
    },
    {
      name: "Species on Earth",
      value: (state.species / 1000000).toFixed(1),
      unit: "million species",
      icon: "🦋",
    },
  ]

  const bgColor = variant === "primary" ? "bg-primary/10" : "bg-secondary/10"
  const borderColor = variant === "primary" ? "border-primary/50" : "border-secondary/50"

  return (
    <div className={`${bgColor} border ${borderColor} rounded-lg p-8`}>
      <div className="mb-8">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
        <h2 className="text-3xl font-bold text-foreground">{year}</h2>
      </div>

      <div className="space-y-6">
        {metrics.map((metric) => (
          <div key={metric.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{metric.name}</span>
              <span className="text-2xl">{metric.icon}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-foreground">{metric.value}</span>
              <span className="text-xs text-muted-foreground">{metric.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
