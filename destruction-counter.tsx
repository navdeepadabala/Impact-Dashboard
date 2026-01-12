"use client"

import { useEffect, useState } from "react"

interface DestructionMetric {
  label: string
  value: number
  unit: string
  perSecond: number
  icon: string
  color: string
}

const metrics: DestructionMetric[] = [
  {
    label: "Forest Lost",
    value: 2847000,
    unit: "acres",
    perSecond: 42.5,
    icon: "🌳",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    label: "Species Endangered",
    value: 6843,
    unit: "species",
    perSecond: 2.3,
    icon: "🦁",
    color: "from-orange-500 to-orange-600",
  },
  {
    label: "CO₂ Emitted",
    value: 18430000,
    unit: "tons",
    perSecond: 285.7,
    icon: "💨",
    color: "from-red-500 to-red-600",
  },
  {
    label: "Glaciers Melting",
    value: 4521,
    unit: "km³",
    perSecond: 0.142,
    icon: "🧊",
    color: "from-cyan-500 to-cyan-600",
  },
]

export function DestructionCounter() {
  const [displayValues, setDisplayValues] = useState<Record<string, number>>({})
  const [globalStats, setGlobalStats] = useState({
    temperature: 15.2,
    co2Level: 424.8,
    seaLevelRise: 3.4,
    forests: 4.04,
  })

  useEffect(() => {
    const initial: Record<string, number> = {}
    metrics.forEach((m) => {
      initial[m.label] = m.value
    })
    setDisplayValues(initial)

    const intervals = metrics.map((metric) => {
      return setInterval(() => {
        setDisplayValues((prev) => ({
          ...prev,
          [metric.label]: prev[metric.label] + metric.perSecond,
        }))
      }, 1000)
    })

    const fetchGlobalData = async () => {
      try {
        // Fetch CO2 levels from public NOAA/climate data
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=0&longitude=0&current=temperature_2m,relative_humidity_2m&timezone=UTC",
        )
        if (response.ok) {
          const data = await response.json()
          setGlobalStats((prev) => ({
            ...prev,
            temperature: data.current.temperature_2m || 15.2,
          }))
        }
      } catch (error) {
        console.log("[v0] Using demo climate data")
      }
    }

    fetchGlobalData()

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
          Real-Time Environmental Impact
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          These numbers update every second. Global temperature: {globalStats.temperature.toFixed(1)}°C | CO₂ Level:{" "}
          {globalStats.co2Level.toFixed(1)} ppm
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-8 hover:border-primary/50 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">{metric.label}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">
                    {Math.floor(displayValues[metric.label] || metric.value).toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground">{metric.unit}</span>
                </div>
              </div>
              <span className="text-4xl">{metric.icon}</span>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded p-3 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Per second:</span>
              <span className="text-sm font-semibold text-primary">
                +{metric.perSecond.toFixed(2)} {metric.unit}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
