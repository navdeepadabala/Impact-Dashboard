"use client"

import { useRouter } from "next/navigation"

export function ActionCallout() {
  const router = useRouter()

  return (
    <section className="bg-gradient-to-br from-primary/20 via-background to-secondary/20 border border-primary/30 rounded-lg p-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The time to act is now</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Every action counts. From individual choices to systemic change, discover how you and your community can reverse
        these trends.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => router.push("/actions")}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
        >
          Explore Solutions
        </button>
        <button
          onClick={() => router.push("/actions")}
          className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all"
        >
          Join Community
        </button>
      </div>
    </section>
  )
}
