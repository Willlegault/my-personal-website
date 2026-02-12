import React from 'react';
import { FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import sculptIcon from '../assets/icon.png';

const Sculpt: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-900 pb-20">
      
      <div className="max-w-[1000px] mx-auto px-6 pt-12">
        <a href="/#projects" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium mb-8 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Projects
        </a>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden dark:bg-slate-800 dark:border-slate-700">
          <div className="p-10 md:p-14">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <img src={sculptIcon} alt="Sculpt.ai App Icon" className="w-20 h-20"/>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">Sculpt.ai</h1>
                <div className="flex flex-wrap gap-2">
                  {['React', 'REST APIs', 'Shadcn UI', 'TypeScript'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium border border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 border-b-2 border-indigo-100 dark:border-indigo-900 pb-2 inline-block">My Role</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Frontend UI Developer focusing on building features, functionality, and seamless user experience flows.
                  </p>
                </div>
                <div>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 border-b-2 border-indigo-100 dark:border-indigo-900 pb-2 inline-block">Collaboration</h3>
                   <p className="text-slate-600 dark:text-slate-400">
                    Collaborated closely with backend engineers and domain experts to verify algorithms and validate health analytics.
                   </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">What I Did</h3>
                <p className="mb-4">
                  I built a React-based web application designed to translate complex backend health and performance analytics into accessible, professional-grade visual insights. Currently, I am expanding the application's capabilities, designing and implementing new user flows that allow users to effortlessly log and track their workouts.
                </p>
              </div>

              <div className="mb-8">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">Technical Execution</h3>
                 <p className="mb-4">
                  To achieve modularity and scalability, I leveraged public REST APIs and implemented independent deployment strategies. I standardized the user interface using Shadcn UI components, ensuring a consistent and modern design language. The development process involved integrating full-stack workflows for rapid testing and verifying the accuracy of physiological data to ensure reliability for professional use.
                 </p>
              </div>

              <a 
                href="https://sculptai.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg mt-4"
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
