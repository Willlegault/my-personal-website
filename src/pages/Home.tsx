import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Header from '../Components/Header';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Computer Science Student & Full Stack Developer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Passionate about building innovative software solutions, with experience in full-stack development and a focus on creating impactful applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600">
                Hi, I'm William Legault, a Computer Science student at Northeastern University with expertise in full-stack development, app development and cloud technologies. I have a passion for creating intuitive user experiences and building scalable backend systems.
                With professional experience in Software Development and DevOps Engineering, I strive to deliver efficient and impactful solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <p className="text-gray-600">Computer Science Student at Northeastern University</p>
              <p className="text-gray-500">Expected Graduation: 2025</p>
              <p className="text-gray-500 mt-2">Currently pursuing a Software Development in the Cloud concentration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
              <p className="text-gray-600">A modern personal website built using React, TypeScript, and Tailwind CSS. Features responsive design and smooth animations.</p>
              <a href="https://github.com/yourusername/my-personal-website" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Supply Chain Management Application</h3>
              <p className="text-gray-600">Developed a full-stack web application for supply chain management. Built with React, Node.js, and MongoDB.</p>
              <a href="https://sophia-rho.vercel.app" className="text-blue-500 hover:underline">View Project</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Docker Deployment Application</h3>
              <p className="text-gray-600">Created a DevOps tool for automated Docker container deployment using Python and Docker SDK.</p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">Programming</p>
                <p className="text-gray-600">JavaScript, Python, Java, TypeScript, SQL</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">Web Development</p>
                <p className="text-gray-600">React, Node.js, Express, HTML/CSS, Tailwind</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">DevOps & Cloud</p>
                <p className="text-gray-600">Docker, AWS, Git, CI/CD, Linux</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold">Other</p>
                <p className="text-gray-600">Agile, Team Leadership, Problem Solving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Me</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Willlegault" className="text-gray-600 hover:text-gray-900">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/william-legault-a1426b2a9/" className="text-gray-600 hover:text-gray-900">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:legault.w@northeastern.edu" className="text-gray-600 hover:text-gray-900">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} William Legault. All rights reserved.</p>
            </div>
            {/* <div className="flex space-x-6">
              <a href="https://github.com/Willlegault" className="hover:text-gray-300">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/yourusername" className="hover:text-gray-300">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:your.email@example.com" className="hover:text-gray-300">
                <FaEnvelope size={20} />
              </a>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
