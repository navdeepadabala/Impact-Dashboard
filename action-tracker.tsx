"use client"

import { useState } from "react"

export function ActionTracker() {
  const [completedActions, setCompletedActions] = useState<string[]>([
    "Switch to Renewable Energy",
    "Adopt Plant-Based Diet",
  ])

  const allActions = [
    "Switch to Renewable Energy",
    "Adopt Plant-Based Diet",
    "Reduce Consumption",
    "Divest From Fossil Fuels",
    "Start a Community Garden",
    "Launch Environmental Group",
    "Organize Climate Education",
    "Vote for Climate Leaders",
  ]

  const toggleAction = (action: string) => {
    setCompletedActions((prev) => (prev.includes(action) ? prev.filter((a) => a !== action) : [...prev, action]))
  }

  const handleFindCommunityLeaders = () => {
    alert(
      "Finding community leaders near you...\nIn a full app, this would open a location-based search for environmental leaders in your area.",
    )
  }

  const carbonSaved = completedActions.length * 1.5
  const peopleInfluenced = completedActions.length * 12

  return (
    <div className="space-y-12">
      {/* Impact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-8 text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Carbon Offset</p>
          <p className="text-4xl font-bold text-emerald-400">{carbonSaved.toFixed(1)}</p>
          <p className="text-sm text-muted-foreground mt-2">tons CO₂/year</p>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-8 text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">People Influenced</p>
          <p className="text-4xl font-bold text-blue-400">{peopleInfluenced}</p>
          <p className="text-sm text-muted-foreground mt-2">through your actions</p>
        </div>
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-8 text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Progress</p>
          <p className="text-4xl font-bold text-primary">
            {Math.round((completedActions.length / allActions.length) * 100)}%
          </p>
          <p className="text-sm text-muted-foreground mt-2">actions completed</p>
        </div>
      </div>

      {/* Action Checklist */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Your Action Checklist</h2>
        <div className="space-y-3">
          {allActions.map((action) => {
            const isCompleted = completedActions.includes(action)
            return (
              <button
                key={action}
                onClick={() => toggleAction(action)}
                className={`w-full flex items-center gap-4 p-4 rounded-lg border transition-all text-left ${
                  isCompleted
                    ? "bg-emerald-500/10 border-emerald-500/30"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                    isCompleted ? "bg-emerald-500 border-emerald-500" : "border-muted-foreground"
                  }`}
                >
                  {isCompleted && <span className="text-white font-bold">✓</span>}
                </div>
                <span className={`${isCompleted ? "text-emerald-400 line-through" : "text-foreground"}`}>{action}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-foreground mb-4">What's Your Next Step?</h3>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            You've completed {completedActions.length} action{completedActions.length !== 1 ? "s" : ""}. Consider
            scaling your impact:
          </p>
          <ul className="space-y-2 text-foreground">
            <li>• Join a local environmental organization to multiply your effort</li>
            <li>• Become an advocate—share your journey and inspire others</li>
            <li>• Push for systemic change in your workplace or community</li>
            <li>• Mentor others taking similar actions</li>
          </ul>
          <button
            onClick={handleFindCommunityLeaders}
            className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Find Community Leaders Near You
          </button>
        </div>
      </div>
    </div>
  )
}
