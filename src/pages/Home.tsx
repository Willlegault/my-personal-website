import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Header from '../Components/Header';

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
              Computer Science & Biology Student | Full-Stack Developer specializing in React Native, Cloud Architecture & Biotech Applications
            </p>
            <p className="text-base text-slate-600 mt-4 font-medium dark:text-slate-400">
              Available: April - December 2026 | Boston, MA
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-[1100px] mx-auto relative z-10">
          <h2 className="text-5xl font-extrabold mb-12 text-center tracking-tight text-slate-900 dark:text-slate-50">About Me</h2>
          <div className="grid grid-cols-1 gap-8">
            <div>
              <p className="text-slate-600 mb-6 leading-[1.7] dark:text-slate-400">
                I'm a Computer Science and Biology student at Northeastern University with a passion for bridging technology and life sciences. 
                My dual background enables me to develop software solutions for biotech applications while maintaining expertise in full-stack development, 
                mobile applications, and cloud architecture. I focus on creating scalable, user-centered platforms that solve real-world problems.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-slate-50">Education</h3>
              <p className="font-semibold text-lg text-slate-900 dark:text-slate-50">Bachelor of Science in Computer Science and Biology</p>
              <p className="text-slate-600 dark:text-slate-400">Northeastern University | Expected Graduation: May 2027</p>
              <p className="text-slate-600 mt-2 dark:text-slate-400">
                Coursework: Database Design, Object-Oriented Design & Cloud Computing, Algorithms & Data Structures, 
                Cybersecurity, Theory of Computation, General Biology & Chemistry, Biostatistics, Organic Chemistry, 
                Genetics and Molecular Biology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 relative">
        <div className="max-w-[1100px] mx-auto relative z-10">
          <h2 className="text-5xl font-extrabold mb-12 text-center tracking-tight text-slate-900 dark:text-slate-50">Work Experience</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-lg hover:border-indigo-400 dark:bg-slate-800 dark:border-slate-700">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-1 text-slate-900 dark:text-slate-50">Recreation Software Developer (Co-op)</h3>
                <p className="text-slate-600 text-[0.95rem] mt-1 dark:text-slate-400">Northeastern University | Aug. 2025 – Present</p>
              </div>
              <ul className="list-none pl-0 text-slate-600 leading-[1.7] dark:text-slate-400">
                <li className="relative pl-6 mb-3 before:content-['▸'] before:absolute before:left-0 before:text-indigo-500 before:font-bold">Led full-stack development of a React Native fitness app and React/Node.js admin dashboard, transforming a prototype into a production-ready platform with backend services deployed via AWS and Vercel</li>
                <li className="relative pl-6 mb-3 before:content-['▸'] before:absolute before:left-0 before:text-indigo-500 before:font-bold">Collaborated with managers to design admin workflows, implement live notifications, and streamline AWS infrastructure by optimizing database interactions and load balancer usage for performance and scalability</li>
                <li className="relative pl-6 mb-3 before:content-['▸'] before:absolute before:left-0 before:text-indigo-500 before:font-bold">Developed, tested, and optimized the app for both iOS and Android, using crash reports and custom Notion API–based bug reports to improve reliability and user experience</li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-lg hover:border-indigo-400 dark:bg-slate-800 dark:border-slate-700">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-1 text-slate-900 dark:text-slate-50">Software Engineering Intern</h3>
                <p className="text-slate-600 text-[0.95rem] mt-1 dark:text-slate-400">Sculpt.ai (Remote) | Oct. 2025 – Present</p>
              </div>
              <ul className="list-none pl-0 text-slate-600 leading-[1.7] dark:text-slate-400">
                <li className="relative pl-6 mb-3 before:content-['▸'] before:absolute before:left-0 before:text-indigo-500 before:font-bold">Built a React-based web app consuming backend REST APIs for fitness and diet analytics, improving modularity, scalability, and independent deployment</li>
                <li className="relative pl-6 mb-3 before:content-['▸'] before:absolute before:left-0 before:text-indigo-500 before:font-bold">Collaborated with engineers and domain experts to verify algorithm accuracy, implemented standardized UI components using Shadcn, and integrated full-stack workflows for rapid testing and data visualization</li>
              </ul>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-lg hover:border-indigo-400 dark:bg-slate-800 dark:border-slate-700">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-1 text-slate-900 dark:text-slate-50">Immersive Media Lab Office Assistant</h3>
                <p className="text-slate-600 text-[0.95rem] mt-1 dark:text-slate-400">Northeastern College of Arts and Media Design | Jan. 2025 – April 2025</p>
              </div>
              <ul className="list-none pl-0 text-slate-600 leading-[1.7] dark:text-slate-400">
                <li className="relative pl-6 mb-3 before:content-['▸'] before:absolute before:left-0 before:text-indigo-500 before:font-bold">Educated students on VR technology and creative platforms through workshops and presentations, working with tools like Unity, Blender, Adobe, and Rokoko motion capture Technology</li>
                <li className="relative pl-6 mb-3 before:content-['▸'] before:absolute before:left-0 before:text-indigo-500 before:font-bold">Performed regular maintenance, troubleshooting, and keeping systems up to date</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-[1100px] mx-auto relative z-10">
          <h2 className="text-5xl font-extrabold mb-12 text-center tracking-tight text-slate-900 dark:text-slate-50">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-lg hover:border-indigo-400 dark:bg-slate-800 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-50">Sophia: Philosophical Journal</h3>
              <p className="text-sm text-indigo-500 font-semibold mb-3">React.js | Supabase | Node.js & Express.js</p>
              <p className="text-slate-600 mb-6 leading-[1.7] dark:text-slate-400">
                Developed a mental health-based journaling web application using React and Supabase, implementing CRUD functionality, 
                Row Level Security Policies for tracking journaling history and streak progress. Built a scalable authentication system 
                with email-based login and integrated dynamic UI components like a calendar feature.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-lg hover:border-indigo-400 dark:bg-slate-800 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-50">Summit: Debt Relief</h3>
              <p className="text-sm text-indigo-500 font-semibold mb-3">React Native | MongoDB | JavaScript | Node.js</p>
              <p className="text-slate-600 mb-6 leading-[1.7] dark:text-slate-400">
                Developed a React Native demo app featuring an AI chatbot assistant, backed by a MongoDB-based API for user onboarding 
                and data storage. Designed and presented multiple stages of app demos to judges, showcasing real-world problem-solving 
                capabilities and advancing the lifecycle of app development.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 hover:shadow-lg hover:border-indigo-400 dark:bg-slate-800 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-50">Cloud Web Application</h3>
              <p className="text-sm text-indigo-500 font-semibold mb-3">AWS | SQL | Shell</p>
              <p className="text-slate-600 mb-6 leading-[1.7] dark:text-slate-400">
                Built a scalable web application on AWS using services like EC2, S3, RDS, gaining practical experience in cloud architecture, 
                performance optimization, and cost-efficient resource management. Ensured high availability and reliability by leveraging 
                AWS tools and best practices, load balancing, and maintaining robust infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="max-w-[1100px] mx-auto relative z-10">
          <h2 className="text-5xl font-extrabold mb-12 text-center tracking-tight text-slate-900 dark:text-slate-50">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-transparent transition-all duration-300 h-full hover:border-indigo-500/20 hover:shadow-md hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700">
                <p className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-50">Languages</p>
                <p className="text-slate-600 leading-relaxed dark:text-slate-400">Java, Python, JavaScript, TypeScript, React, React Native, Kotlin</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-transparent transition-all duration-300 h-full hover:border-indigo-500/20 hover:shadow-md hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700">
                <p className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-50">Frameworks & Tools</p>
                <p className="text-slate-600 leading-relaxed dark:text-slate-400">MongoDB, SQLite, Firebase, Express, Supabase, GitHub, AWS, Postman, Figma</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-transparent transition-all duration-300 h-full hover:border-indigo-500/20 hover:shadow-md hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700">
                <p className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-50">Relevant Knowledge</p>
                <p className="text-slate-600 leading-relaxed dark:text-slate-400">Object-Oriented Design, Data Structures, Cloud Architecture, Cybersecurity, Biostatistics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-[1100px] mx-auto relative z-10 text-center">
          <h2 className="text-5xl font-extrabold mb-12 text-center tracking-tight text-slate-900 dark:text-slate-50">Get In Touch</h2>
          <p className="text-slate-600 text-lg mb-4 max-w-2xl mx-auto dark:text-slate-400">
            I'm currently seeking opportunities for April - December 2026. Feel free to reach out!
          </p>
          <div className="flex justify-center gap-8 mt-8">
            <a 
              href="https://github.com/Willlegault" 
              className="text-slate-600 transition-all duration-300 flex items-center justify-center p-4 bg-white rounded-full shadow-sm hover:text-indigo-500 hover:-translate-y-1 hover:shadow-md dark:bg-slate-800 dark:text-slate-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a 
              href="https://linkedin.com/in/william-legault" 
              className="text-slate-600 transition-all duration-300 flex items-center justify-center p-4 bg-white rounded-full shadow-sm hover:text-indigo-500 hover:-translate-y-1 hover:shadow-md dark:bg-slate-800 dark:text-slate-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a 
              href="mailto:Willlegault24@gmail.com" 
              className="text-slate-600 transition-all duration-300 flex items-center justify-center p-4 bg-white rounded-full shadow-sm hover:text-indigo-500 hover:-translate-y-1 hover:shadow-md dark:bg-slate-800 dark:text-slate-400"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
