import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Header from '../Components/Header';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className={styles.container}>
      <Header />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={`${styles.sectionContainer} ${styles.centerText}`}>
          <motion.div {...fadeInUp}>
            <h1 className={styles.title}>
              William D. Legault
            </h1>
            <p className={styles.subtitle}>
              Computer Science & Biology Student | Full-Stack Developer specializing in React Native, Cloud Architecture & Biotech Applications
            </p>
            <p className={styles.availability}>
              Available: April - December 2026 | Boston, MA
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={`${styles.grid} ${styles.gridCols1}`}>
            <div>
              <p className={styles.cardText}>
                I'm a Computer Science and Biology student at Northeastern University with a passion for bridging technology and life sciences. 
                My dual background enables me to develop software solutions for biotech applications while maintaining expertise in full-stack development, 
                mobile applications, and cloud architecture. I focus on creating scalable, user-centered platforms that solve real-world problems.
              </p>
            </div>
            <div>
              <h3 className={styles.educationTitle}>Education</h3>
              <p className={styles.educationText}>Bachelor of Science in Computer Science and Biology</p>
              <p className={styles.educationSubtext}>Northeastern University | Expected Graduation: May 2027</p>
              <p className={styles.educationSubtext} style={{ marginTop: '0.5rem' }}>
                Coursework: Database Design, Object-Oriented Design & Cloud Computing, Algorithms & Data Structures, 
                Cybersecurity, Theory of Computation, General Biology & Chemistry, Biostatistics, Organic Chemistry, 
                Genetics and Molecular Biology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.section}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          <div className={`${styles.grid} ${styles.gridCols1}`}>
            <div className={styles.card}>
              <div className={styles.experienceHeader}>
                <h3 className={styles.cardTitle}>Recreation Software Developer (Co-op)</h3>
                <p className={styles.experienceMeta}>Northeastern University | Aug. 2025 – Present</p>
              </div>
              <ul className={styles.experienceList}>
                <li>Led full-stack development of a React Native fitness app and React/Node.js admin dashboard, transforming a prototype into a production-ready platform with backend services deployed via AWS and Vercel</li>
                <li>Collaborated with managers to design admin workflows, implement live notifications, and streamline AWS infrastructure by optimizing database interactions and load balancer usage for performance and scalability</li>
                <li>Developed, tested, and optimized the app for both iOS and Android, using crash reports and custom Notion API–based bug reports to improve reliability and user experience</li>
              </ul>
            </div>
            <div className={styles.card}>
              <div className={styles.experienceHeader}>
                <h3 className={styles.cardTitle}>Software Engineering Intern</h3>
                <p className={styles.experienceMeta}>Sculpt.ai (Remote) | Oct. 2025 – Present</p>
              </div>
              <ul className={styles.experienceList}>
                <li>Built a React-based web app consuming backend REST APIs for fitness and diet analytics, improving modularity, scalability, and independent deployment</li>
                <li>Collaborated with engineers and domain experts to verify algorithm accuracy, implemented standardized UI components using Shadcn, and integrated full-stack workflows for rapid testing and data visualization</li>
              </ul>
            </div>
            <div className={styles.card}>
              <div className={styles.experienceHeader}>
                <h3 className={styles.cardTitle}>Immersive Media Lab Office Assistant</h3>
                <p className={styles.experienceMeta}>Northeastern College of Arts and Media Design | Jan. 2025 – April 2025</p>
              </div>
              <ul className={styles.experienceList}>
                <li>Educated students on VR technology and creative platforms through workshops and presentations, working with tools like Unity, Blender, Adobe, and Rokoko motion capture Technology</li>
                <li>Performed regular maintenance, troubleshooting, and keeping systems up to date</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={`${styles.grid} ${styles.gridCols1} ${styles.gridCols2}`}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Sophia: Philosophical Journal</h3>
              <p className={styles.techStack}>React.js | Supabase | Node.js & Express.js</p>
              <p className={styles.cardText}>
                Developed a mental health-based journaling web application using React and Supabase, implementing CRUD functionality, 
                Row Level Security Policies for tracking journaling history and streak progress. Built a scalable authentication system 
                with email-based login and integrated dynamic UI components like a calendar feature.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Summit: Debt Relief</h3>
              <p className={styles.techStack}>React Native | MongoDB | JavaScript | Node.js</p>
              <p className={styles.cardText}>
                Developed a React Native demo app featuring an AI chatbot assistant, backed by a MongoDB-based API for user onboarding 
                and data storage. Designed and presented multiple stages of app demos to judges, showcasing real-world problem-solving 
                capabilities and advancing the lifecycle of app development.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Cloud Web Application</h3>
              <p className={styles.techStack}>AWS | SQL | Shell</p>
              <p className={styles.cardText}>
                Built a scalable web application on AWS using services like EC2, S3, RDS, gaining practical experience in cloud architecture, 
                performance optimization, and cost-efficient resource management. Ensured high availability and reliability by leveraging 
                AWS tools and best practices, load balancing, and maintaining robust infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.section}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={`${styles.grid} ${styles.gridCols1} ${styles.gridCols3}`}>
            <div className={styles.centerText}>
              <div className={styles.skillCard}>
                <p className={styles.skillTitle}>Languages</p>
                <p className={styles.skillText}>Java, Python, JavaScript, TypeScript, React, React Native, Kotlin</p>
              </div>
            </div>
            <div className={styles.centerText}>
              <div className={styles.skillCard}>
                <p className={styles.skillTitle}>Frameworks & Tools</p>
                <p className={styles.skillText}>MongoDB, SQLite, Firebase, Express, Supabase, GitHub, AWS, Postman, Figma</p>
              </div>
            </div>
            <div className={styles.centerText}>
              <div className={styles.skillCard}>
                <p className={styles.skillTitle}>Relevant Knowledge</p>
                <p className={styles.skillText}>Object-Oriented Design, Data Structures, Cloud Architecture, Cybersecurity, Biostatistics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={`${styles.sectionContainer} ${styles.centerText}`}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.contactText}>
            I'm currently seeking opportunities for April - December 2026. Feel free to reach out!
          </p>
          <div className={styles.contactIcons}>
            <a 
              href="https://github.com/Willlegault" 
              className={styles.contactIcon}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.5rem' }}
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/william-legault" 
              className={styles.contactIcon}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.5rem' }}
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:Willlegault24@gmail.com" 
              className={styles.contactIcon}
              style={{ fontSize: '1.5rem' }}
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div>
              <p>&copy; {new Date().getFullYear()} William D. Legault. All rights reserved.</p>
            </div>
            <div className={styles.footerIcons}>
              <a 
                href="https://github.com/Willlegault" 
                className={styles.footerIcon}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '1.25rem' }}
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/william-legault" 
                className={styles.footerIcon}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '1.25rem' }}
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:Willlegault24@gmail.com" 
                className={styles.footerIcon}
                style={{ fontSize: '1.25rem' }}
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
