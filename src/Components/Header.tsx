import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[1000] bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition-all duration-300 dark:bg-slate-900/60 dark:border-white/5">
      <nav className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-[4.5rem]">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-600 bg-clip-text text-transparent m-0 cursor-pointer pb-1 dark:from-slate-50 dark:to-indigo-300">
              William Legault
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#about" className="text-slate-500 text-[0.95rem] font-medium transition-colors duration-200 relative hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-indigo-500 after:transition-[width] after:duration-300 hover:after:w-full">
              About
            </a>
            <a href="#experience" className="text-slate-500 text-[0.95rem] font-medium transition-colors duration-200 relative hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-indigo-500 after:transition-[width] after:duration-300 hover:after:w-full">
              Experience
            </a>
            <a href="#projects" className="text-slate-500 text-[0.95rem] font-medium transition-colors duration-200 relative hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-indigo-500 after:transition-[width] after:duration-300 hover:after:w-full">
              Projects
            </a>
            <a href="#skills" className="text-slate-500 text-[0.95rem] font-medium transition-colors duration-200 relative hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-indigo-500 after:transition-[width] after:duration-300 hover:after:w-full">
              Skills
            </a>
            <a href="#contact" className="text-slate-500 text-[0.95rem] font-medium transition-colors duration-200 relative hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-indigo-500 after:transition-[width] after:duration-300 hover:after:w-full">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;