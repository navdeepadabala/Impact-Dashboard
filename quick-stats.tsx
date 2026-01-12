export function QuickStats() {
  const stats = [
    { label: "Years Until Critical Point", value: "7", color: "text-red-400" },
    { label: "Land Destroyed (Daily)", value: "7.4M", color: "text-orange-400" },
    { label: "Species Extinct (Monthly)", value: "137", color: "text-amber-400" },
    { label: "Communities at Risk", value: "2.3B", color: "text-cyan-400" },
  ]

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 mb-12">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-card border border-border rounded-lg p-6 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{stat.label}</p>
          <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </section>
  )
}
