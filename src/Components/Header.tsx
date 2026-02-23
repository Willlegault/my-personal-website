import React, { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-[1000] bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition-all duration-300 dark:bg-slate-900/60 dark:border-white/5">
        <nav className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-[4.5rem]">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-600 bg-clip-text text-transparent m-0 cursor-pointer pb-1 dark:from-slate-50 dark:to-indigo-300" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                William Legault
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <a href="#about" className="text-slate-500 text-[0.95rem] font-medium transition-colors duration-200 relative hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-indigo-500 after:transition-[width] after:duration-300 hover:after:w-full">
                About
              </a>
              <a href="#skills" className="text-slate-500 text-[0.95rem] font-medium transition-colors duration-200 relative hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-indigo-500 after:transition-[width] after:duration-300 hover:after:w-full">
                Skills
              </a>
              <a href="#projects" className="text-slate-500 text-[0.95rem] font-medium transition-colors duration-200 relative hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-indigo-500 after:transition-[width] after:duration-300 hover:after:w-full">
                Projects
              </a>
              <div className="relative">
                <button
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg bg-indigo-500 hover:bg-indigo-600 cursor-pointer"
                >
                  Contact
                </button>
                <AnimatePresence>
                  {isContactOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-4 w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden dark:bg-slate-800 dark:border-slate-700"
                    >
                      <div className="p-2 grid gap-2">
                        <a 
                          href="https://linkedin.com/in/william-legault" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors group dark:hover:bg-slate-700/50"
                          onClick={() => setIsContactOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] text-lg mr-3 group-hover:scale-110 transition-transform">
                            <FaLinkedin />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 text-sm dark:text-slate-50">LinkedIn</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Connect professionally</p>
                          </div>
                        </a>
                        
                        <a 
                          href="mailto:Willlegault24@gmail.com"
                          className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors group dark:hover:bg-slate-700/50"
                          onClick={() => setIsContactOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 text-lg mr-3 group-hover:scale-110 transition-transform">
                            <FaEnvelope />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 text-sm dark:text-slate-50">Email</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Send me a message</p>
                          </div>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;