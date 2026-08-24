'use client';

/**
 * CoachAvatar
 *
 * Drop-in React component. No dependencies beyond React itself.
 *
 * Props:
 *   state   — 'idle' | 'listening' | 'speaking' | 'celebrating'
 *             Controls the avatar's coaching state. Defaults to 'idle'.
 *             Omit this prop entirely to render the interactive demo
 *             (state + gaze buttons included).
 *
 *   size    — number (px). Stage is always 260 × 250 in the design;
 *             pass a multiplier via CSS transform if you need a different
 *             rendered size. Default: renders at design size.
 *
 * Usage — controlled (driven by your app):
 *   <CoachAvatar state="listening" />
 *
 * Usage — demo / standalone:
 *   <CoachAvatar />
 */

import { useState, useRef, useCallback, useEffect } from 'react';
import styles from './CoachAvatar.module.css';

// ─── design data ────────────────────────────────────────────────────────────

const STATES = {
  idle: {
    haloW: 232,
    haloGrad: 'radial-gradient(circle,rgba(255,140,45,.48) 0%,rgba(255,160,70,.26) 45%,rgba(255,180,110,0) 72%)',
    haloBlur: 20,
    haloAnim: 'haloPulse 5.5s ease-in-out infinite',
    bodyGrad: 'radial-gradient(circle at 36% 30%,#ffd9a8 0%,#ffa54d 34%,#f97b21 68%,#ec5f0e 100%)',
    bodyAnim: 'breathe 5.5s ease-in-out infinite,morphA 11s ease-in-out infinite',
    coreGrad: 'radial-gradient(circle at 40% 34%,rgba(255,232,196,.95),rgba(255,166,74,.55) 60%,rgba(255,140,40,0) 100%)',
    coreAnim: 'breathe 5.5s ease-in-out infinite',
    driftAnim: 'faceDrift 5.5s ease-in-out infinite',
    driftTY: '0px',
    eyeL: { l: 98, t: 101, w: 22, h: 28 },
    eyeR: { l: 143, t: 106, w: 18, h: 23 },
    eyeLRad: '50%',
    eyeRRad: '50%',
    eyeLAnim: 'blink 6.4s ease-in-out infinite',
    eyeRAnim: 'blink 6.4s ease-in-out infinite',
    embers: false,
  },
  listening: {
    haloW: 222,
    haloGrad: 'radial-gradient(circle,rgba(255,132,32,.56) 0%,rgba(255,158,64,.3) 44%,rgba(255,180,110,0) 70%)',
    haloBlur: 18,
    haloAnim: 'haloLean 4.4s ease-in-out infinite',
    bodyGrad: 'radial-gradient(circle at 36% 30%,#ffdfb4 0%,#ffab55 34%,#fa8024 68%,#ee620f 100%)',
    bodyAnim: 'lean 4.4s ease-in-out infinite,morphA 11s ease-in-out infinite',
    coreGrad: 'radial-gradient(circle at 40% 34%,rgba(255,236,206,.98),rgba(255,172,84,.6) 60%,rgba(255,140,40,0) 100%)',
    coreAnim: 'lean 4.4s ease-in-out infinite',
    driftAnim: 'glance 5.6s ease-in-out infinite',
    driftTY: '-7px',
    eyeL: { l: 98, t: 99, w: 22, h: 28 },
    eyeR: { l: 143, t: 104, w: 18, h: 23 },
    eyeLRad: '50%',
    eyeRRad: '50%',
    eyeLAnim: 'eyeWide 4.4s ease-in-out infinite',
    eyeRAnim: 'eyeWide 4.4s ease-in-out infinite',
    embers: false,
  },
  speaking: {
    haloW: 228,
    haloGrad: 'radial-gradient(circle,rgba(255,138,40,.5) 0%,rgba(255,160,70,.27) 45%,rgba(255,180,110,0) 72%)',
    haloBlur: 19,
    haloAnim: 'haloSpeak 1.1s ease-in-out infinite',
    bodyGrad: 'radial-gradient(circle at 36% 30%,#ffdcae 0%,#ffa850 34%,#f97e23 68%,#ed610f 100%)',
    bodyAnim: 'pulseSpeak 1.1s ease-in-out infinite,morphA 9s ease-in-out infinite',
    coreGrad: 'radial-gradient(circle at 40% 34%,rgba(255,234,200,.96),rgba(255,168,78,.58) 60%,rgba(255,140,40,0) 100%)',
    coreAnim: 'pulseSpeak 1.1s ease-in-out infinite',
    driftAnim: 'speakSway 3.4s ease-in-out infinite',
    driftTY: '0px',
    eyeL: { l: 98, t: 100, w: 22, h: 28 },
    eyeR: { l: 143, t: 105, w: 18, h: 23 },
    eyeLRad: '50%',
    eyeRRad: '50%',
    eyeLAnim: 'eyeSpeak 1.1s ease-in-out infinite',
    eyeRAnim: 'eyeSpeak 1.1s ease-in-out .12s infinite',
    embers: false,
  },
  celebrating: {
    haloW: 236,
    haloGrad: 'radial-gradient(circle,rgba(255,116,16,.62) 0%,rgba(255,150,50,.32) 44%,rgba(255,180,110,0) 70%)',
    haloBlur: 20,
    haloAnim: 'haloCele 1.5s ease-in-out infinite',
    bodyGrad: 'radial-gradient(circle at 36% 28%,#ffe6ba 0%,#ffad3e 30%,#fb6f12 66%,#e94e05 100%)',
    bodyAnim: 'bounce 1.5s ease-in-out infinite,morphA 9s ease-in-out infinite',
    coreGrad: 'radial-gradient(circle at 40% 32%,rgba(255,242,214,1),rgba(255,166,60,.62) 60%,rgba(255,140,40,0) 100%)',
    coreAnim: 'bounce 1.5s ease-in-out infinite',
    driftAnim: 'bounce 1.5s ease-in-out infinite',
    driftTY: '0px',
    eyeL: { l: 97, t: 107, w: 25, h: 27 },
    eyeR: { l: 142, t: 111, w: 21, h: 23 },
    eyeLRad: '50% 50% 26% 26%/74% 74% 26% 26%',
    eyeRRad: '50% 50% 26% 26%/74% 74% 26% 26%',
    eyeLAnim: 'eyeHappy 1.5s ease-in-out infinite',
    eyeRAnim: 'eyeHappy 1.5s ease-in-out infinite',
    embers: true,
  },
};

