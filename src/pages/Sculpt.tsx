import React from 'react';
import Header from '../Components/Header';
import { FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import sculptIcon from '../assets/icon.png';

const Sculpt: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-900 pb-20">
      <Header />
      
      <div className="max-w-[1000px] mx-auto px-6 pt-32">
        <a href="/#projects" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium mb-8 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Projects
        </a>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden dark:bg-slate-800 dark:border-slate-700">
          <div className="p-10 md:p-14">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <img src={sculptIcon} alt="Sculpt.ai App Icon" className="w-20 h-20"/>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 mb-2">Sculpt.ai</h1>
                <p className="text-xl text-indigo-600 font-semibold dark:text-indigo-400">React | REST APIs | Shadcn UI</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
              <p className="mb-6">
                Built a React-based web app to translate backend health and performance analytics algorithms for professional validation, by using public REST APIs to enhance modularity, scalability, and independent deployment.
              </p>
              
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li>
                  Collaborated with engineers and domain experts to verify algorithm accuracy, implemented standardized UI components using Shadcn, and integrated full-stack workflows for rapid testing and data visualization.
                </li>
                <li>
                  Gained experience integrating physiological data APIs and ensuring data accuracy and consistency.
                </li>
                <li>
                  For Sculpt, I have taken on a frontend UI role, building out features and functionality, and working on flows for seamless user experience through the app as users log workouts.
                </li>
              </ul>

              <a 
                href="https://sculptai.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
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
