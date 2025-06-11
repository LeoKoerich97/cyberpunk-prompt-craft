
import HolographicCard from '../TechEffects/HolographicCard';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  highlight: string;
  variant: 'neon' | 'blue' | 'purple' | 'pink';
}

const ServiceCard = ({ icon, title, description, highlight, variant }: ServiceCardProps) => {
  const getColorClasses = () => {
    switch (variant) {
      case 'neon':
        return {
          title: 'text-cyber-neon',
          badge: 'bg-cyber-neon/20 text-cyber-neon border-cyber-neon/30'
        };
      case 'blue':
        return {
          title: 'text-cyber-blue',
          badge: 'bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30'
        };
      case 'purple':
        return {
          title: 'text-cyber-purple',
          badge: 'bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30'
        };
      case 'pink':
        return {
          title: 'text-cyber-pink',
          badge: 'bg-cyber-pink/20 text-cyber-pink border-cyber-pink/30'
        };
      default:
        return {
          title: 'text-cyber-neon',
          badge: 'bg-cyber-neon/20 text-cyber-neon border-cyber-neon/30'
        };
    }
  };

  const colors = getColorClasses();

  return (
    <HolographicCard>
      <div className="flex items-start space-x-6">
        <div className="text-4xl bg-gradient-to-r from-cyber-neon/10 to-cyber-blue/10 p-4 rounded-full flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-cyber-neon/20 group-hover:to-cyber-blue/20 transition-colors shadow-neon">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className={`font-vt323 ${colors.title} text-2xl holographic-text`}>{title}</h3>
            <span className={`${colors.badge} px-3 py-1 rounded-full text-xs font-semibold border neon-glow`}>
              {highlight}
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">{description}</p>
        </div>
      </div>
    </HolographicCard>
  );
};

export default ServiceCard;
