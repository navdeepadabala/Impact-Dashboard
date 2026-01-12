"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export function Header() {
  const router = useRouter()

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">E</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Impact Dashboard</h1>
        </Link>
        <nav className="flex gap-6 items-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </Link>
          <Link href="/simulator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Simulator
          </Link>
          <Link href="/dominos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Cascade
          </Link>
          <Link href="/local-impact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Local Impact
          </Link>
          <button
            onClick={() => router.push("/actions")}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Take Action
          </button>
        </nav>
      </div>
    </header>
  )
}
