import { useState } from 'react';
import type { FC } from 'react';
import { FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import sculptIcon from '../assets/icon.png';

const Sculpt: FC = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#232323] pb-20">
      
      <div className="max-w-[1000px] mx-auto px-6 pt-12">
        <a href="/#projects" className="inline-flex items-center text-[#e0e0e0] font-medium mb-8 hover:underline" style={{ transition: 'color 0.2s', color: '#e0e0e0' }} onMouseOver={e => { e.currentTarget.style.color = '#bdbdbd'; }} onMouseOut={e => { e.currentTarget.style.color = '#e0e0e0'; }}>
          <FaArrowLeft className="mr-2" /> Back to Projects
        </a>

        <div className="bg-[#e5e5e5] rounded-3xl shadow-sm overflow-hidden">
          <div className="p-10 md:p-14">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <img src={sculptIcon} alt="Sculpt.ai App Icon" className="w-20 h-20"/>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#ff6a1a' }}>Sculpt.ai</h1>
                <div className="flex flex-wrap gap-2">
                  {['React', 'REST APIs', 'Shadcn UI', 'TypeScript'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-[#353535] text-[#fff] rounded-full text-sm font-medium dark:bg-[#292929] dark:text-[#fff]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-black leading-relaxed">
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <div>
                  <h3 className="text-xl font-bold text-black mb-3 border-b-2 border-[#cccccc] pb-2 inline-block">My Role</h3>
                  <p className="text-black">
                    Frontend UI Developer focusing on building features, functionality, and seamless user experience flows.
                  </p>
                </div>
                <div>
                   <h3 className="text-xl font-bold text-black mb-3 border-b-2 border-[#cccccc] pb-2 inline-block">Collaboration</h3>
                   <p className="text-black">
                    Collaborated closely with backend engineers and domain experts to verify algorithms and validate health analytics.
                   </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4">What I Did</h3>
                <p className="mb-4 text-black">
                  I built a React-based web application designed to translate complex backend health and performance analytics into accessible, professional-grade visual insights. Currently, I am expanding the application's capabilities, designing and implementing new user flows that allow users to effortlessly log and track their workouts.
                </p>
                <p className="mb-4 text-black">
                  Alongside the user-facing application, I built an internal admin interface for managing user data pipelines, configuring health metric thresholds, and verifying the accuracy of physiological analytics — ensuring data integrity between backend calculations and the professional-grade insights delivered to end users.
                </p>
              </div>

              <div className="mb-8">
                 <h3 className="text-xl font-bold text-black mb-4">Technical Execution</h3>
                 <p className="mb-4 text-black">
                  To achieve modularity and scalability, I leveraged public REST APIs and implemented independent deployment strategies. I standardized the user interface using Shadcn UI components, ensuring a consistent and modern design language. The development process involved integrating full-stack workflows for rapid testing and verifying the accuracy of physiological data to ensure reliability for professional use.
                 </p>
              </div>

              {/* Custom button for Visit Sculpt.ai with controlled hover color */}
              <a
                href="https://sculptai.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-colors shadow-md mt-4"
                style={{
                  backgroundColor: hover ? '#bf360c' : '#e65100',
                  color: '#fff',
                  boxShadow: hover ? '0 4px 20px rgba(255,102,0,0.2)' : '0 2px 8px rgba(255,153,0,0.15)',
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
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
