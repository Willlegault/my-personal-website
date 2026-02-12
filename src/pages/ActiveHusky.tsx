import React from 'react';
import Header from '../Components/Header';
import { FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import huskyBlackIcon from '../assets/husky_black.png';

const ActiveHusky: React.FC = () => {
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
              <img src={huskyBlackIcon} alt="Northeastern Husky Icon" className="w-20 h-20"/>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-50 mb-2">Active Husky</h1>
                <p className="text-xl text-indigo-600 font-semibold dark:text-indigo-400">React Native | AWS | Vercel | Node.js | MongoDB</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
              <p className="mb-6">
                Led full-stack development of a React Native fitness app and React/Node.js admin dashboard, transforming a prototype into a production-ready platform with backend services deployed via AWS and Vercel.
              </p>
              
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li>
                  Collaborated with managers to design admin workflows, implement live notifications, and streamline AWS infrastructure by optimizing database interactions and load balancer usage for performance and scalability.
                </li>
                <li>
                  Developed, tested, and optimized the app for both iOS and Android, using crash reports and custom Notion API–based bug reports to improve reliability and user experience.
                </li>
                <li>
                  Designed and implemented intuitive admin workflows to support user management and real-time monitoring.
                </li>
                <li>
                  Built and optimized a cross-platform mobile app for iOS and Android, enhancing performance and reliability.
                </li>
              </ul>

              <a 
                href="https://recreation.northeastern.edu/group-fitness-schedule/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
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