const POSES = {
  '3a':        { bodyDeg: -6,  faceDeg: -11, eyeL: { l: 74,  t: 73,  w: 24, h: 34 }, eyeR: { l: 122, t: 80,  w: 15, h: 27 }, lRad: '50%', rRad: '50%' },
  '3b':        { bodyDeg: -7,  faceDeg: -12, eyeL: { l: 76,  t: 148, w: 25, h: 16 }, eyeR: { l: 124, t: 155, w: 16, h: 13 }, lRad: '34% 34% 50% 50%/34% 34% 66% 66%', rRad: '34% 34% 50% 50%/34% 34% 66% 66%' },
  '3c':        { bodyDeg:  6,  faceDeg:  11, eyeL: { l: 127, t: 80,  w: 20, h: 29 }, eyeR: { l: 170, t: 73,  w: 17, h: 32 }, lRad: '50%', rRad: '50%' },
  '3d':        { bodyDeg:  7,  faceDeg:  12, eyeL: { l: 126, t: 155, w: 20, h: 14 }, eyeR: { l: 168, t: 148, w: 17, h: 16 }, lRad: '34% 34% 50% 50%/34% 34% 66% 66%', rRad: '34% 34% 50% 50%/34% 34% 66% 66%' },
  '3e':        { bodyDeg: -3,  faceDeg:   0, eyeL: { l: 63,  t: 104, w: 13, h: 31 }, eyeR: { l: 105, t: 108, w: 22, h: 27 }, lRad: '50%', rRad: '50%' },
  '3e-r':      { bodyDeg:  3,  faceDeg:   0, eyeL: { l: 155, t: 104, w: 22, h: 27 }, eyeR: { l: 185, t: 108, w: 13, h: 31 }, lRad: '50%', rRad: '50%' },
  'center-up': { bodyDeg:  0,  faceDeg:   0, eyeL: { l: 96,  t: 74,  w: 22, h: 34 }, eyeR: { l: 141, t: 69,  w: 18, h: 30 }, lRad: '50%', rRad: '50%' },
  '3f':        { bodyDeg:  0,  faceDeg:   0, eyeL: { l: 96,  t: 158, w: 25, h: 14 }, eyeR: { l: 142, t: 161, w: 20, h: 12 }, lRad: '30% 30% 50% 50%/30% 30% 70% 70%', rRad: '30% 30% 50% 50%/30% 30% 70% 70%' },
};

