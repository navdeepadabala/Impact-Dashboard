interface CascadeFlowProps {
  isActive: boolean
  direction: "left" | "right"
}

export function CascadeFlow({ isActive, direction }: CascadeFlowProps) {
  return (
    <div className="h-12 flex items-center justify-center mb-2">
      <svg
        width="100"
        height="48"
        viewBox="0 0 100 48"
        className={`transition-all duration-500 ${isActive ? "opacity-100" : "opacity-20"}`}
      >
        <path
          d={direction === "left" ? "M 50,0 Q 25,24 10,48" : "M 50,0 Q 75,24 90,48"}
          stroke={isActive ? "#f97316" : "#64748b"}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        {isActive && (
          <circle cx={direction === "left" ? 25 : 75} cy="24" r="4" fill="#f97316" opacity="0.5">
            <animate attributeName="r" values="4;8;4" dur="1s" repeatCount="indefinite" />
          </circle>
        )}
      </svg>
    </div>
  )
}
