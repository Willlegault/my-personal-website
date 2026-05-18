import React, { useEffect } from 'react';
import { start, destroy } from './heroParticlesController';

const HeroParticles: React.FC = () => {
  useEffect(() => {
    (async () => {
      await start();
    })();

    return () => {
      destroy();
    };
  }, []);

  return <div id="tsparticles" className="hero-particles" aria-hidden />;
};

export default HeroParticles;
