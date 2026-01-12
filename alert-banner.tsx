export function AlertBanner() {
  return (
    <div className="bg-gradient-to-r from-destructive/20 to-destructive/10 border border-destructive/30 rounded-lg p-6 mb-12 flex items-start gap-4">
      <div className="text-2xl">⚠️</div>
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Critical Environmental Alert</h3>
        <p className="text-sm text-muted-foreground">
          Current atmospheric CO₂ levels have exceeded 425 ppm. Scientists estimate we have less than 10 years to take
          meaningful action to limit warming to 1.5°C.
        </p>
      </div>
    </div>
  )
}
