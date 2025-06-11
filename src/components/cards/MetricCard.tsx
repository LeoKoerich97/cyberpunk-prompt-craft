
import { ReactNode } from 'react';
import HolographicCard from '../TechEffects/HolographicCard';
import AnimatedCounter from '../TechEffects/AnimatedCounter';

interface MetricCardProps {
  icon: ReactNode;
  number: number;
  suffix: string;
  label: string;
  sublabel: string;
  variant: 'neon' | 'blue' | 'purple' | 'pink';
}

const MetricCard = ({ icon, number, suffix, label, sublabel, variant }: MetricCardProps) => {
  const getColorClasses = () => {
    switch (variant) {
      case 'neon':
        return {
          text: 'text-cyber-neon',
          shadow: 'drop-shadow-neon'
        };
      case 'blue':
        return {
          text: 'text-cyber-blue',
          shadow: 'drop-shadow-neon-blue'
        };
      case 'purple':
        return {
          text: 'text-cyber-purple',
          shadow: 'drop-shadow-neon-purple'
        };
      case 'pink':
        return {
          text: 'text-cyber-pink',
          shadow: 'drop-shadow-neon-pink'
        };
      default:
        return {
          text: 'text-cyber-neon',
          shadow: 'drop-shadow-neon'
        };
    }
  };

  const colors = getColorClasses();

  return (
    <HolographicCard>
      <div className="text-center">
        <div className={`${colors.text} mb-3 flex justify-center`}>{icon}</div>
        <div className={`font-vt323 ${colors.text} text-4xl md:text-5xl mb-2 ${colors.shadow} holographic-text`}>
          <AnimatedCounter end={number} suffix={suffix} />
        </div>
        <div className="text-cyber-text font-semibold mb-1">{label}</div>
        <div className="text-gray-400 text-sm">{sublabel}</div>
      </div>
    </HolographicCard>
  );
};

export default MetricCard;
