
const CircuitPattern = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-10">
      <svg className="w-full h-full" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M20,20 L80,20 L80,40 L60,40 L60,60 L40,60 L40,80 L20,80 Z"
              fill="none"
              stroke="#7FFF00"
              strokeWidth="1"
              strokeDasharray="5,5"
              className="animate-circuit-flow"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};

export default CircuitPattern;
