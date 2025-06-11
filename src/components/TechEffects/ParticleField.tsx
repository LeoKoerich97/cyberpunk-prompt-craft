
import { useEffect, useState } from 'react';

const ParticleField = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; size: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const colors = ['#7FFF00', '#00D9FF', '#B347D9', '#FF0080'];
    const newParticles = [];

    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-particle opacity-60"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 10px ${particle.color}`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
