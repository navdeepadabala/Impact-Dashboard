"use client"

import { useState } from "react"

interface Action {
  title: string
  impact: string
  difficulty: string
  timeline: string
  cost: string
  description: string
}

interface ActionCategoryProps {
  category: {
    id: string
    name: string
    description: string
    icon: string
    color: string
    actions: Action[]
  }
}

export function ActionCategory({ category }: ActionCategoryProps) {
  const [expandedAction, setExpandedAction] = useState<string | null>(null)

  const difficultyColor = {
    Easy: "bg-emerald-500/20 text-emerald-400",
    Medium: "bg-orange-500/20 text-orange-400",
    Hard: "bg-destructive/20 text-destructive",
  }

  const handleLearnMore = (actionTitle: string) => {
    setExpandedAction(expandedAction === actionTitle ? null : actionTitle)
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{category.icon}</span>
          <h2 className="text-3xl font-bold text-foreground">{category.name}</h2>
        </div>
        <p className="text-lg text-muted-foreground">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {category.actions.map((action) => (
          <div
            key={action.title}
            className={`bg-gradient-to-br ${category.color} bg-opacity-10 border border-current border-opacity-20 rounded-lg p-6 hover:border-opacity-50 transition-all group`}
          >
            <div className="mb-4">
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {action.title}
              </h3>
              <p className="text-sm text-foreground font-semibold">{action.impact}</p>
            </div>

            <p className="text-sm text-muted-foreground mb-6">{action.description}</p>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-background rounded p-3">
                <p className="text-muted-foreground mb-1">Difficulty</p>
                <p className={`font-bold ${difficultyColor[action.difficulty as keyof typeof difficultyColor]}`}>
                  {action.difficulty}
                </p>
              </div>
              <div className="bg-background rounded p-3">
                <p className="text-muted-foreground mb-1">Timeline</p>
                <p className="font-bold text-foreground">{action.timeline}</p>
              </div>
              <div className="bg-background rounded p-3 col-span-2">
                <p className="text-muted-foreground mb-1">Estimated Cost</p>
                <p className="font-bold text-foreground">{action.cost}</p>
              </div>
            </div>

            <button
              onClick={() => handleLearnMore(action.title)}
              className="w-full mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-all group-hover:scale-105"
            >
              {expandedAction === action.title ? "Hide Details" : "Learn More"}
            </button>

            {expandedAction === action.title && (
              <div className="mt-4 pt-4 border-t border-current border-opacity-20">
                <p className="text-sm text-foreground mb-3">Start your journey with this action today!</p>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-primary/20 text-primary rounded text-sm font-semibold hover:bg-primary/30 transition-colors">
                    Get Started
                  </button>
                  <button className="flex-1 px-3 py-2 border border-primary text-primary rounded text-sm font-semibold hover:bg-primary/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
