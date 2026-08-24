import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import CoachAvatar from './CoachAvatar';

/** Design size of the avatar arena; it is not fluid, so we scale it to fit. */
const ARENA_W = 560;
const ARENA_H = 420;

/**
 * Wraps CoachAvatar so the fixed-size arena shrinks to fit narrow screens
 * instead of overflowing the page.
 */
const CoachAvatarStage: FC = () => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const fit = () => {
      const available = host.clientWidth;
      setScale(available >= ARENA_W ? 1 : Math.max(available / ARENA_W, 0.5));
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={hostRef} className="w-full overflow-hidden">
      <div
        className="mx-auto"
        style={{ width: ARENA_W * scale, height: (ARENA_H + 70) * scale }}
      >
        <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}>
          <CoachAvatar />
        </div>
      </div>
    </div>
  );
};

export default CoachAvatarStage;
