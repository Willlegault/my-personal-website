import { useState } from 'react';
import type { FC } from 'react';
import { FaExternalLinkAlt, FaArrowLeft, FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa';
import sculptIcon from '../assets/icon.png';

const appScreenshot1 = new URL('../assets/IMG_2014.PNG', import.meta.url).href;
const appScreenshot2 = new URL('../assets/IMG_2032.PNG', import.meta.url).href;
const appScreenshot3 = new URL('../assets/IMG_2035.PNG', import.meta.url).href;
const appScreenshot4 = new URL('../assets/IMG_2036.PNG', import.meta.url).href;
const adminScreenshot = new URL('../assets/Screenshot 2026-05-26 at 2.16.36 PM.png', import.meta.url).href;

const Sculpt: FC = () => {
  const [hover, setHover] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: 'User overview',
      caption: 'App-facing screenshot showing the main user experience and the layout direction I worked on.',
      accent: '#ff6a1a',
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

  const currentSlide = slides[activeSlide];

  return (
    <div className="min-h-screen w-full bg-[#232323] pb-20">
      
      <div className="max-w-[1000px] mx-auto px-6 pt-12">
        <a href="/#projects" className="inline-flex items-center text-[#e0e0e0] font-medium mb-8 hover:underline" style={{ transition: 'color 0.2s', color: '#e0e0e0' }} onMouseOver={e => { e.currentTarget.style.color = '#bdbdbd'; }} onMouseOut={e => { e.currentTarget.style.color = '#e0e0e0'; }}>
          <FaArrowLeft className="mr-2" /> Back to Projects
        </a>

        <div className="bg-[#e5e5e5] rounded-3xl shadow-sm overflow-hidden">
          <div className="p-10 md:p-14">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <img src={sculptIcon} alt="Sculpt.ai App Icon" className="w-20 h-20"/>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#ff6a1a' }}>Sculpt.ai</h1>
                <div className="flex flex-wrap gap-2">
                  {['React', 'REST APIs', 'Shadcn UI', 'TypeScript'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-[#353535] text-[#fff] rounded-full text-sm font-medium dark:bg-[#292929] dark:text-[#fff]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-black leading-relaxed">
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h3 className="text-xl font-bold text-black mb-3 border-b-2 border-[#cccccc] pb-2 inline-block">My Role</h3>
                  <p className="text-black">
                    Founding Developer contributing across frontend engineering, product UI, and core user flows for a
                    platform with 400+ active users.
                  </p>
                </div>
                <div>
                   <h3 className="text-xl font-bold text-black mb-3 border-b-2 border-[#cccccc] pb-2 inline-block">Collaboration</h3>
                   <p className="text-black">
                    Worked closely with backend engineers and domain experts to verify algorithms, validate health analytics,
                    and keep implementation aligned across the stack.
                   </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4">What I've Done</h3>
                <p className="mb-4 text-black">
                  I contributed to a React-based web application that turns complex backend health and performance analytics
                  into accessible visual insights. More recently, I’ve been working app-side on UI/UX and frontend
                  features centered around workout logging, exercise entry, push notifications, streak tracking etc...
                </p>
                <p className="mb-4 text-black">
                  Alongside the user-facing application and tools, I've contributed to the internal admin CMS by implementing exercise
                  admin inputs, edit/add exercise flows, and frontend weight storage and calculation, while keeping caching,
                  validation, and data integrity consistent across the codebase.
                </p>
              </div>

              <div className="mb-8">
                 <h3 className="text-xl font-bold text-black mb-4">Technical Execution</h3>
                 <p className="mb-4 text-black">
                  Throughout my work at Sculpt I have focused on modular implementation, building on the existing codebase to reduce redundancy, keep the app
                  extensible, and design with future features in mind through reusable components. Key tools I implemented to help me navigate the extensive
                  codebase quickly were Postman, Mixpanel, AWS Console, and Playwright
                  to validate behavior, monitor issues.
                 </p>
              </div>

              <section className="mb-8 rounded-3xl border border-[#d8d0c8] bg-[#fbfaf8] p-5 md:p-6 shadow-sm">
                <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <div>
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#fff0e8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#b84a10]">
                      <FaImages className="text-[11px]" /> Visual highlights
                    </div>
                    <h2 className="text-2xl font-bold text-black">A quick look at the product</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-black/70">
                      A carousel works well here because it adds visual proof after the story is told, which keeps the page
                      scannable without interrupting the flow of the written sections.
                    </p>
                  </div>
                  <div className="text-sm font-medium text-black/55">
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
                        className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white transition-transform transition-colors hover:-translate-x-0.5 hover:bg-black/65"
                      >
                        <FaChevronLeft className="text-sm" />
                      </button>
                      <div className="h-[620px] w-full max-w-[340px] overflow-hidden rounded-[2rem] border border-white/10 bg-black">
                        <img
                          src={currentSlide.image}
                          alt={currentSlide.imageAlt}
                          className="h-full w-full object-contain bg-black"
                        />
                      </div>
                      <button
                        type="button"
                        aria-label="Next slide"
                        onClick={() => setActiveSlide((index) => (index === slides.length - 1 ? 0 : index + 1))}
                        className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white transition-transform transition-colors hover:translate-x-0.5 hover:bg-black/65"
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

                  <div className="space-y-4 rounded-3xl border border-[#e0d9d1] bg-white p-5">
                    {/* <div className="rounded-2xl border border-[#ece5dc] bg-[#fffaf6] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">Why this helps</p>
                      <p className="mt-2 text-sm leading-6 text-black/75">
                        Screenshot-style visuals make the work easier to scan and give recruiters a faster read on the product
                        quality than text alone.
                      </p>
                    </div> */}
                    <div className="space-y-2">
                      {slides.map((slide, index) => (
                        <button
                          key={slide.title}
                          type="button"
                          onClick={() => setActiveSlide(index)}
                          className={`sculpt-carousel-tile w-full rounded-2xl border px-4 py-3 text-left transition ${index === activeSlide ? 'border-[#ff6a1a] bg-[#fff2ea]' : 'border-[#e8e0d6] bg-white hover:border-[#cfc6bb]'}`}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <span className="font-semibold text-black">{slide.title}</span>
                            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: slide.accent }} />
                          </div>
                          <p className="mt-1 text-sm leading-5 text-black/60">{slide.caption}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Custom button for Visit Sculpt.ai with controlled hover color */}
              <a
                href="https://sculptai.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold transition-colors shadow-md mt-4"
                style={{
                  backgroundColor: hover ? '#bf360c' : '#e65100',
                  color: '#fff',
                  boxShadow: hover ? '0 4px 20px rgba(255,102,0,0.2)' : '0 2px 8px rgba(255,153,0,0.15)',
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Visit Sculpt.ai <FaExternalLinkAlt className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sculpt;
