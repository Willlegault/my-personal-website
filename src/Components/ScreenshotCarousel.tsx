import { useState } from 'react';
import type { FC } from 'react';
import { FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa';

export type CarouselSlide = {
  title: string;
  caption: string;
  accent: string;
  image: string;
  imageAlt: string;
  note: string;
};

type Theme = {
  /** Accent used for the active tile border and eyebrow text. */
  accent: string;
  /** Eyebrow pill background. */
  eyebrowBg: string;
  /** Eyebrow pill text. */
  eyebrowFg: string;
  /** Outer section surface + border. */
  sectionBg: string;
  sectionBorder: string;
  /** Tile column surface + border. */
  panelBg: string;
  panelBorder: string;
  /** Active tile fill. */
  tileActiveBg: string;
  tileBorder: string;
  /** Body copy color inside the tile column. */
  text: string;
  textMuted: string;
};

type Props = {
  slides: CarouselSlide[];
  theme: Theme;
  eyebrow?: string;
};

const ScreenshotCarousel: FC<Props> = ({ slides, theme, eyebrow = 'Visual highlights' }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  if (slides.length === 0) return null;

  const currentSlide = slides[activeSlide];

  return (
    <section
      className="mb-8 rounded-3xl border p-5 shadow-sm md:p-6"
      style={{ backgroundColor: theme.sectionBg, borderColor: theme.sectionBorder }}
    >
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <div
            className="mb-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ backgroundColor: theme.eyebrowBg, color: theme.eyebrowFg }}
          >
            <FaImages className="text-[11px]" /> {eyebrow}
          </div>
        </div>
        <div className="text-sm font-medium" style={{ color: theme.textMuted }}>
          {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="relative overflow-hidden rounded-3xl bg-[#111111] p-4 md:p-5">
          <div className="mb-4 flex items-center justify-between text-white/80">
            <span className="text-sm font-medium">{currentSlide.title}</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs">{currentSlide.note}</span>
          </div>
          <div className="mx-auto flex w-full max-w-[430px] items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => setActiveSlide((index) => (index === 0 ? slides.length - 1 : index - 1))}
              className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white transition-colors transition-transform hover:-translate-x-0.5 hover:bg-black/65"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <div className="h-[620px] w-full max-w-[340px] overflow-hidden rounded-[2rem] border border-white/10 bg-black">
              <img
                src={currentSlide.image}
                alt={currentSlide.imageAlt}
                className="h-full w-full bg-black object-contain"
              />
            </div>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => setActiveSlide((index) => (index === slides.length - 1 ? 0 : index + 1))}
              className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white transition-colors transition-transform hover:translate-x-0.5 hover:bg-black/65"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                aria-label={`Show slide ${index + 1}: ${slide.title}`}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all ${index === activeSlide ? 'w-10 bg-white' : 'w-2.5 bg-white/35 hover:bg-white/60'}`}
              />
            ))}
          </div>
        </div>

        <div
          className="space-y-4 rounded-3xl border p-5"
          style={{ backgroundColor: theme.panelBg, borderColor: theme.panelBorder }}
        >
          <div className="space-y-2">
            {slides.map((slide, index) => {
              const isActive = index === activeSlide;
              return (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className="sculpt-carousel-tile w-full rounded-2xl border px-4 py-3 text-left transition"
                  style={{
                    borderColor: isActive ? theme.accent : theme.tileBorder,
                    backgroundColor: isActive ? theme.tileActiveBg : theme.panelBg,
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold" style={{ color: theme.text }}>{slide.title}</span>
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: slide.accent }} />
                  </div>
                  <p className="mt-1 text-sm leading-5" style={{ color: theme.textMuted }}>{slide.caption}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotCarousel;
