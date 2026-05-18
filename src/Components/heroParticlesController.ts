import { tsParticles } from '@tsparticles/engine';
import { loadAmbientPreset } from '@tsparticles/preset-ambient';
import type { Container } from '@tsparticles/engine';

let container: Container | undefined;

export async function start(): Promise<void> {
  await loadAmbientPreset(tsParticles);

  container?.destroy();

  container = await tsParticles.load({
    id: 'tsparticles',
    options: {
      preset: 'ambient',
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      background: {
        color: {
          value: 'transparent',
        },
      },
      particles: {
        color: {
          value: ['#1d4ed8', '#2563eb', '#38bdf8', '#93c5fd'],
        },
        links: {
          color: '#60a5fa',
        },
        move: {
          speed: 1.1,
        },
        opacity: {
          value: 0.45,
        },
      },
    },
  });
}

export function stop(): void {
  container?.pause();
}

export function resume(): void {
  container?.play();
}

export function destroy(): void {
  container?.destroy();
  container = undefined;
}
