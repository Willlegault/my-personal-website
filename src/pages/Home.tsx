import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import Header from '../Components/Header';
import summitAppIcon from '../assets/summit-app-icon.png';
import huskyBlackIcon from '../assets/husky_black.png';
import sculptIcon from '../assets/icon.png';

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center pt-20 relative bg-[radial-gradient(at_0%_0%,rgba(99,102,241,0.15)_0px,transparent_50%),radial-gradient(at_100%_0%,rgba(16,185,129,0.1)_0px,transparent_50%),radial-gradient(at_100%_100%,rgba(244,63,94,0.1)_0px,transparent_50%),radial-gradient(at_0%_100%,rgba(139,92,246,0.15)_0px,transparent_50%)] bg-slate-50 dark:bg-slate-900">
        <div className="max-w-[1100px] mx-auto relative z-10 px-6 text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-6xl md:text-7xl leading-tight font-extrabold mb-6 pb-2 tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-600 bg-clip-text text-transparent dark:from-slate-50 dark:to-indigo-300">
              William D. Legault
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed dark:text-slate-400">
              Computer Science & Biology Student | Full-Stack Developer
            </p>
            <p className="text-base text-slate-600 mt-4 font-medium dark:text-slate-400">
              Available: April - December 2026 | Boston, MA
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pt-20 pb-10 px-6 scroll-mt-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-5xl font-extrabold mb-10 text-center tracking-tight text-slate-900 dark:text-slate-50">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
             <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-50">Education</h3>
              <p className="font-semibold text-lg text-slate-900 dark:text-slate-50">B.S. in Computer Science & Biology</p>
              <p className="text-slate-600 mb-3 dark:text-slate-400">Northeastern University | May 2027</p>
              <h4 className="font-semibold text-md text-slate-800 dark:text-slate-300">Key Coursework:</h4>
              <p className="text-slate-600 text-sm mt-1 dark:text-slate-400">
                Database Design, Cloud Computing, Algorithms & Data Structures, Cybersecurity, Genetics and Molecular Biology
              </p>
            </div>
            <div className="md:col-span-3">
              <p className="text-slate-600 leading-[1.7] text-lg dark:text-slate-400">
                I'm a Computer Science and Biology student at Northeastern University, passionate about bridging technology and life sciences. I specialize in full-stack development, mobile apps, and cloud architecture, focusing on scalable, user-centered solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="pt-20 pb-10 px-6 relative scroll-mt-24">
        <div className="max-w-[1100px] mx-auto relative z-10">
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
                    {['MongoDB', 'SQLite', 'Firebase', 'Express', 'Supabase', 'GitHub', 'AWS', 'Postman', 'Figma'].map((skill) => (
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
                      <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:bg-white hover:border-indigo-300 transition-colors dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600 dark:hover:border-indigo-500">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pt-20 pb-10 px-6 bg-slate-50 scroll-mt-24 dark:bg-slate-900">
        <div className="max-w-[1100px] mx-auto relative z-10">
          <h2 className="text-5xl font-extrabold mb-10 text-center tracking-tight text-slate-900 dark:text-slate-50">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/active-husky" className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-between h-full dark:bg-slate-800 dark:border-slate-700 cursor-pointer">
              <div className="flex items-center mb-3">
                <img src={huskyBlackIcon} alt="Northeastern Husky Icon" className="w-10 h-10 mr-4"/>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Active Husky</h3>
              </div>
              <p className="text-sm text-indigo-500 font-semibold mb-3">React Native | AWS | Vercel | Node.js</p>
              <p className="text-slate-600 mb-6 leading-[1.7] dark:text-slate-400">
                Led full-stack development of a fitness app and admin dashboard, deployed on AWS and Vercel for scalability and performance.
              </p>
            </Link>
            <Link to="/sculpt" className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-between h-full dark:bg-slate-800 dark:border-slate-700 cursor-pointer">
              <div className="flex items-center mb-3">
                <img src={sculptIcon} alt="Sculpt.ai App Icon" className="w-10 h-10 mr-4"/>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Sculpt.ai</h3>
              </div> 
              <p className="text-sm text-indigo-500 font-semibold mb-3">React | REST APIs | Shadcn UI</p>
              <p className="text-slate-600 mb-6 leading-[1.7] dark:text-slate-400">
                Built a web app for fitness and diet analytics, focusing on modular design and data visualization with a standardized UI.
              </p>
            </Link>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-between h-full dark:bg-slate-800 dark:border-slate-700">
              <div className="flex items-center mb-3">
                <img src={summitAppIcon} alt="Summit App Icon" className="w-10 h-10 mr-4"/>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Summit: Debt Relief</h3>
              </div>
              <p className="text-sm text-indigo-500 font-semibold mb-3">React Native | MongoDB | JavaScript | Node.js</p>
              <p className="text-slate-600 mb-6 leading-[1.7] dark:text-slate-400">
                A demo app featuring an AI chatbot, user onboarding, and a MongoDB-backed API for data storage, showcasing rapid prototyping and development.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-between h-full dark:bg-slate-800 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-50">Sophia: Philosophical Journal</h3>
              <p className="text-sm text-indigo-500 font-semibold mb-3">React.js | Supabase | Node.js & Express.js</p>
              <p className="text-slate-600 mb-6 leading-[1.7] dark:text-slate-400">
                A mental health journaling app with secure authentication, CRUD operations for entries, and progress tracking via a calendar view.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-between h-full dark:bg-slate-800 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-50">Cloud Web Application</h3>
              <p className="text-sm text-indigo-500 font-semibold mb-3">AWS | SQL | Shell</p>
              <p className="text-slate-600 mb-6 leading-[1.7] dark:text-slate-400">
                A scalable web app on AWS using EC2, S3, and RDS, focusing on cloud architecture, performance, and cost-effective resource management.
              </p>
            </div>
            <a 
              href="https://github.com/Willlegault" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-center items-center h-full text-center hover:shadow-lg hover:border-indigo-400 dark:bg-slate-800 dark:border-slate-700"
            >
              <FaGithub className="text-5xl mb-4 text-slate-800 dark:text-slate-200" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Explore My Projects</h3>
              <p className="text-slate-600 mt-2 dark:text-slate-400">View my repositories and contributions on GitHub.</p>
            </a>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
