import { useState } from 'react';
import type { FC } from 'react';
import { FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import ScreenshotCarousel from '../Components/ScreenshotCarousel';
import type { CarouselSlide } from '../Components/ScreenshotCarousel';
import CoachAvatarStage from '../Components/CoachAvatarStage';
import sculptIcon from '../assets/icon.png';

const appScreenshot1 = new URL('../assets/IMG_2043.jpg', import.meta.url).href;
const appScreenshot4 = new URL('../assets/IMG_2032.PNG', import.meta.url).href;
const appScreenshot2 = new URL('../assets/IMG_2035.PNG', import.meta.url).href;
const appScreenshot3 = new URL('../assets/IMG_2036.PNG', import.meta.url).href;
const adminScreenshot = new URL('../assets/sculpt-admin-analytics.png', import.meta.url).href;

/* Design tokens mirrored from the Sculpt marketing site (globals.css). */
const ACCENT = '#FF4D06';
const TEXT_PRIMARY = '#000000';
const TEXT_SECONDARY = '#4A4A4A';
const TEXT_MUTED = '#888888';
const BORDER_SUBTLE = '#E5E5E5';

/**
 * Stands in for the marketing site's summit-sunset hero video: warm light
 * rising out of a dark ridge, built from Sculpt's own accent ramp so the
 * orange CTA glow reads as part of the scene.
 */
const PAGE_GRADIENT = [
  // Faint ember bloom behind the card's top edge, echoing the hero's light
  // source; deliberately low-opacity so the white card stays the focal point.
  'radial-gradient(90% 55% at 50% 0%, rgba(255,120,32,0.16) 0%, rgba(255,120,32,0) 62%)',
  'radial-gradient(70% 45% at 88% 8%, rgba(255,168,6,0.10) 0%, rgba(255,168,6,0) 60%)',
  'linear-gradient(180deg, #241511 0%, #1D1512 26%, #201A17 100%)',
].join(', ');

const HERO_GRADIENT = [
  'radial-gradient(120% 90% at 62% 18%, rgba(255,168,6,0.55) 0%, rgba(255,168,6,0) 58%)',
  'radial-gradient(90% 70% at 78% 34%, rgba(255,77,6,0.45) 0%, rgba(255,77,6,0) 62%)',
  'radial-gradient(140% 110% at 18% 92%, rgba(10,10,12,0.92) 0%, rgba(10,10,12,0) 60%)',
  'linear-gradient(165deg, #2A1206 0%, #7A2E08 34%, #C24A0C 58%, #12100F 100%)',
].join(', ');

const slides: CarouselSlide[] = [
  {
    title: 'User overview',
    caption: 'App-facing screenshot showing the main user experience and the layout direction I worked on.',
    accent: ACCENT,
    image: appScreenshot1,
    imageAlt: 'Sculpt app user screenshot 1',
    note: 'User-facing screen',
  },
  {
    title: 'Workout flow detail',
    caption: 'A screen focused on the workout flow and the inputs that feed the tracking experience.',
    accent: '#1f2937',
    image: appScreenshot2,
    imageAlt: 'Sculpt app user screenshot 2',
    note: 'Workout logging flow',
  },
  {
    title: 'Exercise setup',
    caption: 'A screen related to exercise setup and the inputs used in the admin experience.',
    accent: '#0f172a',
    image: appScreenshot3,
    imageAlt: 'Sculpt app user screenshot 3',
    note: 'Exercise admin inputs',
  },
  {
    title: 'Tracking and calculations',
    caption: 'A screen showing the tracking side of the experience, including the calculations that happen on the frontend.',
    accent: '#334155',
    image: appScreenshot4,
    imageAlt: 'Sculpt app user screenshot 4',
    note: 'Frontend calculations',
  },
  {
    title: 'Admin analytics view',
    caption: 'Admin panel analytics view that reflects the internal tooling and data review work.',
    accent: '#7c3aed',
    image: adminScreenshot,
    imageAlt: 'Sculpt admin panel analytics view',
    note: 'Admin panel analytics',
  },
];

const carouselTheme = {
  accent: ACCENT,
  eyebrowBg: '#FFF0E8',
  eyebrowFg: '#B84A10',
  sectionBg: '#FBFAF8',
  sectionBorder: '#E5E5E5',
  panelBg: '#FFFFFF',
  panelBorder: BORDER_SUBTLE,
  tileActiveBg: '#FFF2EA',
  tileBorder: '#E8E0D6',
  text: TEXT_PRIMARY,
  textMuted: TEXT_SECONDARY,
};

const Sculpt: FC = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="min-h-screen w-full pb-20" style={{ background: PAGE_GRADIENT, backgroundAttachment: 'fixed' }}>

      <div className="max-w-[1000px] mx-auto px-6 pt-12">
        <a href="/#projects" className="inline-flex items-center text-[#e0e0e0] font-medium mb-8 hover:underline" style={{ transition: 'color 0.2s', color: '#e0e0e0' }} onMouseOver={e => { e.currentTarget.style.color = '#bdbdbd'; }} onMouseOut={e => { e.currentTarget.style.color = '#e0e0e0'; }}>
          <FaArrowLeft className="mr-2" /> Back to Projects
        </a>

        <div className="rounded-3xl bg-white shadow-sm overflow-hidden" style={{ border: `1px solid ${BORDER_SUBTLE}` }}>
          {/* Hero band — a CSS sunset in Sculpt's palette, standing in for the
              marketing site's summit video. Two legibility overlays match the
              site's treatment so the CTAs stay readable over the warm light. */}
          <div className="relative overflow-hidden px-10 py-12 md:px-14 md:py-16" style={{ background: HERO_GRADIENT }}>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.08]" />

            <div className="relative z-10">
              <div className="mb-6">
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/75">
                  Founding Developer · 1,000+ active users
                </span>
              </div>

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <img src={sculptIcon} alt="Sculpt.ai App Icon" className="h-20 w-20 flex-shrink-0"/>
                <div>
                  <h1 className="mb-4 text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-[48px] md:text-[56px]">
                    Sculpt.ai
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'REST APIs', 'Shadcn UI', 'TypeScript'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-sm font-medium text-white/90 backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dual CTA — mirrors the marketing site's hero pairing. */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://sculptai.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold tracking-[-0.005em] text-white transition-all duration-200 hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{
                    backgroundColor: hover ? '#FF5E1F' : ACCENT,
                    // Pinned: the site-wide `a:hover` rule would otherwise tint
                    // this indigo on hover.
                    color: '#fff',
                    boxShadow: hover
                      ? '0 2px 4px rgba(0,0,0,0.18), 0 12px 36px rgba(255,77,6,0.42)'
                      : '0 1px 2px rgba(0,0,0,0.15), 0 8px 28px rgba(255,77,6,0.32)',
                  }}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  Visit Website
                  <FaExternalLinkAlt className="text-[11px] transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#sculpt-highlights"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-[14px] font-medium tracking-[-0.005em] backdrop-blur-sm transition-all duration-200 hover:border-white/25 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  style={{ color: '#fff' }}
                >
                  See the work
                </a>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-14">
            <div className="prose prose-lg max-w-none leading-relaxed" style={{ color: TEXT_SECONDARY }}>
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h3 className="mb-3 inline-block pb-2 text-xl font-semibold" style={{ color: TEXT_PRIMARY, borderBottom: `2px solid ${ACCENT}`, letterSpacing: '-0.025em' }}>My Role</h3>
                  <p style={{ color: TEXT_SECONDARY }}>
                    Founding Developer contributing across frontend engineering, product UI, and core user flows for a
                    platform with 1,000+ active users.
                  </p>
                </div>
                <div>
                   <h3 className="mb-3 inline-block pb-2 text-xl font-semibold" style={{ color: TEXT_PRIMARY, borderBottom: `2px solid ${ACCENT}`, letterSpacing: '-0.025em' }}>Collaboration</h3>
                   <p style={{ color: TEXT_SECONDARY }}>
                    Worked closely with backend engineers and domain experts to verify algorithms, validate health analytics,
                    and keep implementation aligned across the stack.
                   </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold" style={{ color: TEXT_PRIMARY, letterSpacing: '-0.025em' }}>What I've Done</h3>
                <p className="mb-4" style={{ color: TEXT_SECONDARY }}>
                  I own several of the systems that decide what users actually see: personalized health ranges for macro- and
                  micronutrients, the interactive analytics graphs that turn backend health data into something readable, and the
                  calculation layer behind rate of perceived exertion, progressive overload, and calorie targets. These areas
                  need to be right rather than merely working, so I'm responsible for reviewing changes to them as well as
                  building them.
                </p>
                <p className="mb-4" style={{ color: TEXT_SECONDARY }}>
                  On the product side, I'm the primary developer shaping the app's UI/UX — smoothing the workout logging flow
                  and onboarding, and continually tightening exercise entry, push notifications, and streak tracking. Most of
                  this ships as my own work reviewed by a teammate.
                </p>
              </div>

              <div className="mb-8">
                 <h3 className="mb-4 text-xl font-semibold" style={{ color: TEXT_PRIMARY, letterSpacing: '-0.025em' }}>Technical Execution</h3>
                 <p className="mb-4" style={{ color: TEXT_SECONDARY }}>
                  I took over the internal exercise CMS after it was left half-finished and undocumented, and brought it back to
                  a working state — it now handles exercises, workouts, splits, and automated plan generation. Restoring media
                  upload meant rebuilding image and video cropping end to end and standing up a Dockerized image processor
                  writing to S3, alongside substantial frontend work to make the tool usable day to day.
                 </p>
                 <p className="mb-4" style={{ color: TEXT_SECONDARY }}>
                  Across both codebases I favor modular, reusable implementation that reduces redundancy and leaves room for
                  what's coming next, and I lean on Postman, Mixpanel, AWS Console, and Playwright to validate behavior and
                  catch issues early.
                 </p>
              </div>

              <div id="sculpt-highlights" className="scroll-mt-24">
                <ScreenshotCarousel slides={slides} theme={carouselTheme} />
              </div>

              {/* Design work — interactive coach mascot */}
              <section
                className="mb-8 rounded-3xl border p-5 shadow-sm md:p-6"
                style={{ backgroundColor: '#FBFAF8', borderColor: BORDER_SUBTLE }}
              >
                <div className="mb-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]" style={{ backgroundColor: '#FFF0E8', color: '#B84A10' }}>
                  <FaWandMagicSparkles className="text-[11px]" /> Design work
                </div>

                <h3 className="mb-3 mt-2 text-xl font-semibold" style={{ color: TEXT_PRIMARY, letterSpacing: '-0.025em' }}>
                  AI Coach Mascot
                </h3>
                <p className="mb-6" style={{ color: TEXT_SECONDARY }}>
                  I designed and built the coach mascot — an animated orb that gives Sculpt’s AI coach a physical presence.
                  It shifts between four coaching states and tracks the user’s gaze, so the assistant reads as attentive
                  rather than static. Everything is CSS keyframes and layered gradients with no animation library, keeping
                  it light enough to run anywhere in the app.
                </p>

                <div className="rounded-2xl border p-4" style={{ backgroundColor: '#FFFFFF', borderColor: BORDER_SUBTLE }}>
                  <CoachAvatarStage />
                </div>

                <p className="mt-4 text-sm" style={{ color: TEXT_MUTED }}>
                  Interactive — switch states or pick a gaze direction to see the transitions.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sculpt;
