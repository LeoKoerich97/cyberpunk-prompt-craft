
import { ReactNode } from 'react';

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
}

const HolographicCard = ({ children, className = '' }: HolographicCardProps) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-neon via-cyber-blue to-cyber-purple rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300 animate-holographic" />
      <div className="relative bg-cyber-card border border-gray-700 rounded-lg p-8 hover:border-transparent transition-all duration-300 hover:shadow-holographic transform hover:-translate-y-2 hover:scale-105">
        {children}
      </div>
    </div>
  );
};

export default HolographicCard;
