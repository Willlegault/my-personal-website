import { Fragment } from 'react';
import type { FC, ReactNode } from 'react';
import { FaArrowLeft, FaGithub, FaChevronRight } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { GiDna1 } from 'react-icons/gi';
import VantaBackground from '../Components/VantaBackground';
import ScreenshotCarousel from '../Components/ScreenshotCarousel';
import type { CarouselSlide } from '../Components/ScreenshotCarousel';

const inputScreenshot = new URL('../assets/gva-input.jpg', import.meta.url).href;
const founderScreenshot = new URL('../assets/gva-founder-explained.jpg', import.meta.url).href;
const multiChartsScreenshot = new URL('../assets/gva-multi-charts.jpg', import.meta.url).href;
const multiVariantsScreenshot = new URL('../assets/gva-multi-variants.jpg', import.meta.url).href;

/* Design tokens: a lab bench teal on a deep green, so the page reads as life
   science rather than reusing another project's palette. */
const ACCENT = '#0F9F8F';
const ACCENT_DEEP = '#0B6F66';
const ACCENT_TINT = '#E6F5F2';
const TEXT_PRIMARY = '#0A1A18';
const TEXT_SECONDARY = '#3F524F';
const TEXT_MUTED = '#748784';
const BORDER_SUBTLE = '#E0E8E6';

const HERO_GRADIENT = [
  'radial-gradient(120% 90% at 64% 14%, rgba(15,159,143,0.55) 0%, rgba(15,159,143,0) 58%)',
  'radial-gradient(90% 70% at 18% 30%, rgba(64,140,190,0.30) 0%, rgba(64,140,190,0) 62%)',
  'radial-gradient(140% 110% at 22% 94%, rgba(4,12,11,0.94) 0%, rgba(4,12,11,0) 60%)',
  'linear-gradient(165deg, #04100F 0%, #0B3330 36%, #136B62 62%, #061412 100%)',
].join(', ');

/* Captured from the running app with live ClinVar lookups. */
const slides: CarouselSlide[] = [
  {
    title: 'Sequence input',
    caption: 'Pick a reference, paste a sequence or load the 185delAG demo, and analyze.',
    accent: ACCENT,
    image: inputScreenshot,
    imageAlt: 'Genomic Variant Analyzer input form with the BRCA1 reference selected and the demo sequence loaded',
    note: 'My work',
  },
  {
    title: 'A founder mutation, explained',
    caption:
      'The BRCA1 founder deletion, named c.68_69del under HGVS rules and matched to ClinVar record 17662 (Pathogenic), with the mechanism explained.',
    accent: '#F87171',
    image: founderScreenshot,
    imageAlt: 'Result for BRCA1 c.68_69del showing pathogenic ClinVar classification, frameshift chart, and the expanded explanation',
    note: 'My work',
  },
  {
    title: 'Three variants at once',
    caption: 'One query with a synonymous, a nonsense, and a missense change, summarized by ClinVar classification and protein effect.',
    accent: '#FACC15',
    image: multiChartsScreenshot,
    imageAlt: 'Results summary for three BRCA1 variants with a ClinVar classification donut chart and an effect on protein bar chart',
    note: 'My work',
  },
  {
    title: 'Codon detail for each variant',
    caption:
      'Each call shows its codon and amino acid change: p.Ser4= (Likely benign), p.Gln12Ter and p.Cys61Gly (both Pathogenic).',
    accent: '#4ADE80',
    image: multiVariantsScreenshot,
    imageAlt: 'Variant cards for c.12T>C, c.34C>T, and c.181T>G with codon changes, amino acid changes, and ClinVar records',
    note: 'My work',
  },
];

const carouselTheme = {
  accent: ACCENT,
  eyebrowBg: ACCENT_TINT,
  eyebrowFg: ACCENT_DEEP,
  sectionBg: '#FAFCFB',
  sectionBorder: BORDER_SUBTLE,
  panelBg: '#FFFFFF',
  panelBorder: BORDER_SUBTLE,
  tileActiveBg: ACCENT_TINT,
  tileBorder: '#D7E6E3',
  text: TEXT_PRIMARY,
  textMuted: TEXT_SECONDARY,
};

const FACTS: { label: string; value: string }[] = [
  { label: 'Timeline', value: 'May 2026 to present' },
  { label: 'Type', value: 'Personal project, built solo' },
  { label: 'Stack', value: 'Python, Biopython, Flask, Next.js' },
  { label: 'Data', value: '200,957 ClinVar variants' },
];

/** The analysis path a submitted sequence takes, in order. */
const PIPELINE = ['Align', 'Call variants', 'Classify effect', 'Name in HGVS', 'Check ClinVar', 'Explain'];

