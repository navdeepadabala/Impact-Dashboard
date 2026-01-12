"use client"

import { useState } from "react"

interface LocationSearchProps {
  onSelect: (location: { region: string; country: string; riskLevel: string }) => void
  isSearching: boolean
}

export function LocationSearch({ onSelect, isSearching }: LocationSearchProps) {
  const [input, setInput] = useState("")

  const locations = [
    { region: "Coastal California", country: "USA", risk: "high" },
    { region: "Great Barrier Reef", country: "Australia", risk: "critical" },
    { region: "Sub-Saharan Africa", country: "Kenya", risk: "high" },
    { region: "Southeast Asia", country: "Vietnam", risk: "critical" },
    { region: "Mediterranean", country: "Greece", risk: "high" },
    { region: "Mekong Delta", country: "Thailand", risk: "critical" },
    { region: "Canadian North", country: "Canada", risk: "high" },
    { region: "Himalayan Region", country: "Nepal", risk: "high" },
  ]

  const filtered = locations.filter(
    (loc) =>
      loc.region.toLowerCase().includes(input.toLowerCase()) || loc.country.toLowerCase().includes(input.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search by region or country..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-6 py-4 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
      </div>

      {input && (
        <div className="bg-card border border-border rounded-lg divide-y divide-border">
          {filtered.length > 0 ? (
            filtered.map((loc) => (
              <button
                key={`${loc.region}-${loc.country}`}
                onClick={() => onSelect(loc)}
                disabled={isSearching}
                className="w-full p-4 text-left hover:bg-background transition-colors disabled:opacity-50 flex items-center justify-between group"
              >
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {loc.region}
                  </p>
                  <p className="text-sm text-muted-foreground">{loc.country}</p>
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded ${
                    loc.risk === "critical" ? "bg-destructive/20 text-destructive" : "bg-orange-500/20 text-orange-400"
                  }`}
                >
                  {loc.risk.toUpperCase()}
                </span>
              </button>
            ))
          ) : (
            <div className="p-4 text-center text-muted-foreground">No regions found</div>
          )}
        </div>
      )}
    </div>
  )
}
