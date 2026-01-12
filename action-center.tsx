"use client"

import { useState } from "react"
import { ActionCategory } from "./action-category"
import { CommunityHub } from "./community-hub"
import { ActionTracker } from "./action-tracker"

type ActionTab = "solutions" | "community" | "tracker"

export function ActionCenter() {
  const [activeTab, setActiveTab] = useState<ActionTab>("solutions")

  const actionCategories = [
    {
      id: "personal",
      name: "Personal Actions",
      description: "Changes you can make today",
      icon: "👤",
      color: "from-blue-500 to-blue-600",
      actions: [
        {
          title: "Switch to Renewable Energy",
          impact: "Reduce carbon footprint by 50%",
          difficulty: "Medium",
          timeline: "3-6 months",
          cost: "$5,000-15,000",
          description: "Install solar panels or switch to green energy provider",
        },
        {
          title: "Adopt Plant-Based Diet",
          impact: "Save 1.5 tons CO₂/year",
          difficulty: "Easy",
          timeline: "Immediate",
          cost: "Varies",
          description: "Reduce or eliminate meat consumption",
        },
        {
          title: "Reduce Consumption",
          impact: "Cut waste by 40%",
          difficulty: "Easy",
          timeline: "Immediate",
          cost: "Free",
          description: "Buy less, choose durable goods, repair instead of replace",
        },
        {
          title: "Divest From Fossil Fuels",
          impact: "Signal market shift",
          difficulty: "Medium",
          timeline: "1 month",
          cost: "Free",
          description: "Move investments away from oil, gas, coal companies",
        },
      ],
    },
    {
      id: "community",
      name: "Community Actions",
      description: "Amplify impact through local organizing",
      icon: "👥",
      color: "from-emerald-500 to-emerald-600",
      actions: [
        {
          title: "Start a Community Garden",
          impact: "Local food + carbon sink",
          difficulty: "Medium",
          timeline: "3 months",
          cost: "$500-2,000",
          description: "Organize neighbors to grow food and increase green space",
        },
        {
          title: "Launch Environmental Group",
          impact: "Organize 50+ people",
          difficulty: "Medium",
          timeline: "Ongoing",
          cost: "Free",
          description: "Build a community advocacy organization for climate action",
        },
        {
          title: "Organize Climate Education",
          impact: "Educate 500+ people",
          difficulty: "Easy",
          timeline: "Monthly",
          cost: "Free",
          description: "Host workshops, screenings, and discussions in your community",
        },
        {
          title: "Push for Local Renewable Energy",
          impact: "City-wide emissions reduction",
          difficulty: "Hard",
          timeline: "1-3 years",
          cost: "Free",
          description: "Campaign for municipal renewable energy commitments",
        },
      ],
    },
    {
      id: "systemic",
      name: "Systemic Change",
      description: "Reshape policies and institutions",
      icon: "🌍",
      color: "from-orange-500 to-orange-600",
      actions: [
        {
          title: "Vote for Climate Leaders",
          impact: "Policy transformation",
          difficulty: "Easy",
          timeline: "Immediate",
          cost: "Free",
          description: "Support candidates with strong climate records and plans",
        },
        {
          title: "Advocate for Carbon Tax",
          impact: "Incentivize emissions reduction",
          difficulty: "Hard",
          timeline: "Ongoing",
          cost: "Free",
          description: "Push policymakers to price carbon and reduce fossil fuel subsidies",
        },
        {
          title: "Demand Corporate Accountability",
          impact: "Company emissions cuts",
          difficulty: "Medium",
          timeline: "Ongoing",
          cost: "Free",
          description: "Organize shareholder campaigns and consumer boycotts",
        },
        {
          title: "Join International Movements",
          impact: "Global policy pressure",
          difficulty: "Easy",
          timeline: "Immediate",
          cost: "Free",
          description: "Connect with global climate movement for leverage",
        },
      ],
    },
  ]

  return (
    <div className="space-y-12">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-3 border-b border-border pb-6">
        {[
          { id: "solutions", label: "Solutions" },
          { id: "community", label: "Community Hub" },
          { id: "tracker", label: "My Impact" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as ActionTab)}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === tab.id
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "solutions" && (
        <div className="space-y-12">
          {actionCategories.map((category) => (
            <ActionCategory key={category.id} category={category} />
          ))}

          {/* Urgency Message */}
          <div className="bg-gradient-to-r from-destructive/20 via-orange-500/20 to-destructive/20 border border-destructive/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Why Act Now?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">TIPPING POINTS</p>
                <p className="text-foreground">
                  We have 7-10 years to prevent crossing irreversible climate thresholds. After that, adaptation becomes
                  impossible.
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">EXPONENTIAL GROWTH</p>
                <p className="text-foreground">
                  Each year of inaction makes future change exponentially more difficult. Action today prevents crises
                  tomorrow.
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">MOMENTUM</p>
                <p className="text-foreground">
                  Movements grow when more people join. Your action recruits others, creating exponential impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "community" && <CommunityHub />}

      {activeTab === "tracker" && <ActionTracker />}
    </div>
  )
}
