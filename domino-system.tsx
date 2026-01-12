"use client"

import { useState, useEffect } from "react"
import { DominoCard } from "./domino-card"
import { CascadeFlow } from "./cascade-flow"

interface Domino {
  id: string
  name: string
  description: string
  icon: string
  color: string
  triggered: boolean
  impact: string
}

const dominoes: Domino[] = [
  {
    id: "1",
    name: "Rising CO₂",
    description: "Atmospheric carbon exceeds 425 ppm",
    icon: "💨",
    color: "from-red-500 to-red-600",
    triggered: true,
    impact: "Initiates the cascade",
  },
  {
    id: "2",
    name: "Ocean Acidification",
    description: "Seawater pH drops, marine life stressed",
    icon: "🌊",
    color: "from-cyan-500 to-cyan-600",
    triggered: false,
    impact: "Triggered by rising CO₂",
  },
  {
    id: "3",
    name: "Coral Bleaching",
    description: "Reefs lose symbiotic algae",
    icon: "🪸",
    color: "from-orange-500 to-orange-600",
    triggered: false,
    impact: "Triggered by acidification & heat",
  },
  {
    id: "4",
    name: "Fish Collapse",
    description: "70% of marine species lose habitat",
    icon: "🐟",
    color: "from-blue-500 to-blue-600",
    triggered: false,
    impact: "Triggered by coral loss",
  },
  {
    id: "5",
    name: "Food Crisis",
    description: "3 billion+ depend on marine protein",
    icon: "🍽️",
    color: "from-amber-500 to-amber-600",
    triggered: false,
    impact: "Triggered by fish collapse",
  },
  {
    id: "6",
    name: "Permafrost Melt",
    description: "Ancient carbon releases into atmosphere",
    icon: "🧊",
    color: "from-slate-400 to-slate-500",
    triggered: false,
    impact: "Triggered by rising CO₂",
  },
  {
    id: "7",
    name: "Methane Release",
    description: "Positive feedback loop accelerates",
    icon: "⚡",
    color: "from-yellow-500 to-yellow-600",
    triggered: false,
    impact: "Triggered by permafrost melt",
  },
  {
    id: "8",
    name: "Tipping Point",
    description: "Climate becomes self-reinforcing",
    icon: "💥",
    color: "from-red-600 to-red-700",
    triggered: false,
    impact: "Inevitable if dominoes continue",
  },
]

export function DominoSystem() {
  const [triggeredDominoes, setTriggeredDominoes] = useState<Set<string>>(new Set(["1"]))
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const cascade = () => {
      setTriggeredDominoes((prev) => {
        const next = new Set(prev)

        // CO₂ triggers acidification and permafrost
        if (next.has("1")) {
          next.add("2")
          next.add("6")
        }

        // Acidification triggers coral
        if (next.has("2")) {
          next.add("3")
        }

        // Coral triggers fish collapse
        if (next.has("3")) {
          next.add("4")
        }

        // Fish collapse triggers food crisis
        if (next.has("4")) {
          next.add("5")
        }

        // Permafrost triggers methane
        if (next.has("6")) {
          next.add("7")
        }

        // Multiple triggers lead to tipping point
        if (next.has("5") && next.has("7")) {
          next.add("8")
        }

        return next
      })

      setAnimationPhase((p) => p + 1)
    }

    if (animationPhase < 8) {
      const timer = setTimeout(cascade, 1200)
      return () => clearTimeout(timer)
    }
  }, [animationPhase])

  const resetCascade = () => {
    setTriggeredDominoes(new Set(["1"]))
    setAnimationPhase(0)
  }

  return (
    <div className="space-y-12">
      {/* Reset Button */}
      <div className="flex justify-end">
        <button
          onClick={resetCascade}
          className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
        >
          Reset Cascade
        </button>
      </div>

      {/* Cascade Visualization */}
      <div className="space-y-6">
        {/* First Trigger */}
        <div className="flex flex-col items-center">
          <DominoCard domino={dominoes[0]} isTriggered={triggeredDominoes.has("1")} index={0} />
          <div className="h-8 w-1 bg-gradient-to-b from-primary/50 to-transparent mt-4"></div>
        </div>

        {/* Branches from CO₂ */}
        <div className="grid grid-cols-2 gap-8 mx-auto max-w-2xl">
          {/* Left branch: Acidification path */}
          <div className="flex flex-col items-center">
            <CascadeFlow isActive={triggeredDominoes.has("2")} direction="left" />
            <DominoCard domino={dominoes[1]} isTriggered={triggeredDominoes.has("2")} index={1} />

            <div className="h-6 w-1 bg-gradient-to-b from-cyan-500/50 to-transparent mt-4"></div>

            <DominoCard domino={dominoes[2]} isTriggered={triggeredDominoes.has("3")} index={2} />

            <div className="h-6 w-1 bg-gradient-to-b from-orange-500/50 to-transparent mt-4"></div>

            <DominoCard domino={dominoes[3]} isTriggered={triggeredDominoes.has("4")} index={3} />

            <div className="h-6 w-1 bg-gradient-to-b from-blue-500/50 to-transparent mt-4"></div>

            <DominoCard domino={dominoes[4]} isTriggered={triggeredDominoes.has("5")} index={4} />
          </div>

          {/* Right branch: Permafrost path */}
          <div className="flex flex-col items-center">
            <CascadeFlow isActive={triggeredDominoes.has("6")} direction="right" />
            <DominoCard domino={dominoes[5]} isTriggered={triggeredDominoes.has("6")} index={5} />

            <div className="h-6 w-1 bg-gradient-to-b from-slate-500/50 to-transparent mt-4"></div>

            <DominoCard domino={dominoes[6]} isTriggered={triggeredDominoes.has("7")} index={6} />
          </div>
        </div>

        {/* Converge to tipping point */}
        <div className="flex flex-col items-center mx-auto">
          <div className="text-center mb-4 text-sm text-muted-foreground">Both paths merge</div>
          <DominoCard domino={dominoes[7]} isTriggered={triggeredDominoes.has("8")} index={7} isPrimary />
        </div>
      </div>

      {/* Impact Summary */}
      <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-foreground mb-4">The Chain Reaction</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Primary Impact</h4>
            <p className="text-sm text-muted-foreground">
              Rising CO₂ levels trigger two parallel mechanisms of destruction: ocean acidification and permafrost
              collapse. Both amplify each other.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Secondary Collapse</h4>
            <p className="text-sm text-muted-foreground">
              Ocean systems die first, triggering food crises. Meanwhile, methane feedback loops accelerate warming
              beyond control.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Point of No Return</h4>
            <p className="text-sm text-muted-foreground">
              When food systems fail AND climate feedback loops amplify, we cross irreversible tipping points. Recovery
              becomes impossible.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Why It Matters</h4>
            <p className="text-sm text-muted-foreground">
              We have a narrow window to prevent this cascade. Each domino knocked over makes the rest fall faster.
              Prevention is cheaper than adaptation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
