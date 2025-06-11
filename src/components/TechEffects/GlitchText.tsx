
import { ReactNode } from 'react';

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
}

const GlitchText = ({ children, className = '' }: GlitchTextProps) => {
  return (
    <div className={`relative ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute top-0 left-0 text-red-500 opacity-80 animate-glitch" style={{ animationDelay: '0.1s' }}>
        {children}
      </span>
      <span className="absolute top-0 left-0 text-blue-500 opacity-80 animate-glitch" style={{ animationDelay: '0.2s' }}>
        {children}
      </span>
    </div>
  );
};

export default GlitchText;
