import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import { FaExternalLinkAlt, FaArrowLeft, FaGithub, FaChevronRight } from 'react-icons/fa';
import ScreenshotCarousel from '../Components/ScreenshotCarousel';
import type { CarouselSlide } from '../Components/ScreenshotCarousel';

import dotniteIcon from '../assets/dotnite-icon.svg';

const replayScreenshot = new URL('../assets/dotnite-replay.png', import.meta.url).href;
const gameScreenshot = new URL('../assets/dotnite-game.png', import.meta.url).href;
const leaderboardScreenshot = new URL('../assets/dotnite-leaderboard.png', import.meta.url).href;
const shopScreenshot = new URL('../assets/dotnite-shop.png', import.meta.url).href;
const lobbyScreenshot = new URL('../assets/dotnite-lobby.png', import.meta.url).href;
const loginScreenshot = new URL('../assets/dotnite-login.png', import.meta.url).href;

/* Design tokens pulled from the app's own login screen: near-black indigo
   ground, the slate-blue CTA, and the white constellation lines. */
const ACCENT = '#5A76B8';
const TEXT_PRIMARY = '#0B1020';
const TEXT_SECONDARY = '#44506B';
const TEXT_MUTED = '#7C879F';
const BORDER_SUBTLE = '#E3E6EE';

/**
 * Stands in for the app's animated Vanta constellation field: a cold indigo
 * night with two faint light sources, so the white card reads as sitting on
 * the same surface the game does.
 */
const PAGE_GRADIENT = [
  'radial-gradient(90% 55% at 50% 0%, rgba(90,118,184,0.20) 0%, rgba(90,118,184,0) 62%)',
  'radial-gradient(70% 45% at 85% 10%, rgba(124,143,214,0.12) 0%, rgba(124,143,214,0) 60%)',
  'linear-gradient(180deg, #0E1024 0%, #12142B 30%, #171A33 100%)',
].join(', ');

const HERO_GRADIENT = [
  'radial-gradient(120% 90% at 62% 16%, rgba(90,118,184,0.55) 0%, rgba(90,118,184,0) 58%)',
  'radial-gradient(90% 70% at 20% 30%, rgba(126,106,196,0.38) 0%, rgba(126,106,196,0) 62%)',
  'radial-gradient(140% 110% at 22% 94%, rgba(8,9,20,0.94) 0%, rgba(8,9,20,0) 60%)',
  'linear-gradient(165deg, #0A0B1A 0%, #1B2044 36%, #37427C 62%, #0C0E1E 100%)',
].join(', ');

const slides: CarouselSlide[] = [
  {
    title: 'Login and entry point',
    caption:
      'The entry screen, over the animated constellation field behind every page.',
    accent: '#3C5390',
    image: loginScreenshot,
    imageAlt: 'Dot.Nite login screen over an animated constellation background',
    note: 'My work',
  },
  {
    title: 'Replay viewer with move analysis',
    caption:
      'Step, rewind, or jump to any move. Each one is re-scored against the position as it actually stood \u2014 best, okay, or bad \u2014 and glows on the board for the verdict.',
    accent: ACCENT,
    image: replayScreenshot,
    imageAlt: 'Dot.Nite replay viewer showing the board, per-player stat summary, and replay transport controls',
    note: 'My work',
  },
  {
    title: 'Ranked leaderboard',
    caption:
      'Bronze to Diamond tiers over the rank system I built, with your own standing pinned on top.',
    accent: '#5EC8E5',
    image: leaderboardScreenshot,
    imageAlt: 'Dot.Nite leaderboard with tier badges, points, and the current player highlighted at rank one',
    note: 'My work',
  },
  {
    title: 'Skin shop',
    caption:
      'Built with a teammate on the storefront while I owned the theming system it sells into. Coins spend without costing rank.',
    accent: '#7C5CD6',
    image: shopScreenshot,
    imageAlt: 'Dot.Nite skin shop showing theme cards with color previews and owned or equipped states',
    note: 'Collaboration',
  },
  {
    title: 'Finished game, both players scored',
    caption:
      'A finished 4×4 board, both players\u2019 boxes scored. Rules enforced server-side.',
    accent: '#B2402A',
    image: gameScreenshot,
    imageAlt: 'Completed Dot.Nite game board with claimed boxes in each player color and a final score of 15 to 1',
    note: 'Live gameplay',
  },
  {
    title: 'Pre-game lobby',
    caption:
      'Pick a color and ready up, with rules, chat, and AI difficulty alongside.',
    accent: '#3F9A6A',
    image: lobbyScreenshot,
    imageAlt: 'Dot.Nite pre-game lobby with a hexagonal color palette, ready button, and AI difficulty selector',
    note: 'Lobby and ready-up',
  },
];



