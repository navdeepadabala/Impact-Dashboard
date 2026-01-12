interface TimelineState {
  temperature: number
  seaLevel: number
  forestCoverage: number
  species: number
  population: number
}

interface ImpactComparisonProps {
  current: TimelineState
  future: TimelineState
  timelineLabel: string
}

export function ImpactComparison({ current, future, timelineLabel }: ImpactComparisonProps) {
  const comparisons = [
    {
      name: "Temperature Change",
      currentValue: current.temperature,
      futureValue: future.temperature,
      unit: "°C",
      description: "Every 0.1°C increases risks exponentially",
    },
    {
      name: "Sea Level Rise",
      currentValue: current.seaLevel,
      futureValue: future.seaLevel,
      unit: "cm",
      description: "10cm threatens millions in coastal cities",
    },
    {
      name: "Forest Lost",
      currentValue: 100 - current.forestCoverage,
      futureValue: 100 - future.forestCoverage,
      unit: "%",
      description: "Forests are carbon sinks and biodiversity homes",
    },
    {
      name: "Species Lost",
      currentValue: ((8000000 - current.species) / 8000000) * 100,
      futureValue: ((8000000 - future.species) / 8000000) * 100,
      unit: "%",
      description: "Extinction is forever—impacts entire food chains",
    },
  ]

  return (
    <div className="bg-card border border-border rounded-lg p-8">
      <h3 className="text-2xl font-bold text-foreground mb-2">Impact Shift: Today vs {timelineLabel}</h3>
      <p className="text-muted-foreground mb-8">How each metric changes over time:</p>

      <div className="space-y-8">
        {comparisons.map((comparison) => {
          const change = future.population > current.population ? "increase" : "decrease"
          const changePercent = (
            ((comparison.futureValue - comparison.currentValue) / comparison.currentValue) *
            100
          ).toFixed(1)
          const isNegative = comparison.futureValue > comparison.currentValue

          return (
            <div key={comparison.name}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-foreground">{comparison.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{comparison.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">
                    <span className="text-muted-foreground">{comparison.currentValue.toFixed(1)}</span>
                    <span className="text-muted-foreground text-lg"> → </span>
                    <span className={isNegative ? "text-orange-400" : "text-emerald-400"}>
                      {comparison.futureValue.toFixed(1)}
                    </span>
                  </div>
                  <div className={`text-sm font-semibold mt-1 ${isNegative ? "text-orange-400" : "text-emerald-400"}`}>
                    {isNegative ? "+" : ""}
                    {changePercent}%
                  </div>
                </div>
              </div>

              {/* Progress bar visualization */}
              <div className="bg-background rounded h-2 overflow-hidden">
                <div
                  className={`h-full transition-all ${isNegative ? "bg-orange-500" : "bg-emerald-500"}`}
                  style={{
                    width: `${Math.min((comparison.futureValue / (comparison.currentValue * 2)) * 100, 100)}%`,
                  }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
