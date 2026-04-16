interface WaveDividerProps {
  fill: string;       // color of the next section
  className?: string;
}

export default function WaveDivider({ fill, className = "" }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-14"
        aria-hidden="true"
      >
        <path
          d="M0,28 C180,28 180,50 360,50 C540,50 540,28 720,28 C900,28 900,6 1080,6 C1260,6 1260,28 1440,28 L1440,56 L0,56 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
