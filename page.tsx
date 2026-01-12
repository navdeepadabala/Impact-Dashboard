import { Header } from "@/components/header"
import { DestructionCounter } from "@/components/destruction-counter"
import { AlertBanner } from "@/components/alert-banner"
import { QuickStats } from "@/components/quick-stats"
import { ActionCallout } from "@/components/action-callout"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <AlertBanner />
        <DestructionCounter />
        <QuickStats />
        <ActionCallout />
      </main>
    </div>
  )
}