const carouselTheme = {
  accent: ACCENT,
  eyebrowBg: '#EEF1FA',
  eyebrowFg: '#3C5390',
  sectionBg: '#FAFBFD',
  sectionBorder: BORDER_SUBTLE,
  panelBg: '#FFFFFF',
  panelBorder: BORDER_SUBTLE,
  tileActiveBg: '#EEF1FA',
  tileBorder: '#DFE3EE',
  text: TEXT_PRIMARY,
  textMuted: TEXT_SECONDARY,
};

const CODE_STYLE = { backgroundColor: '#EEF1FA', color: '#3C5390' };

/**
 * The technical write-ups, collapsed behind a summary line each. Keeping the
 * full depth but hiding it by default lets a skimmer reach the screenshots
 * while an interested reader still gets the whole argument.
 */
const DEEP_DIVES: { title: string; summary: string; body: ReactNode }[] = [
  {
    title: 'Snapshot-per-move replay enables retroactive move grading',
    summary: 'A data-modeling choice that unlocked the product feature.',
    body: (
      <>
        <p className="mb-3">
          Most game logs store just the moves. This one stores a complete board snapshot alongside every move, plus an
          initial snapshot at game start. That choice is what makes analysis possible after the fact: because each step
          carries the position as it actually stood,{' '}
          <code className="rounded px-1.5 py-0.5 text-[0.85em]" style={CODE_STYLE}>
            rateDotsAndBoxesMove
          </code>{' '}
          can re-score any move without replaying from the beginning — <strong>best</strong> (completes a box),{' '}
          <strong>bad</strong> (draws a third side, gifting the opponent a free box), or <strong>okay</strong> — and the
          replay board renders a colored glow for the verdict. The storage cost buys a feature a move-only log couldn&rsquo;t
          support.
        </p>
        <p>
          I built the generic replay path against the two simpler games on the platform first, so it never became
          coupled to the Dots and Boxes board.
        </p>
      </>
    ),
  },
  {
    title: 'The type system enforces anti-cheat structurally',
    summary: 'Hidden information can\u2019t leak to a client by construction.',
    body: (
      <p>
        Every game declares three types in the shared workspace: <strong>State</strong> (what the server stores),{' '}
        <strong>View</strong> (what a player may see), and <strong>Move</strong> (what a player may send).{' '}
        <strong>View</strong> is a strictly narrower type than <strong>State</strong>, so hidden information can&rsquo;t
        leak to a client by construction — it isn&rsquo;t a runtime check a client could skip. The server also publishes
        the legal move set with every view, so the client renders exactly the playable edges instead of reimplementing
        the rules.
      </p>
    ),
  },
  {
    title: 'Theming via CSS custom properties driven from React context',
    summary: 'One context write restyles the entire app.',
    body: (
      <p>
        <code className="rounded px-1.5 py-0.5 text-[0.85em]" style={CODE_STYLE}>
          SkinProvider
        </code>{' '}
        writes <code className="text-[0.85em]">--skin-header</code>, <code className="text-[0.85em]">--skin-accent</code>,{' '}
        <code className="text-[0.85em]">--skin-body</code>, <code className="text-[0.85em]">--skin-text</code> and
        friends onto <code className="text-[0.85em]">document.documentElement</code> when the equipped skin changes. One
        context write restyles the entire app — no prop-drilling, no re-render cascade through the component tree. The
        gameplay and shop screenshots below are the same build under two different equipped skins.
      </p>
    ),
  },
  {
    title: 'Full feature list',
    summary: 'Everything shipped across the platform in three weeks.',
    body: (
      <ul className="grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
        {[
          'Real-time 2-player Dots and Boxes on a 3\u00d73 / 4\u00d74 / 5\u00d75 board',
          'AI opponent at easy / medium / hard',
          'Pre-game lobby with color selection and ready-gating',
          'In-game chat and a persistent rules reference',
          'Spectator mode for non-players',
          'Move-by-move replay: step, rewind, or jump to any index',
          'Automatic move grading with on-board highlighting',
          'Per-move author, timestamp, and per-turn duration',
          'Filterable game history by outcome, opponent, and date',
          'Stats: boxes per turn, longest streak, win/loss by game type',
          'Ranked ladder \u2014 Bronze to Diamond, four sort modes',
          'Cosmetics shop with owned/equipped states',
          'Forum with threads and comments',
          'Two more games (Nim, Number Guesser) on the same abstraction',
        ].map((feature) => (
          <li key={feature} className="flex gap-2.5">
            <span aria-hidden="true" style={{ color: ACCENT }}>
              \u00b7
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: 'Two-currency economy with a chronological rank floor',
    summary: 'Spending in the shop never costs you rank.',
    body: (
      <p>
        Rank points and spendable coins are tracked as independent balances, so spending in the shop never costs you
        rank. Rank is recomputed in chronological order with a floor of zero, so a losing streak can&rsquo;t push a
        player negative — and a loss at 0 rank correctly displays no penalty instead of −25.
      </p>
    ),
  },
];

const FACTS: { label: string; value: string }[] = [
  { label: 'Timeline', value: '3 weeks, 4 sprints' },
  { label: 'Team', value: '4 developers' },
  { label: 'My share', value: '59 of 115 commits' },
  { label: 'Size', value: '~14,400 lines' },
  { label: 'Tests', value: '25 test files' },
  { label: 'Context', value: 'CS4530, Northeastern' },
];

const DotNite: FC = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="min-h-screen w-full pb-20" style={{ background: PAGE_GRADIENT, backgroundAttachment: 'fixed' }}>
      <div className="max-w-[1000px] mx-auto px-6 pt-12">
        <a
          href="/#projects"
          className="inline-flex items-center text-[#e0e0e0] font-medium mb-8 hover:underline"
          style={{ transition: 'color 0.2s', color: '#e0e0e0' }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#bdbdbd';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#e0e0e0';
          }}
        >
          <FaArrowLeft className="mr-2" /> Back to Projects
        </a>

        <div className="rounded-3xl bg-white shadow-sm overflow-hidden" style={{ border: `1px solid ${BORDER_SUBTLE}` }}>
          {/* Hero band — a CSS night sky in the app's own palette, standing in
              for the Vanta constellation field the real app animates. */}
          <div className="relative overflow-hidden px-10 py-12 md:px-14 md:py-16" style={{ background: HERO_GRADIENT }}>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.08]" />

            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-5">
                <img src={dotniteIcon} alt="Dot.Nite Icon" className="h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20" />
                <h1 className="text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-[48px] md:text-[56px]">
                  Dot.Nite
                </h1>
              </div>
              <p className="mb-6 max-w-2xl text-[17px] leading-relaxed text-white/80">
                Real-time multiplayer Dots and Boxes with move-by-move replay analysis, a ranked ladder, and an
                unlockable-theme economy.
              </p>

              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'React 19', 'Socket.IO', 'Express 5', 'MongoDB', 'Vitest', 'Playwright'].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-sm font-medium text-white/90 backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://summer26-project-group-110.onrender.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold tracking-[-0.005em] text-white transition-all duration-200 hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{
                    backgroundColor: hover ? '#6C89CE' : ACCENT,
                    // Pinned: the site-wide `a:hover` rule would otherwise
                    // tint this on hover.
                    color: '#fff',
                    boxShadow: hover
                      ? '0 2px 4px rgba(0,0,0,0.18), 0 12px 36px rgba(90,118,184,0.45)'
                      : '0 1px 2px rgba(0,0,0,0.15), 0 8px 28px rgba(90,118,184,0.35)',
                  }}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  Play the Demo
                  <FaExternalLinkAlt className="text-[11px] transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://github.com/Willlegault/boardgame-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-[14px] font-medium tracking-[-0.005em] backdrop-blur-sm transition-all duration-200 hover:border-white/25 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  style={{ color: '#fff' }}
                >
                  <FaGithub className="text-[14px]" /> View Source
                </a>
              </div>

              {/* Cold-start warning — the demo is on Render's free tier and
                  takes ~31s to wake, which reads as "broken" without this. */}
              <p className="mt-4 text-[13px] leading-relaxed text-white/60">
                Heads up: the demo is hosted on Render's free tier and takes about 30 seconds to cold-start. Sign in
                with <span className="font-medium text-white/80">user0</span> /{' '}
                <span className="font-medium text-white/80">pwd0000</span>.
              </p>
            </div>
          </div>

          <div className="p-10 md:p-14">
            {/* At-a-glance facts */}
            <div className="mb-12 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <div
                    className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: TEXT_MUTED }}
                  >
                    {fact.label}
                  </div>
                  <div className="text-[15px] font-medium" style={{ color: TEXT_PRIMARY }}>
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none leading-relaxed" style={{ color: TEXT_SECONDARY }}>
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h3
                    className="mb-3 inline-block pb-2 text-xl font-semibold"
                    style={{ color: TEXT_PRIMARY, borderBottom: `2px solid ${ACCENT}`, letterSpacing: '-0.025em' }}
                  >
                    My Role
                  </h3>
                  <p style={{ color: TEXT_SECONDARY }}>
                    Sole or primary author of everything downstream of a finished game: replay and move grading, game
                    history and stats, the ranked leaderboard and its rank math, and the theming system.
                  </p>
                </div>
                <div>
                  <h3
                    className="mb-3 inline-block pb-2 text-xl font-semibold"
                    style={{ color: TEXT_PRIMARY, borderBottom: `2px solid ${ACCENT}`, letterSpacing: '-0.025em' }}
                  >
                    Collaboration
                  </h3>
                  <p style={{ color: TEXT_SECONDARY }}>
                    Built with Owen Mathay (board and server-side rules), Alison Han (shop UI), and Aadarrsh Sivakumar
                    (AI opponent).
                  </p>
                </div>
              </div>

              {/* Technical detail collapsed by default: a recruiter skimming for
                  screenshots shouldn't have to scroll past four essays, but the
                  depth stays one click away for anyone who wants it. */}
              <div className="mb-10">
                <div
                  className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: TEXT_MUTED }}
                >
                  Technical deep dives
                </div>
                <div className="divide-y" style={{ borderColor: BORDER_SUBTLE }}>
                  {DEEP_DIVES.map((item) => (
                    <details key={item.title} className="deep-dive group py-3">
                      <summary className="flex items-start gap-3 py-1">
                        <FaChevronRight
                          className="deep-dive-chevron mt-[5px] flex-shrink-0 text-[11px]"
                          style={{ color: ACCENT }}
                        />
                        <span>
                          <span className="text-[16px] font-semibold" style={{ color: TEXT_PRIMARY }}>
                            {item.title}
                          </span>
                          <span className="mt-0.5 block text-[14px]" style={{ color: TEXT_MUTED }}>
                            {item.summary}
                          </span>
                        </span>
                      </summary>
                      <div className="pl-[26px] pr-2 pt-3 text-[15px] leading-relaxed" style={{ color: TEXT_SECONDARY }}>
                        {item.body}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              <div id="dotnite-highlights" className="scroll-mt-24">
                <ScreenshotCarousel slides={slides} theme={carouselTheme} orientation="landscape" />
              </div>

              {/* Honest-engineering note — the brief explicitly flags this as
                  worth including, and corrects three claims the report got
                  wrong. */}
              <section
                className="rounded-3xl border p-5 shadow-sm md:p-6"
                style={{ backgroundColor: '#FAFBFD', borderColor: BORDER_SUBTLE }}
              >
                <div
                  className="mb-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ backgroundColor: '#EEF1FA', color: '#3C5390' }}
                >
                  Auditing my own work
                </div>

                <h3 className="mb-3 mt-2 text-xl font-semibold" style={{ color: TEXT_PRIMARY, letterSpacing: '-0.025em' }}>
                  A bug I found six weeks later
                </h3>
                <p className="mb-4" style={{ color: TEXT_SECONDARY }}>
                  Auditing this codebase after the course ended, I found our own project report was wrong: we claimed
                  bot games don't affect rank, but neither{' '}
                  <code className="text-[0.85em]">getPlayerStatsByUsername</code> nor{' '}
                  <code className="text-[0.85em]">getLeaderboard</code> filters AI games out of the calculation — so
                  beating the easy bot pays the same +25 rank as beating a person. A real leaderboard-integrity bug,
                  small fix, still open.
                </p>
                <p className="text-[15px]" style={{ color: TEXT_MUTED }}>
                  Also unfinished: equipped and owned skins aren't persisted, so they reset to Dark Mode on reload.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DotNite;
