
import { useEffect, useState } from 'react';

const MatrixRain = () => {
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const characters = '01';
    const columns = Math.floor(window.innerWidth / 20);
    const newDrops = [];

    for (let i = 0; i < columns; i++) {
      newDrops.push({
        id: i,
        left: i * 20,
        delay: Math.random() * 5
      });
    }
    setDrops(newDrops);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute text-cyber-neon font-vt323 text-sm animate-matrix-rain"
          style={{
            left: `${drop.left}px`,
            animationDelay: `${drop.delay}s`
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="leading-tight">
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixRain;
