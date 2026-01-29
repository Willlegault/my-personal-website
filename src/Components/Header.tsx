import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <h1 className={styles.logoText}>William Legault</h1>
          </div>
          <div className={styles.navLinks}>
            <a href="#about" className={styles.navLink}>
              About
            </a>
            <a href="#experience" className={styles.navLink}>
              Experience
            </a>
            <a href="#projects" className={styles.navLink}>
              Projects
            </a>
            <a href="#skills" className={styles.navLink}>
              Skills
            </a>
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;