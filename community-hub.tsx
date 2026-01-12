"use client"

import { useState } from "react"

export function CommunityHub() {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null)

  const communityFeatures = [
    {
      title: "Find Local Groups",
      description: "Connect with environmental organizations in your area",
      icon: "🗺️",
      stats: "2,847 active groups",
    },
    {
      title: "Join Campaigns",
      description: "Participate in coordinated action campaigns",
      icon: "🎯",
      stats: "142 ongoing campaigns",
    },
    {
      title: "Share Resources",
      description: "Learn from others' experiences and expertise",
      icon: "📚",
      stats: "18,392 resources",
    },
    {
      title: "Organize Events",
      description: "Host workshops, cleanups, and awareness events",
      icon: "📅",
      stats: "1,247 events this month",
    },
  ]

  const handleExplore = (title: string) => {
    alert(`Exploring: ${title}\nIn a full app, this would open a detailed page with more information.`)
  }

  const handleJoinGroup = (groupName: string) => {
    setSelectedGroup(selectedGroup === groupName ? null : groupName)
    alert(`You've joined: ${groupName}!\nWelcome to the community!`)
  }

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {communityFeatures.map((feature) => (
          <div
            key={feature.title}
            className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all group"
          >
            <span className="text-4xl mb-4 block">{feature.icon}</span>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
            <p className="text-muted-foreground mb-6">{feature.description}</p>
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleExplore(feature.title)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Explore
              </button>
              <span className="text-xs text-muted-foreground font-semibold">{feature.stats}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Community Spotlight */}
      <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-foreground mb-8">Community Spotlight</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Bangladesh Climate Alliance",
              members: "12,000+",
              impact: "Protected 50,000 acres of mangrove",
              location: "Southeast Asia",
            },
            {
              name: "Pacific Islands Rising",
              members: "8,500+",
              impact: "Achieved climate recognition at COP27",
              location: "Pacific",
            },
            {
              name: "Amazon Defenders Network",
              members: "15,000+",
              impact: "Secured 2M acres of forest protection",
              location: "South America",
            },
          ].map((group) => (
            <div key={group.name} className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-bold text-foreground mb-2">{group.name}</h4>
              <p className="text-xs text-muted-foreground mb-4">{group.location}</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Active Members</p>
                  <p className="text-lg font-bold text-primary">{group.members}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Impact</p>
                  <p className="text-sm text-foreground">{group.impact}</p>
                </div>
              </div>
              <button
                onClick={() => handleJoinGroup(group.name)}
                className={`w-full mt-4 px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                  selectedGroup === group.name
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-primary text-primary hover:bg-primary/10"
                }`}
              >
                {selectedGroup === group.name ? "Joined!" : "Join Group"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
