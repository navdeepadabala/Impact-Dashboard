"use client"

import { useState } from "react"
import { TimelineCard } from "./timeline-card"
import { ImpactComparison } from "./impact-comparison"

type TimelineOption = "current" | "5-years" | "10-years" | "25-years"

interface TimelineState {
  temperature: number
  seaLevel: number
  forestCoverage: number
  species: number
  population: number
}

const timelines: Record<TimelineOption, { label: string; year: string; state: TimelineState }> = {
  current: {
    label: "Today",
    year: "2025",
    state: {
      temperature: 1.35,
      seaLevel: 20,
      forestCoverage: 31,
      species: 8000000,
      population: 8100000000,
    },
  },
  "5-years": {
    label: "In 5 Years",
    year: "2030",
    state: {
      temperature: 1.52,
      seaLevel: 23,
      forestCoverage: 29,
      species: 7850000,
      population: 8500000000,
    },
  },
  "10-years": {
    label: "In 10 Years",
    year: "2035",
    state: {
      temperature: 1.75,
      seaLevel: 27,
      forestCoverage: 26,
      species: 7500000,
      population: 8900000000,
    },
  },
  "25-years": {
    label: "In 25 Years",
    year: "2050",
    state: {
      temperature: 2.4,
      seaLevel: 42,
      forestCoverage: 20,
      species: 6500000,
      population: 9700000000,
    },
  },
}

export function FutureSimulator() {
  const [selectedTimeline, setSelectedTimeline] = useState<TimelineOption>("current")
  const current = timelines.current.state
  const selected = timelines[selectedTimeline].state

  return (
    <div className="space-y-12">
      {/* Timeline Selector */}
      <div className="flex flex-wrap gap-3">
        {(Object.entries(timelines) as [TimelineOption, typeof timelines.current][]).map(([key, timeline]) => (
          <button
            key={key}
            onClick={() => setSelectedTimeline(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedTimeline === key
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                : "bg-card border border-border text-foreground hover:border-primary/50"
            }`}
          >
            {timeline.label}
            <span className="block text-xs mt-1">{timeline.year}</span>
          </button>
        ))}
      </div>

      {/* Main Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current State */}
        <TimelineCard label="Current State" year="2025" state={current} variant="secondary" />

        {/* Selected Future State */}
        <TimelineCard
          label={timelines[selectedTimeline].label}
          year={timelines[selectedTimeline].year}
          state={selected}
          variant={selectedTimeline === "current" ? "secondary" : "primary"}
        />
      </div>

      {/* Impact Comparison */}
      {selectedTimeline !== "current" && (
        <ImpactComparison current={current} future={selected} timelineLabel={timelines[selectedTimeline].label} />
      )}

      {/* Scenario Description */}
      <div className="bg-card border border-border rounded-lg p-8">
        <h3 className="text-2xl font-bold text-foreground mb-4">What Changes?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedTimeline === "current" && (
            <p className="text-muted-foreground">
              Select a future year to see the projected impact. These projections are based on current climate trends
              and biodiversity loss rates.
            </p>
          )}
          {selectedTimeline === "5-years" && (
            <>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Climate Impact</h4>
                <p className="text-sm text-muted-foreground">
                  We cross 1.5°C threshold. Extreme weather events increase by 40%. First climate migration waves begin
                  in low-lying island nations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Biodiversity</h4>
                <p className="text-sm text-muted-foreground">
                  150,000+ species face extinction. Coral reefs lose another 50% of coverage. Insect populations
                  collapse further.
                </p>
              </div>
            </>
          )}
          {selectedTimeline === "10-years" && (
            <>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Climate Crisis</h4>
                <p className="text-sm text-muted-foreground">
                  Arctic summer sea ice becomes seasonal. Major cities face permanent flooding. Agricultural zones shift
                  dramatically, threatening global food security.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Human Impact</h4>
                <p className="text-sm text-muted-foreground">
                  500+ million climate refugees. Water scarcity affects 4 billion people. Economic damages exceed $1
                  trillion annually.
                </p>
              </div>
            </>
          )}
          {selectedTimeline === "25-years" && (
            <>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Tipping Points</h4>
                <p className="text-sm text-muted-foreground">
                  Multiple irreversible changes triggered. Amazon rainforest partially converted to savanna. Greenland
                  ice sheet melting accelerates dramatically.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Transformation</h4>
                <p className="text-sm text-muted-foreground">
                  2 billion+ climate refugees. Entire ecosystems collapse. Societal adaptation becomes existential
                  challenge. Many species permanently extinct.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
