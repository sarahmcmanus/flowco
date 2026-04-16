interface WaveDividerProps {
  fill?: string;
  gradient?: { from: string; to: string };
  className?: string;
  flip?: boolean;
}

export default function WaveDivider({
  fill,
  gradient,
  className = "",
  flip = false,
}: WaveDividerProps) {
  const hasGradient = !!gradient;
  const gradientId = hasGradient
    ? `waveGrad-${gradient.from.replace("#", "")}-${gradient.to.replace("#", "")}`
    : undefined;

  return (
    <div
      className={`w-full overflow-hidden leading-none ${className}`}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-14"
        aria-hidden="true"
      >
        {hasGradient && (
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradient.from} />
              <stop offset="100%" stopColor={gradient.to} />
            </linearGradient>
          </defs>
        )}
        <path
          d="M0,28 C180,28 180,50 360,50 C540,50 540,28 720,28 C900,28 900,6 1080,6 C1260,6 1260,28 1440,28 L1440,56 L0,56 Z"
          fill={hasGradient ? `url(#${gradientId})` : fill}
        />
      </svg>
    </div>
  );
}
