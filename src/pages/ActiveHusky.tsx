import React from 'react';
import { FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import huskyBlackIcon from '../assets/husky_black.png';

const ActiveHusky: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-900 pb-20">
      
      <div className="max-w-[1000px] mx-auto px-6 pt-12">
        <a href="/#projects" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium mb-8 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Projects
        </a>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden dark:bg-slate-800 dark:border-slate-700">
          <div className="p-10 md:p-14">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <img src={huskyBlackIcon} alt="Northeastern Husky Icon" className="w-20 h-20"/>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">Active Husky</h1>
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'AWS', 'Vercel', 'Node.js', 'MongoDB'].map((skill) => (
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
                    Lead Full-Stack Developer responsible for the end-to-end lifecycle of the mobile application and administrative dashboard.
                  </p>
                </div>
                <div>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3 border-b-2 border-indigo-100 dark:border-indigo-900 pb-2 inline-block">Collaboration</h3>
                   <p className="text-slate-600 dark:text-slate-400">
                    Partnered with management team to design admin workflows, graphic designers and marketing team to align on branding and user experience. 
                   </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">What I Did</h3>
                <p className="mb-4">
                  I transformed an initial prototype into a robust, production-ready fitness platform supporting over 6,000 users. This involved building a cross-platform mobile app for iOS and Android and a comprehensive React/Node.js admin dashboard for user management and real-time monitoring.
                </p>
                <p className="mb-4">
                  I'm currently onboarding the next developer, having designed a tailored learning track, ownership track, and timeline to help him integrate smoothly into the development process and take ownership of key features.
                </p>
              </div>

              <div className="mb-8">
                 <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">Technical Execution</h3>
                 <p className="mb-4">
                  To ensure scalability and performance, I deployed backend services using AWS and Vercel. I optimized database interactions and leveraged load balancers to handle high traffic efficiently. Additionally, I integrated a custom Notion API–based bug reporting system and analyzed crash reports to continuously improve app reliability and user experience.
                 </p>
              </div>

              <a 
                href="https://recreation.northeastern.edu/group-fitness-schedule/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg mt-4"
              >
                Visit Northeastern Recreation <FaExternalLinkAlt className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveHusky;