const GAZE_BTNS = [
  { pose: '3a',        label: 'Up left',       style: { left: 8,               top: 28 } },
  { pose: 'center-up', label: 'Look up',        style: { left: '50%', top: 8,  transform: 'translateX(-50%)' } },
  { pose: '3c',        label: 'Up right',       style: { right: 8,              top: 28 } },
  { pose: '3e',        label: 'Side peek',      style: { left: 8,               top: '50%', transform: 'translateY(-50%)' } },
  { pose: '3e-r',      label: 'Side peek',      style: { right: 8,              top: '50%', transform: 'translateY(-50%)' } },
  { pose: '3b',        label: 'Down left',      style: { left: 8,               bottom: 28 } },
  { pose: '3f',        label: 'Straight down',  style: { left: '50%', bottom: 8, transform: 'translateX(-50%)' } },
  { pose: '3d',        label: 'Down right',     style: { right: 8,              bottom: 28 } },
];

/**
 * CSS Modules hashes every @keyframes name (spark1 -> _spark1_159t5_1), but the
 * animation strings in STATES/POSES use the plain authored names — so they
 * resolve to nothing at runtime. Rewrite the leading name in each shorthand to
 * the hashed one the stylesheet actually defines.
 *
 * Handles the multi-animation case too ("breathe 5.5s ..., morphA 11s ...").
 */
function kf(animation) {
  if (!animation || animation === 'none') return animation;
  return animation
    .split(',')
    .map((part) => {
      const trimmed = part.trim();
      const space = trimmed.indexOf(' ');
      const name = space === -1 ? trimmed : trimmed.slice(0, space);
      const mapped = styles[name];
      if (!mapped) return trimmed;
      return space === -1 ? mapped : mapped + trimmed.slice(space);
    })
    .join(', ');
}

const DUR  = 300;
const EASE = 'cubic-bezier(.4,0,.2,1)';

// ─── crossfade helper (DOM-only, no React state) ────────────────────────────

function crossfadeGrad(container, liveEl, newGrad, newAnim, newFilter) {
  const inc = document.createElement('div');
  // The organic blob shape lives on liveEl (set inline / animated by morphA),
  // not on the container — so `border-radius: inherit` would resolve to 0 and
  // flash a hard rectangle during the fade. Copy the live radius instead.
  const liveRadius =
    liveEl.style.borderRadius ||
    getComputedStyle(liveEl).borderRadius ||
    '50%';
  inc.style.cssText = [
    'position:absolute', 'inset:0', `border-radius:${liveRadius}`,
    `background:${newGrad}`, `filter:${newFilter || 'none'}`,
    `animation:${newAnim}`, 'opacity:0',
  ].join(';');
  container.appendChild(inc);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    inc.style.transition = `opacity ${DUR}ms ${EASE}`;
    inc.style.opacity    = '1';
  }));
  setTimeout(() => {
    liveEl.style.background = newGrad;
    liveEl.style.animation  = newAnim;
    if (newFilter) liveEl.style.filter = newFilter;
    inc.remove();
  }, DUR + 20);
}

