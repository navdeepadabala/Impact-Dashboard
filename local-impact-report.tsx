interface LocationData {
  region: string
  country: string
  riskLevel: "critical" | "high" | "moderate" | "low"
}

interface LocalImpactReportProps {
  location: LocationData
}

const impactData: Record<
  string,
  {
    threats: Array<{ name: string; severity: number; description: string }>
    population: string
    timeline: string
    actions: string[]
  }
> = {
  "Southeast Asia": {
    threats: [
      { name: "Sea Level Rise", severity: 95, description: "Mekong Delta faces 3ft rise by 2050" },
      { name: "Monsoon Intensity", severity: 85, description: "Flooding patterns become unpredictable" },
      { name: "Saltwater Intrusion", severity: 90, description: "Farmland permanently damaged" },
      { name: "Typhoon Strength", severity: 80, description: "Storm intensity increases 15-20%" },
    ],
    population: "600M+ directly at risk",
    timeline: "Critical within 15 years",
    actions: [
      "Support mangrove restoration projects",
      "Advocate for coastal protection infrastructure",
      "Promote climate-resilient agriculture",
      "Join regional climate networks",
    ],
  },
  "Pacific Islands": {
    threats: [
      { name: "Existential Flooding", severity: 100, description: "Nations disappear by 2070" },
      { name: "Freshwater Loss", severity: 95, description: "Drinking water contaminated" },
      { name: "Coral Extinction", severity: 98, description: "Food source eliminates" },
      { name: "Economic Collapse", severity: 90, description: "Tourism and fishing industries fail" },
    ],
    population: "500K+ facing displacement",
    timeline: "Critical within 20 years",
    actions: [
      "Support island climate advocacy",
      "Promote debt-for-climate swaps",
      "Invest in relocation programs",
      "Amplify island voices at COP",
    ],
  },
  "Amazon Basin": {
    threats: [
      { name: "Forest Dieback", severity: 85, description: "Rainforest reaches tipping point" },
      { name: "Species Loss", severity: 90, description: "10% of Earth's species at risk" },
      { name: "Weather Regulation Loss", severity: 80, description: "Regional rainfall decreases 20%" },
      { name: "Carbon Release", severity: 95, description: "Stored carbon enters atmosphere" },
    ],
    population: "1M+ Indigenous peoples",
    timeline: "Critical within 10 years",
    actions: [
      "Support Indigenous land rights",
      "Boycott deforestation-linked products",
      "Fund rainforest protection",
      "Demand corporate accountability",
    ],
  },
  Arctic: {
    threats: [
      { name: "Ice Loss", severity: 95, description: "Summer sea ice disappears" },
      { name: "Permafrost Collapse", severity: 88, description: "Communities become uninhabitable" },
      { name: "Wildlife Extinction", severity: 85, description: "Polar bears, walrus threatened" },
      { name: "Methane Release", severity: 92, description: "Accelerates global warming" },
    ],
    population: "4M+ Arctic inhabitants",
    timeline: "Critical within 5 years",
    actions: [
      "Support Indigenous Arctic communities",
      "Push for carbon-neutral energy",
      "Fund Arctic research",
      "Stop oil & gas extraction",
    ],
  },
}

export function LocalImpactReport({ location }: LocalImpactReportProps) {
  const data = impactData[location.region] || impactData["Southeast Asia"]
  const riskColors = {
    critical: "bg-destructive/20 text-destructive border-destructive/30",
    high: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    moderate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    low: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className={`border rounded-lg p-8 ${riskColors[location.riskLevel]}`}>
        <h2 className="text-3xl font-bold mb-2">{location.region}</h2>
        <p className="text-sm opacity-90 mb-4">{location.country}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold uppercase tracking-wider">Risk Level:</span>
          <span className="text-lg font-bold">{location.riskLevel.toUpperCase()}</span>
        </div>
        <p className="text-sm mt-4 opacity-90">{data.population}</p>
        <p className="text-sm font-semibold mt-2">{data.timeline}</p>
      </div>

      {/* Threats */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6">Primary Threats</h3>
        <div className="space-y-4">
          {data.threats.map((threat) => (
            <div key={threat.name} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-foreground">{threat.name}</h4>
                <span className="text-xs font-bold text-muted-foreground">{threat.severity}%</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{threat.description}</p>
              {/* Severity bar */}
              <div className="bg-background rounded h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-destructive transition-all"
                  style={{ width: `${threat.severity}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actionable Solutions */}
      <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">What You Can Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.actions.map((action) => (
            <div key={action} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-secondary-foreground">✓</span>
              </div>
              <p className="text-foreground">{action}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
