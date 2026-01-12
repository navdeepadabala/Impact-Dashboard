"use client"

import { useState } from "react"
import { LocationSearch } from "./location-search"
import { LocalImpactReport } from "./local-impact-report"
import { RegionalComparison } from "./regional-comparison"

interface LocationData {
  region: string
  country: string
  riskLevel: "critical" | "high" | "moderate" | "low"
}

export function LocalImpactEngine() {
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleLocationSelect = (location: LocationData) => {
    setIsSearching(true)
    setTimeout(() => {
      setSelectedLocation(location)
      setIsSearching(false)
    }, 600)
  }

  return (
    <div className="space-y-12">
      {!selectedLocation ? (
        <>
          <LocationSearch onSelect={handleLocationSelect} isSearching={isSearching} />

          {/* Featured Regions */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Featured Regions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { region: "Southeast Asia", country: "Bangladesh", risk: "critical" },
                { region: "Pacific Islands", country: "Kiribati", risk: "critical" },
                { region: "Amazon Basin", country: "Brazil", risk: "high" },
                { region: "Arctic", country: "Alaska", risk: "high" },
              ].map((loc) => (
                <button
                  key={loc.region}
                  onClick={() =>
                    handleLocationSelect({
                      region: loc.region,
                      country: loc.country,
                      riskLevel: loc.risk as "critical" | "high",
                    })
                  }
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-all group"
                >
                  <p className="text-sm text-muted-foreground mb-2">{loc.country}</p>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {loc.region}
                  </h3>
                  <div className="mt-3 inline-block">
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded ${
                        loc.risk === "critical"
                          ? "bg-destructive/20 text-destructive"
                          : "bg-orange-500/20 text-orange-400"
                      }`}
                    >
                      {loc.risk.toUpperCase()} RISK
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => setSelectedLocation(null)}
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            ← Change Location
          </button>
          <LocalImpactReport location={selectedLocation} />
          <RegionalComparison location={selectedLocation} />
        </>
      )}
    </div>
  )
}