// ─── orb layer (pure CSS, no state) ─────────────────────────────────────────

function OrbLayer({ refProp, wrapStyle, innerStyle }) {
  return (
    <div ref={refProp} className={styles.absCenter} style={wrapStyle}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', ...innerStyle }} />
    </div>
  );
}

// ─── main component ──────────────────────────────────────────────────────────

export default function CoachAvatar({ state: controlledState }) {
  const isControlled = controlledState !== undefined;

  const [activeState, setActiveState] = useState('idle');
  const [activePose,  setActivePose]  = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Respect the viewer's reduced-motion preference: the orb is heavily
  // animated, so we freeze the keyframes and hold a calm idle pose instead.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const currentState = isControlled ? controlledState : activeState;

  // DOM refs for imperative gradient crossfades and eye transitions
  const bodyRotRef  = useRef(null);
  const faceRotRef  = useRef(null);
  const faceDriftRef= useRef(null);
  const haloWrapRef = useRef(null);
  const haloElRef   = useRef(null);
  const bodyWrapRef = useRef(null);
  const bodyElRef   = useRef(null);
  const coreWrapRef = useRef(null);
  const coreElRef   = useRef(null);
  const eyeLWrapRef = useRef(null);
  const eyeRWrapRef = useRef(null);
  const eyeLRef     = useRef(null);
  const eyeRRef     = useRef(null);
  const embersRef   = useRef(null);

  const setEyes = useCallback((lp, rp, lRad, rRad) => {
    const lw = eyeLWrapRef.current;
    const rw = eyeRWrapRef.current;
    if (!lw || !rw) return;
    lw.style.left   = `${lp.l}px`; lw.style.top    = `${lp.t}px`;
    lw.style.width  = `${lp.w}px`; lw.style.height = `${lp.h}px`;
    rw.style.left   = `${rp.l}px`; rw.style.top    = `${rp.t}px`;
    rw.style.width  = `${rp.w}px`; rw.style.height = `${rp.h}px`;
    eyeLRef.current.style.borderRadius = lRad;
    eyeRRef.current.style.borderRadius = rRad;
  }, []);

  const applyState = useCallback((key, pose) => {
    const s = STATES[key];
    if (!s) return;
    // With reduced motion we keep every visual (gradients, shapes, gaze) but
    // drop the looping keyframes so nothing oscillates on screen.
    const anim = (a) => (reducedMotion ? 'none' : kf(a));

    // halo
    const hw = haloWrapRef.current;
    const he = haloElRef.current;
    if (hw && he) {
      hw.style.width  = `${s.haloW}px`;
      hw.style.height = `${s.haloW}px`;
      he.style.width  = `${s.haloW}px`;
      he.style.height = `${s.haloW}px`;
      crossfadeGrad(hw, he, s.haloGrad, anim(s.haloAnim), `blur(${s.haloBlur}px)`);
    }
    // body
    if (bodyWrapRef.current && bodyElRef.current)
      crossfadeGrad(bodyWrapRef.current, bodyElRef.current, s.bodyGrad, anim(s.bodyAnim), 'blur(8px)');
    // core
    if (coreWrapRef.current && coreElRef.current)
      crossfadeGrad(coreWrapRef.current, coreElRef.current, s.coreGrad, anim(s.coreAnim), 'blur(6px)');
    // face drift
    const fd = faceDriftRef.current;
    if (fd) {
      fd.style.animation = anim(s.driftAnim);
      fd.style.transform = s.driftTY ? `translateY(${s.driftTY})` : '';
    }
    // embers
    if (embersRef.current)
      embersRef.current.style.display = s.embers ? 'block' : 'none';
    // eyes — only if no pose override
    if (!pose) {
      setEyes(s.eyeL, s.eyeR, s.eyeLRad, s.eyeRRad);
      eyeLRef.current.style.animation = anim(s.eyeLAnim);
      eyeRRef.current.style.animation = anim(s.eyeRAnim);
    }
  }, [setEyes, reducedMotion]);

  const applyPose = useCallback((key) => {
    const p = POSES[key];
    if (!p) return;
    bodyRotRef.current.style.transform  = `rotate(${p.bodyDeg}deg)`;
    faceRotRef.current.style.transform  = `rotate(${p.faceDeg}deg)`;
    faceDriftRef.current.style.animation = reducedMotion ? 'none' : kf('poseDrift 6.5s ease-in-out infinite');
    faceDriftRef.current.style.transform = '';
    setEyes(p.eyeL, p.eyeR, p.lRad, p.rRad);
    const blinkAnim = reducedMotion ? 'none' : kf('blink 6.8s ease-in-out infinite');
    eyeLRef.current.style.animation = blinkAnim;
    eyeRRef.current.style.animation = blinkAnim;
  }, [setEyes, reducedMotion]);

  const clearPose = useCallback((key) => {
    const s = STATES[key];
    bodyRotRef.current.style.transform  = '';
    faceRotRef.current.style.transform  = '';
    faceDriftRef.current.style.animation = reducedMotion ? 'none' : kf(s.driftAnim);
    faceDriftRef.current.style.transform = s.driftTY ? `translateY(${s.driftTY})` : '';
    setEyes(s.eyeL, s.eyeR, s.eyeLRad, s.eyeRRad);
    eyeLRef.current.style.animation = reducedMotion ? 'none' : kf(s.eyeLAnim);
    eyeRRef.current.style.animation = reducedMotion ? 'none' : kf(s.eyeRAnim);
  }, [setEyes, reducedMotion]);

  // apply whenever controlled state changes
  useEffect(() => {
    applyState(currentState, activePose);
  }, [currentState, reducedMotion]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleStateClick = (key) => {
    setActiveState(key);
    setActivePose(null);
    applyState(key, null);
    clearPose(key);
  };

  const handlePoseClick = (pose) => {
    if (activePose === pose) {
      setActivePose(null);
      clearPose(currentState);
    } else {
      setActivePose(pose);
      applyPose(pose);
    }
  };

  const s = STATES[currentState] || STATES.idle;
  // First paint honors the preference too, before any effect has run.
  const initAnim = (a) => (reducedMotion ? 'none' : kf(a));

  return (
    <div className={styles.root}>
      <div className={styles.arena}>

        {/* gaze buttons */}
        {GAZE_BTNS.map(({ pose, label, style }) => (
          <button
            key={pose}
            className={`${styles.gazeBtn} ${activePose === pose ? styles.active : ''}`}
            style={style}
            onClick={() => handlePoseClick(pose)}
          >
            {label}
          </button>
        ))}

        {/* mascot */}
        <div className={styles.mascotWrap}>

          {/* body rotation (tilts with gaze) */}
          <div ref={bodyRotRef} className={`${styles.orb} ${styles.bodyRot}`}>

            {/* halo */}
            <div
              ref={haloWrapRef}
              className={styles.absCenter}
              style={{ width: s.haloW, height: s.haloW, borderRadius: '50%', position: 'absolute', inset: 0, margin: 'auto' }}
            >
              <div
                ref={haloElRef}
                style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  background: s.haloGrad,
                  filter: `blur(${s.haloBlur}px)`,
                  animation: initAnim(s.haloAnim),
                  transition: `width 320ms ${EASE}, height 320ms ${EASE}`,
                  width: '100%', height: '100%',
                }}
              />
            </div>

            {/* body */}
            <div ref={bodyWrapRef} className={styles.absCenter} style={{ width: 150, height: 146 }}>
              <div
                ref={bodyElRef}
                style={{
                  position: 'absolute', inset: 0,
                  borderRadius: '48% 52% 46% 54%/52% 48% 52% 48%',
                  background: s.bodyGrad,
                  filter: 'blur(8px)',
                  animation: initAnim(s.bodyAnim),
                }}
              />
            </div>

            {/* core */}
            <div ref={coreWrapRef} className={styles.absCenter} style={{ width: 94, height: 90 }}>
              <div
                ref={coreElRef}
                style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  background: s.coreGrad,
                  filter: 'blur(6px)',
                  animation: initAnim(s.coreAnim),
                }}
              />
            </div>
          </div>

          {/* embers */}
          {/* Sparks are absolutely centered, so the wrapper needs to span the
              mascot box — otherwise they animate out of a collapsed origin. */}
          <div
            ref={embersRef}
            className={styles.orb}
            style={{ display: 'none', pointerEvents: 'none', zIndex: 5 }}
          >
            {[
              { w: 10, bg: '#ff8a1f', anim: 'spark1 1.5s ease-out infinite',          delay: '0s'   },
              { w:  8, bg: '#ffb45c', anim: 'spark2 1.5s ease-out .1s infinite',      delay: '.1s'  },
              { w: 11, bg: '#ff7a12', anim: 'spark3 1.5s ease-out .05s infinite',     delay: '.05s' },
              { w:  7, bg: '#ffc57e', anim: 'spark4 1.5s ease-out .18s infinite',     delay: '.18s' },
            ].map((e, i) => (
              <div
                key={i}
                className={styles.absCenter}
                style={{ width: e.w, height: e.w, borderRadius: '50%', background: e.bg, filter: 'blur(2px)', animation: initAnim(e.anim) }}
              />
            ))}
          </div>

          {/* face rotation */}
          <div ref={faceRotRef} className={`${styles.orb} ${styles.faceRot}`}>
            <div
              ref={faceDriftRef}
              className={styles.orb}
              style={{ animation: initAnim(s.driftAnim) }}
            >
              {/* left eye */}
              <div
                ref={eyeLWrapRef}
                style={{
                  position: 'absolute',
                  left: s.eyeL.l, top: s.eyeL.t, width: s.eyeL.w, height: s.eyeL.h,
                  transition: `left ${DUR}ms ${EASE}, top ${DUR}ms ${EASE}, width ${DUR}ms ${EASE}, height ${DUR}ms ${EASE}`,
                }}
              >
                <div
                  ref={eyeLRef}
                  style={{
                    width: '100%', height: '100%', background: '#fffdf9',
                    borderRadius: s.eyeLRad,
                    animation: initAnim(s.eyeLAnim),
                    transition: `border-radius ${DUR}ms ${EASE}`,
                  }}
                />
              </div>
              {/* right eye */}
              <div
                ref={eyeRWrapRef}
                style={{
                  position: 'absolute',
                  left: s.eyeR.l, top: s.eyeR.t, width: s.eyeR.w, height: s.eyeR.h,
                  transition: `left ${DUR}ms ${EASE}, top ${DUR}ms ${EASE}, width ${DUR}ms ${EASE}, height ${DUR}ms ${EASE}`,
                }}
              >
                <div
                  ref={eyeRRef}
                  style={{
                    width: '100%', height: '100%', background: '#fffdf9',
                    borderRadius: s.eyeRRad,
                    animation: initAnim(s.eyeRAnim),
                    transition: `border-radius ${DUR}ms ${EASE}`,
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* controls — only shown in uncontrolled / demo mode */}
      {!isControlled && (
        <>
          <div className={styles.stateStrip}>
            {Object.keys(STATES).map((key) => (
              <button
                key={key}
                className={`${styles.stateBtn} ${activeState === key && !activePose ? styles.stateBtnActive : ''}`}
                onClick={() => handleStateClick(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
          <p className={styles.statusLabel}>
            {activePose ? `${activeState} · ${activePose}` : activeState}
          </p>
        </>
      )}
    </div>
  );
}
