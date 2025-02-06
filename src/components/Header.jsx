import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../assets/websio.png'; // Adjust the path as needed

function Header({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Websio Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <button className={styles.menuToggle}>Menu</button>
        </div>
        <ul className={`${styles.navList} ${menuOpen ? styles.active : ''}`}>
          <li><button onClick={() => { scrollToSection('home'); toggleMenu(); }} className={styles.navLink}>Home</button></li>
          <li><button onClick={() => { scrollToSection('services'); toggleMenu(); }} className={styles.navLink}>Services</button></li>
          <li><button onClick={() => { scrollToSection('about'); toggleMenu(); }} className={styles.navLink}>About</button></li>
          <li><button onClick={() => { scrollToSection('contact'); toggleMenu(); }} className={styles.navLink}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;