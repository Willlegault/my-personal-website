import { useState } from 'react';
import type { FC } from 'react';
import { FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import huskyBlackIcon from '../assets/husky_black.png';

const ActiveHusky: FC = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#180202] dark:bg-[#220404] pb-20">
      
      <div className="max-w-[1000px] mx-auto px-6 pt-12">
        <a href="/#projects" className="inline-flex items-center text-[#e53935] dark:text-[#ffb3b3] font-medium mb-8 hover:underline" style={{ transition: 'color 0.2s', color: '#e53935' }} onMouseOver={e => { e.currentTarget.style.color = '#c62828'; }} onMouseOut={e => { e.currentTarget.style.color = '#e53935'; }}>
          <FaArrowLeft className="mr-2" /> Back to Projects
        </a>

        <div className="bg-[#353535] rounded-3xl shadow-sm border border-[#666] overflow-hidden dark:bg-[#292929] dark:border-[#666]">
          <div className="p-10 md:p-14">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <img src={huskyBlackIcon} alt="Northeastern Husky Icon" className="w-20 h-20"/>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white dark:text-white mb-4">Active Husky</h1>
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'AWS', 'Vercel', 'Node.js', 'MongoDB'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-[#c62828] text-[#fff] rounded-full text-sm font-medium border border-[#e53935] dark:bg-[#c62828] dark:text-[#fff] dark:border-[#e53935]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-[#fff] dark:text-[#fff] leading-relaxed">
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-white mb-3 border-b-2 border-[#ffb3b3] dark:border-[#e53935] pb-2 inline-block">My Role</h3>
                  <p className="text-[#ffb3b3] dark:text-[#ffb3b3]">
                    Lead Full-Stack Developer responsible for the end-to-end lifecycle of the mobile application and administrative dashboard.
                  </p>
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white dark:text-white mb-3 border-b-2 border-[#ffb3b3] dark:border-[#e53935] pb-2 inline-block">Collaboration</h3>
                   <p className="text-[#ffb3b3] dark:text-[#ffb3b3]">
                    Partnered with management team to design admin workflows, graphic designers and marketing team to align on branding and user experience. 
                   </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white dark:text-white mb-4">What I Did</h3>
                <p className="mb-4 text-white dark:text-white">
                  I transformed an initial prototype into a robust, production-ready fitness platform supporting over 6,000 users. This involved building a cross-platform mobile app for iOS and Android and a comprehensive React/Node.js admin dashboard for user management and real-time monitoring.
                </p>
                <p className="mb-4 text-white dark:text-white">
                  I'm currently onboarding the next developer, having designed a tailored learning track, ownership track, and timeline to help him integrate smoothly into the development process and take ownership of key features.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white dark:text-white mb-4">Technical Execution</h3>
                 <p className="mb-4 text-white dark:text-white">
                  To ensure scalability and performance, I deployed backend services using AWS and Vercel. I optimized database interactions and leveraged load balancers to handle high traffic efficiently. Additionally, I integrated a custom Notion API–based bug reporting system and analyzed crash reports to continuously improve app reliability and user experience.
                 </p>
              </div>

              {/* Custom button for Visit Northeastern Recreation with controlled hover color */}
              <a
                href="https://recreation.northeastern.edu/group-fitness-schedule/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-colors shadow-md mt-4"
                style={{
                  backgroundColor: hover ? '#c62828' : '#e53935',
                  color: '#fff',
                  boxShadow: hover ? '0 4px 20px rgba(198,40,40,0.2)' : '0 2px 8px rgba(229,57,53,0.15)',
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
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
