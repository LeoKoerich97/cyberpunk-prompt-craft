
import { ReactNode } from 'react';

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const GlitchText = ({ children, className = '', intensity = 'medium' }: GlitchTextProps) => {
  const getIntensityClasses = () => {
    switch (intensity) {
      case 'low':
        return 'opacity-30';
      case 'medium':
        return 'opacity-50';
      case 'high':
        return 'opacity-70';
      default:
        return 'opacity-50';
    }
  };

  const intensityClass = getIntensityClasses();

  return (
    <div className={`relative ${className}`}>
      <span className="relative z-10">{children}</span>
      <span 
        className={`absolute top-0 left-0 text-red-500 ${intensityClass} animate-glitch pointer-events-none`} 
        style={{ animationDelay: '0.1s', animationDuration: '2s' }}
        aria-hidden="true"
      >
        {children}
      </span>
      <span 
        className={`absolute top-0 left-0 text-blue-500 ${intensityClass} animate-glitch pointer-events-none`} 
        style={{ animationDelay: '0.3s', animationDuration: '2.5s' }}
        aria-hidden="true"
      >
        {children}
      </span>
    </div>
  );
};

export default GlitchText;
