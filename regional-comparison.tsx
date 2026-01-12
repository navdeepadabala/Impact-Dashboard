interface LocationData {
  region: string
  country: string
  riskLevel: "critical" | "high" | "moderate" | "low"
}

interface RegionalComparisonProps {
  location: LocationData
}

export function RegionalComparison({ location }: RegionalComparisonProps) {
  const comparisonData = {
    "Southeast Asia": {
      globalRank: "2nd Most At-Risk Region",
      affectedPopulation: "600 million+",
      economicImpact: "$3.5 trillion by 2050",
      ecosystemValue: "$2.1 trillion",
      timelineToCollapse: "15 years",
    },
    "Pacific Islands": {
      globalRank: "1st Most At-Risk Region",
      affectedPopulation: "500,000+",
      economicImpact: "100% GDP loss",
      ecosystemValue: "$50 billion",
      timelineToCollapse: "20 years",
    },
    "Amazon Basin": {
      globalRank: "3rd Most At-Risk Region",
      affectedPopulation: "1 million+ Indigenous",
      economicImpact: "$2.2 trillion",
      ecosystemValue: "$15+ trillion",
      timelineToCollapse: "10 years",
    },
    Arctic: {
      globalRank: "4th Most At-Risk Region",
      affectedPopulation: "4 million+",
      economicImpact: "$1 trillion",
      ecosystemValue: "$1.5 trillion",
      timelineToCollapse: "5 years",
    },
  }

  const comparison = comparisonData[location.region as keyof typeof comparisonData] || comparisonData["Southeast Asia"]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {Object.entries(comparison).map(([key, value]) => (
        <div key={key} className="bg-card border border-border rounded-lg p-6">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
            {key.replace(/([A-Z])/g, " $1").trim()}
          </p>
          <p className="text-lg font-bold text-foreground">{value}</p>
        </div>
      ))}
    </div>
  )
}