const SPLITS: { name: string; variants: string; genes: string; pathogenic: string }[] = [
  { name: 'Train', variants: '141,607', genes: '10,778', pathogenic: '29.8%' },
  { name: 'Validation', variants: '28,342', genes: '2,275', pathogenic: '30.4%' },
  { name: 'Test', variants: '31,008', genes: '2,228', pathogenic: '31.3%' },
];

const DETAILS: { title: string; summary: string; body: ReactNode }[] = [
  {
    title: 'The training dataset',
    summary: '200,957 labeled variants across 15,281 genes.',
    body: (
      <>
        <p className="mb-3">
          To prepare for a classifier, I wrote a pipeline that streams ClinVar&rsquo;s full 450 MB release and keeps
          single base changes that swap one amino acid, labeled Pathogenic or Benign with at least one review star.
          Variants are split by gene, so the model is always tested on genes it never saw in training.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[14px]">
            <thead>
              <tr style={{ color: TEXT_MUTED }}>
                <th className="py-2 pr-4 font-semibold">Split</th>
                <th className="py-2 pr-4 font-semibold">Variants</th>
                <th className="py-2 pr-4 font-semibold">Genes</th>
                <th className="py-2 font-semibold">Pathogenic</th>
              </tr>
            </thead>
            <tbody>
              {SPLITS.map((s) => (
                <tr key={s.name} className="border-t" style={{ borderColor: BORDER_SUBTLE }}>
                  <td className="py-2 pr-4 font-medium" style={{ color: TEXT_PRIMARY }}>
                    {s.name}
                  </td>
                  <td className="py-2 pr-4 tabular-nums">{s.variants}</td>
                  <td className="py-2 pr-4 tabular-nums">{s.genes}</td>
                  <td className="py-2 tabular-nums">{s.pathogenic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    title: 'What it doesn’t do yet',
    summary: 'Current limitations.',
    body: (
      <ul className="grid gap-y-1.5">
        {[
          'Only one reference so far: the first 192 bp of BRCA1.',
          'Neighboring changes are reported separately, not merged into one variant.',
          'Positions are relative to the reference fragment, not the full transcript.',
          'Results are educational, with a link to each ClinVar record to check the evidence.',
        ].map((item) => (
          <li key={item} className="flex gap-2.5">
            <span aria-hidden="true" style={{ color: ACCENT }}>
              {'·'}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
];

const NEXT_STEPS: { title: string; body: string }[] = [
  {
    title: 'Train a first classifier',
    body: 'Predict whether a missense variant is pathogenic from the ClinVar dataset, tested on genes the model has never seen.',
  },
  {
    title: 'Add protein structure with AlphaFold',
    body: 'I’ve been researching AlphaFold and plan to place each variant on its predicted structure, so the model can tell a change in the folded core or a binding site from one on a flexible surface. C61G, shown above, replaces a cysteine that holds a zinc ion in BRCA1, which makes it a good first test.',
  },
  {
    title: 'Learn how biotech teams build ML pipelines',
    body: 'Reproducible data pulls, fair train and test splits, evaluation that accounts for rare positives, and results others can rerun. This is the kind of work I want to do in a biotech role.',
  },
];

const SectionHeading: FC<{ children: ReactNode }> = ({ children }) => (
  <h3
    className="mb-3 inline-block pb-2 text-xl font-semibold"
    style={{ color: TEXT_PRIMARY, borderBottom: `2px solid ${ACCENT}`, letterSpacing: '-0.025em' }}
  >
    {children}
  </h3>
);

const Eyebrow: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: TEXT_MUTED }}>
    {children}
  </div>
);

const GenomicVariantAnalyzer: FC = () => {
  return (
    <div className="relative min-h-screen w-full pb-20">
      {/* The same animated Vanta cell field the analyzer app runs behind its UI. */}
      <VantaBackground />
      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 pt-12">
        <a
          href="/#projects"
          className="inline-flex items-center font-medium mb-8 hover:underline"
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
          <div className="relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-16" style={{ background: HERO_GRADIENT }}>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.08]" />

            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-4 sm:gap-5">
                <div
                  className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl sm:h-16 sm:w-16"
                  style={{ backgroundColor: 'rgba(15,159,143,0.22)', border: '1px solid rgba(255,255,255,0.14)' }}
                >
                  <GiDna1 className="text-[30px] text-white sm:text-[36px]" />
                </div>
                <h1 className="text-[32px] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-[44px] md:text-[52px]">
                  Genomic Variant Analyzer
                </h1>
              </div>
              <p className="mb-6 max-w-2xl text-[17px] leading-relaxed text-white/80">
                A bioinformatics tool I built to teach myself sequence analysis. Paste a DNA sequence, and it finds each
                variant against a reference gene, predicts its effect on the protein, and pulls its clinical
                classification from ClinVar.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Python', 'Biopython', 'Flask', 'ClinVar API', 'pandas', 'Next.js', 'TypeScript', 'Recharts'].map((skill) => (
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
                  href="https://github.com/Willlegault/genomic-variant-analyzer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold tracking-[-0.005em] transition-all duration-200 hover:-translate-y-[1px] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{
                    backgroundColor: ACCENT,
                    // Pinned: the site wide `a:hover` rule would otherwise
                    // tint this on hover.
                    color: '#fff',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.15), 0 8px 28px rgba(15,159,143,0.35)',
                  }}
                >
                  <FaGithub className="text-[14px]" /> View Source
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 md:p-14">
            <div className="mb-10 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: TEXT_MUTED }}>
                    {fact.label}
                  </div>
                  <div className="text-[15px] font-medium" style={{ color: TEXT_PRIMARY }}>
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="leading-relaxed" style={{ color: TEXT_SECONDARY }}>
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <SectionHeading>Why I Built It</SectionHeading>
                  <p>
                    I wanted a project that would make me practice core bioinformatics skills: aligning sequences,
                    reasoning about how a DNA change affects a protein, and working with real clinical data. Variant
                    interpretation draws on both my computer science and biology coursework, so it was a good place to
                    start.
                  </p>
                </div>
                <div>
                  <SectionHeading>What I&rsquo;m Learning</SectionHeading>
                  <p>
                    How alignment choices change the way a variant is named, how to query NCBI&rsquo;s public databases
                    responsibly, and how to turn ClinVar into a clean training set for machine learning.
                  </p>
                </div>
              </div>

              {/* One compact row instead of a card per step. */}
              <div className="mb-12">
                <Eyebrow>How it works</Eyebrow>
                <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
                  {PIPELINE.map((step, i) => (
                    <Fragment key={step}>
                      <li
                        className="rounded-full border px-3 py-1 text-[13px] font-medium"
                        style={{ borderColor: BORDER_SUBTLE, backgroundColor: '#FAFCFB', color: TEXT_PRIMARY }}
                      >
                        {step}
                      </li>
                      {i < PIPELINE.length - 1 ? (
                        <FiArrowRight aria-hidden="true" className="text-[13px]" style={{ color: ACCENT }} />
                      ) : null}
                    </Fragment>
                  ))}
                </ol>
              </div>

              <div id="gva-highlights" className="mb-12 scroll-mt-24">
                <ScreenshotCarousel slides={slides} theme={carouselTheme} eyebrow="The app in action" orientation="landscape" />
              </div>

              <section
                className="mb-10 rounded-3xl border p-5 shadow-sm md:p-6"
                style={{ backgroundColor: '#FAFCFB', borderColor: BORDER_SUBTLE }}
              >
                <div
                  className="mb-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ backgroundColor: ACCENT_TINT, color: ACCENT_DEEP }}
                >
                  Auditing my own work
                </div>
                <h3 className="mb-3 mt-2 text-xl font-semibold" style={{ color: TEXT_PRIMARY, letterSpacing: '-0.025em' }}>
                  The bug that taught me the most
                </h3>
                <p>
                  My demo labeled a known pathogenic BRCA1 mutation as &ldquo;Likely benign.&rdquo; The variant was named
                  at the wrong position, and the ClinVar lookup trusted the first search result, which was a different
                  variant. I fixed the naming to follow the HGVS standard, and the lookup now accepts only an exact match
                  and reports &ldquo;not found&rdquo; otherwise.
                </p>
              </section>

              <div className="mb-12">
                <Eyebrow>More detail</Eyebrow>
                <div className="divide-y" style={{ borderColor: BORDER_SUBTLE }}>
                  {DETAILS.map((item) => (
                    <details key={item.title} className="deep-dive group py-3">
                      <summary className="flex items-start gap-3 py-1">
                        <FaChevronRight className="deep-dive-chevron mt-[5px] flex-shrink-0 text-[11px]" style={{ color: ACCENT }} />
                        <span>
                          <span className="text-[16px] font-semibold" style={{ color: TEXT_PRIMARY }}>
                            {item.title}
                          </span>
                          <span className="mt-0.5 block text-[14px]" style={{ color: TEXT_MUTED }}>
                            {item.summary}
                          </span>
                        </span>
                      </summary>
                      <div className="pl-[26px] pr-2 pt-3 text-[15px] leading-relaxed">{item.body}</div>
                    </details>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading>What&rsquo;s Next</SectionHeading>
                <p className="mb-6">
                  This project is my starting point for machine learning in biology, and I&rsquo;m learning the tools as I
                  go.
                </p>
                <ol className="grid gap-4">
                  {NEXT_STEPS.map((item, i) => (
                    <li key={item.title} className="flex gap-4">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold"
                        style={{ backgroundColor: ACCENT_TINT, color: ACCENT_DEEP }}
                      >
                        {i + 1}
                      </span>
                      <div>
                        <div className="mb-1 text-[16px] font-semibold" style={{ color: TEXT_PRIMARY }}>
                          {item.title}
                        </div>
                        <p className="text-[15px] leading-relaxed">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenomicVariantAnalyzer;
