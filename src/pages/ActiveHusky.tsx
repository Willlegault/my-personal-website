import { useState } from 'react';
import type { FC } from 'react';
import { FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import ScreenshotCarousel from '../Components/ScreenshotCarousel';
import type { CarouselSlide } from '../Components/ScreenshotCarousel';
import huskyBlackIcon from '../assets/husky_black.png';

/* Design tokens mirrored from the Active Husky app (constants/Constants.tsx). */
const PRIMARY = '#C8102E';       // official Northeastern red
const PRIMARY_DARK = '#8E1B1B';
const BACKGROUND = '#F4F3EF';    // app's off-white background
const SURFACE = '#FFFFFF';
const HERO = '#111111';
const TEXT_PRIMARY = '#141414';
const TEXT_MUTED = '#8A8A8A';
const HAIRLINE = '#ECEAE3';
const PILL_BG = '#F6E3E4';       // filterPill.bg
const PILL_FG = '#B21F2D';       // filterPill.fg

/**
 * Screenshots pending: the available exports carry an "appscreens" watermark,
 * so the carousel stays hidden until clean captures are dropped in here.
 */
const slides: CarouselSlide[] = [];

const carouselTheme = {
  accent: PRIMARY,
  eyebrowBg: PILL_BG,
  eyebrowFg: PILL_FG,
  sectionBg: BACKGROUND,
  sectionBorder: HAIRLINE,
  panelBg: SURFACE,
  panelBorder: HAIRLINE,
  tileActiveBg: PILL_BG,
  tileBorder: HAIRLINE,
  text: TEXT_PRIMARY,
  textMuted: TEXT_MUTED,
};

const ActiveHusky: FC = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="min-h-screen w-full pb-20" style={{ backgroundColor: '#232323' }}>

      <div className="max-w-[1000px] mx-auto px-6 pt-12">
        <a href="/#projects" className="inline-flex items-center font-medium mb-8 hover:underline" style={{ transition: 'color 0.2s', color: '#e0e0e0' }} onMouseOver={e => { e.currentTarget.style.color = '#bdbdbd'; }} onMouseOut={e => { e.currentTarget.style.color = '#e0e0e0'; }}>
          <FaArrowLeft className="mr-2" /> Back to Projects
        </a>

        <div className="rounded-3xl shadow-sm overflow-hidden" style={{ backgroundColor: SURFACE, border: `1px solid ${HAIRLINE}` }}>
          {/* Dark hero band, mirroring the app's class-details hero. */}
          <div
            className="px-10 pt-10 pb-10 md:px-14 md:pt-12"
            style={{
              background: `radial-gradient(ellipse at 20% 0%, ${PRIMARY_DARK}55 0%, transparent 60%), ${HERO}`,
            }}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-white/95 p-2">
                  <img src={huskyBlackIcon} alt="Northeastern Husky Icon" className="h-full w-full object-contain"/>
                </div>
                <div>
                  <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl" style={{ letterSpacing: '-0.03em' }}>
                    Active Husky
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'AWS', 'Vercel', 'Node.js', 'MongoDB'].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full px-3 py-1 text-sm font-medium text-white"
                        style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="https://recreation.northeastern.edu/program-registration/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl px-6 py-4 text-[15px] font-semibold transition-all"
                style={{
                  backgroundColor: hover ? '#A50D26' : PRIMARY,
                  color: '#fff',
                  boxShadow: hover ? '0 4px 16px rgba(200,16,46,0.35)' : '0 2px 8px rgba(200,16,46,0.22)',
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Visit Website <FaExternalLinkAlt className="text-sm" />
              </a>
            </div>
          </div>

          <div className="p-10 md:p-14" style={{ backgroundColor: BACKGROUND }}>
            <div className="prose prose-lg max-w-none leading-relaxed" style={{ color: TEXT_PRIMARY }}>
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h3 className="mb-3 inline-block pb-2 text-xl font-semibold" style={{ color: TEXT_PRIMARY, borderBottom: `2px solid ${PRIMARY}` }}>My Role</h3>
                  <p style={{ color: TEXT_PRIMARY }}>
                    Full-stack developer across the React Native app, Express backend, and admin CMS. Interviewed and hired
                    the incoming co-op developer, then owned onboarding and mentorship for two developers — reviewing their
                    pull requests and planning their work as they ramped onto the platform.
                  </p>
                </div>
                <div>
                   <h3 className="mb-3 inline-block pb-2 text-xl font-semibold" style={{ color: TEXT_PRIMARY, borderBottom: `2px solid ${PRIMARY}` }}>Collaboration</h3>
                   <p style={{ color: TEXT_PRIMARY }}>
                    Partnered with the management team on admin workflows and with designers and marketing on branding and
                    user experience, while coordinating releases across three codebases that ship together.
                   </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold" style={{ color: TEXT_PRIMARY }}>What I've Done</h3>
                <p className="mb-4" style={{ color: TEXT_PRIMARY }}>
                  Active Husky is Northeastern's group fitness platform — a React Native app shipped on the App Store and
                  Google Play, an Express/MongoDB backend, and a Next.js admin CMS used by rec center staff to run classes,
                  memberships, and scheduling. I've worked across all three since joining, contributing to class booking,
                  waitlists, QR check-in, messaging, and the member and instructor experiences.
                </p>
                <p className="mb-4" style={{ color: TEXT_PRIMARY }}>
                  My clearest ownership is the platform's push notification system, which I built end to end across the app
                  and backend. Beyond that I've built the profile and statistics surface, instructor attendance tooling,
                  waiver and account lifecycle flows, and the tablet layouts required for App Store submission.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold" style={{ color: TEXT_PRIMARY }}>Technical Execution</h3>
                 <p className="mb-4" style={{ color: TEXT_PRIMARY }}>
                  Notifications were the hardest thing to get right. iOS and Android needed different providers — Expo Push
                  and native Firebase Cloud Messaging — so the app resolves per device while the backend routes through one
                  service that respects each member's per-category preferences. Getting Firebase onto Android without
                  breaking iOS meant excluding it at three separate autolinking layers and loading it dynamically, so the
                  app degrades gracefully instead of crashing where the native module can't load. I documented the whole
                  architecture for the team.
                 </p>
                 <p className="mb-4" style={{ color: TEXT_PRIMARY }}>
                  I also handle much of the release engineering: resolving iOS production build failures, managing EAS build
                  profiles across four environments, and writing the build and deployment runbooks the team works from.
                  Earlier on I worked alongside another developer on the Terraform/AWS infrastructure and the Clerk
                  authentication layer, including the token refresh and retry logic the admin CMS depends on.
                 </p>
                 <p className="mb-4" style={{ color: TEXT_PRIMARY }}>
                  Reliability work runs through all of it — Sentry crash monitoring, a Notion-backed in-app feedback
                  pipeline, and client-side guards against duplicate requests. With three codebases that deploy together,
                  most of my time goes to keeping changes coordinated and backward compatible.
                 </p>
              </div>

              <ScreenshotCarousel slides={slides} theme={carouselTheme} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveHusky;
