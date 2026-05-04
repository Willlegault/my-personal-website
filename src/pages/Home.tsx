import { useEffect, useState } from 'react';
import AOS from 'aos';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import Header from '../Components/Header';
// import { usePortfolioMode } from '../context/PortfolioModeContext'; // Preserved for filter feature
import summitAppIcon from '../assets/summit-app-icon.png';
import huskyBlackIcon from '../assets/husky_black.png';
import sculptIcon from '../assets/icon.png';

// Preserved for biotech/SWE filter feature
// const SWE_SKILLS = new Set(['Java', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Kotlin', 'MongoDB', 'Firebase', 'Express', 'Supabase', 'AWS', 'Object-Oriented Design', 'Cloud Architecture']);
// const BIOTECH_SKILLS = new Set(['Python', 'Biostatistics']);
// function skillClass(skill: string, mode: 'swe' | 'biotech'): string {
//   if (!SWE_SKILLS.has(skill) && !BIOTECH_SKILLS.has(skill)) return '';
//   if (mode === 'swe' && SWE_SKILLS.has(skill)) return '';
//   if (mode === 'biotech' && BIOTECH_SKILLS.has(skill)) return '';
//   return 'opacity-25 scale-95';
// }

const Home: FC = () => {
  // const { mode } = usePortfolioMode(); // Preserved for filter feature
  const [scrollActivated, setScrollActivated] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const projectNames = ['Active Husky', 'Sculpt.ai', 'Summit: Debt Relief', 'Sophia: Philosophical Journal', 'Cloud Web App', 'Explore on GitHub'];

  useEffect(() => {
    const container = document.getElementById('parallax-root');
    if (!container) return;
    const onScroll = () => {
      AOS.refresh();
      const containerRect = container.getBoundingClientRect();
      const containerMid = containerRect.top + containerRect.height / 2;
      const tiles = document.querySelectorAll('[data-project-index]');
      let closest = 0;
      let minDist = Infinity;
      tiles.forEach((tile) => {
        const rect = tile.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - containerMid);
        if (dist < minDist) {
          minDist = dist;
          closest = Number((tile as HTMLElement).dataset.projectIndex);
        }
      });
      setActiveProject(closest);
    };
    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToProject = (index: number) => {
    const el = document.querySelector(`[data-project-index="${index}"]`) as HTMLElement;
    const container = document.getElementById('parallax-root');
    if (!el || !container) return;
    const elTop = el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop;
    const centerOffset = elTop - container.clientHeight / 2 + el.offsetHeight / 2;
    container.scrollTo({ top: centerOffset, behavior: 'smooth' });
  };

  const handleScrollClick = () => {
    setScrollActivated(true);
    setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 300);
    setTimeout(() => setScrollActivated(false), 900);
  };


  const projectTiles = [
    <Link to="/active-husky" className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-lg hover:border-indigo-400 dark:bg-slate-800 dark:border-slate-700 cursor-pointer">
      <div className="flex items-center mb-3">
        <img src={huskyBlackIcon} alt="Northeastern Husky Icon" className="w-10 h-10 mr-4"/>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">Active Husky <FiArrowRight className="text-indigo-400 text-xl" /></h3>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">Co-op</span>
        </div>
      </div>
      <p className="text-sm text-indigo-500 font-semibold mb-3">React Native | AWS | Vercel | Node.js</p>
      <p className="text-slate-600 mb-2 leading-[1.7] dark:text-slate-400">
        A fitness class scheduling and tracking platform built for Northeastern University students, supporting 6,000+ active users across iOS and Android.
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400 italic">Role: Lead Full-Stack Developer — mobile app and admin CMS, end-to-end.</p>
    </Link>,
    <Link to="/sculpt" className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-lg hover:border-indigo-400 cursor-pointer dark:bg-slate-800 dark:border-slate-700">
      <div className="flex items-center mb-3">
        <img src={sculptIcon} alt="Sculpt.ai App Icon" className="w-10 h-10 mr-4"/>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">Sculpt.ai <FiArrowRight className="text-indigo-400 text-xl" /></h3>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">Founding Developer</span>
        </div>
      </div>
      <p className="text-sm text-indigo-500 font-semibold mb-3">React | REST APIs | Shadcn UI</p>
      <p className="text-slate-600 mb-2 leading-[1.7] dark:text-slate-400">
        A fitness and dietary analytics platform for paid users, translating complex health data into professional-grade visual insights.
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400 italic">Role: Founding Developer — user-facing app, internal admin interface, and health analytics visualization. 400+ active users.</p>
    </Link>,
    <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-between h-full dark:bg-slate-800 dark:border-slate-700">
      <div className="flex items-center mb-3">
        <img src={summitAppIcon} alt="Summit App Icon" className="w-10 h-10 mr-4"/>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Summit: Debt Relief</h3>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">Hackathon</span>
        </div>
      </div>
      <p className="text-sm text-indigo-500 font-semibold mb-3">React Native | MongoDB | JavaScript | Node.js</p>
      <p className="text-slate-600 mb-6 leading-[1.7] dark:text-slate-400">
        A demo app featuring an AI chatbot, user onboarding, and a MongoDB-backed API for data storage, showcasing rapid prototyping and development.
      </p>
    </div>,
    <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-between h-full dark:bg-slate-800 dark:border-slate-700">
      <div className="mb-3">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Sophia: Philosophical Journal</h3>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">Hackathon</span>
      </div>
      <p className="text-sm text-indigo-500 font-semibold mb-3">React.js | Supabase | Node.js & Express.js</p>
      <p className="text-slate-600 mb-6 leading-[1.7] dark:text-slate-400">
        A mental health journaling app with secure authentication, CRUD operations for entries, and progress tracking via a calendar view.
      </p>
    </div>,
    <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-between h-full dark:bg-slate-800 dark:border-slate-700">
      <div className="mb-3">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Cloud Web Application</h3>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300">Personal</span>
      </div>
      <p className="text-sm text-indigo-500 font-semibold mb-3">AWS | SQL | Shell</p>
      <p className="text-slate-600 mb-6 leading-[1.7] dark:text-slate-400">
        A scalable web app on AWS using EC2, S3, and RDS, focusing on cloud architecture, performance, and cost-effective resource management.
      </p>
    </div>,
    <a
      href="https://github.com/Willlegault"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-center items-center h-full text-center hover:shadow-lg hover:border-indigo-400 dark:bg-slate-800 dark:border-slate-700"
    >
      <FaGithub className="text-5xl mb-4 text-slate-800 dark:text-slate-200" />
      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Explore My Projects</h3>
      <p className="text-slate-600 mt-2 dark:text-slate-400">View my repositories and contributions on GitHub.</p>
    </a>,
  ];

  return (
    <>
      <Header />
      <div id="parallax-root" className="parallax-root">

      {/* Hero Section */}
      <section className="hero-section hero-parallax min-h-[80vh] flex items-center justify-center pt-20 relative bg-slate-50 dark:bg-slate-900">
        {/* Drifting blobs with CSS parallax */}
        <div className="blob-1 absolute -top-40 -left-40 w-[550px] h-[550px] bg-indigo-300/25 dark:bg-indigo-500/15 blur-3xl" />
        <div className="blob-2 absolute -top-20 -right-40 w-[450px] h-[450px] bg-emerald-300/20 dark:bg-emerald-500/10 blur-3xl" />
        <div className="blob-3 absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-300/20 dark:bg-violet-500/10 blur-3xl" />
        <div className="hero-noise" />

        <div className="max-w-[1100px] mx-auto relative z-10 px-6 text-center">
          <div>
            <h1 className="text-6xl md:text-7xl leading-tight font-extrabold mb-6 pb-2 tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-600 bg-clip-text text-transparent dark:from-slate-50 dark:to-indigo-300">
              William D. Legault
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed dark:text-slate-400">
              Computer Science & Biology Student | Full-Stack Developer
            </p>
            <p className="text-base text-slate-600 mt-4 font-medium dark:text-slate-400">
              Available: April - December 2026 | Boston, MA
            </p>

          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 inset-x-0 flex justify-center animate-bounce">
          <button
            tabIndex={-1}
            onClick={handleScrollClick}
            className={`btn-ghost flex flex-col items-center text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer${scrollActivated ? ' scroll-activate' : ''}`}
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <FiChevronDown className="text-lg" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex gap-16 items-start">
            {/* Sticky left panel */}
            <div className="w-80 shrink-0 sticky top-24 self-start pt-20 pb-10">
              <h2 className="text-5xl font-extrabold mb-8 tracking-tight text-slate-900 dark:text-slate-50">About Me</h2>
              <p className="text-slate-600 leading-[1.7] text-lg dark:text-slate-400">
                I'm a Computer Science and Biology student at Northeastern University, passionate about bridging technology and life sciences. I specialize in full-stack development, mobile apps, and cloud architecture, focusing on scalable, user-centered solutions.
              </p>
            </div>
            {/* Scrollable right panel */}
            <div className="flex-1 py-40">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-50">Education</h3>
                <p className="font-semibold text-lg text-slate-900 dark:text-slate-50">B.S. in Computer Science & Biology</p>
                <p className="text-slate-600 mb-3 dark:text-slate-400">Northeastern University | May 2027</p>
                <h4 className="font-semibold text-md text-slate-800 dark:text-slate-300">Key Coursework:</h4>
                <p className="text-slate-600 text-sm mt-1 dark:text-slate-400">
                  Database Design, Cloud Computing, Algorithms & Data Structures, Cybersecurity, Genetics and Molecular Biology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section id="skills" className="pt-20 pb-10 px-6 relative scroll-mt-24">
        <div className="max-w-[1100px] mx-auto relative z-10" data-aos="fade-up">
          <h2 className="text-5xl font-extrabold mb-10 text-center tracking-tight text-slate-900 dark:text-slate-50">Technical Skills</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-center text-slate-900 dark:text-slate-50 border-b pb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Java', 'Python', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Kotlin'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-center text-slate-900 dark:text-slate-50 border-b pb-2">Frameworks & Tools</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Node.js', 'MongoDB', 'SQLite', 'Firebase', 'Express', 'Supabase', 'Git', 'AWS', 'Postman', 'Figma'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-center text-slate-900 dark:text-slate-50 border-b pb-2">Relevant Knowledge</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Object-Oriented Design', 'Data Structures', 'Cloud Architecture', 'Cybersecurity', 'Biostatistics'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex gap-16 items-start">
            {/* Sticky left panel */}
            <div className="w-64 shrink-0 sticky top-24 self-start pt-20 pb-10 flex flex-col">
              <h2 className="text-5xl font-extrabold mb-3 tracking-tight text-slate-900 dark:text-slate-50">Projects</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-10">Select a project to explore it in detail.</p>
              <nav className="flex flex-col gap-1">
                {projectNames.map((name, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToProject(i)}
                    className={`btn-ghost text-left flex items-center gap-3 py-2 pl-3 border-l-2 transition-all duration-200 ${
                      activeProject === i
                        ? 'border-indigo-500 text-slate-900 dark:text-slate-50 font-semibold'
                        : 'border-transparent text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                    }`}
                  >
                    <span className="text-xs w-5 shrink-0 opacity-60">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm">{name}</span>
                  </button>
                ))}
              </nav>
            </div>
            {/* Scrollable right tiles */}
            <div className="flex-1 py-8 flex flex-col gap-6">
              {projectTiles.map((tile, index) => (
                <div key={index} data-project-index={index} data-aos="fade-up">
                  {tile}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    {/* Social Icons Footer */}
    <footer className="w-full flex flex-col items-center justify-center py-10 bg-transparent">
      <div className="flex gap-8">
        <a
          href="www.linkedin.com/in/william-legault-a1426b2a9"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-slate-500 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white text-3xl transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:Willlegault24@gmail.com"
          aria-label="Gmail"
          className="text-slate-500 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white text-3xl transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>
      <span className="mt-4 text-xs text-slate-500 dark:text-slate-400">&copy; {new Date().getFullYear()} William Legault</span>
    </footer>
      </div>
    </>
  );
};

export default Home;
