import React from 'react';
import styles from '../styles/Header.module.css';
import logo from '../assets/websio.png'; // Adjust the path as needed

function Header({ scrollToSection }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Websio Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><button onClick={() => scrollToSection('home')} className={styles.navLink}>Home</button></li>
          <li><button onClick={() => scrollToSection('services')} className={styles.navLink}>Services</button></li>
          <li><button onClick={() => scrollToSection('about')} className={styles.navLink}>About</button></li>
          <li><button onClick={() => scrollToSection('contact')} className={styles.navLink}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;