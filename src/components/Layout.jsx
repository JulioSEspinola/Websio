import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

function Layout({ children }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.layout}>
      <Header scrollToSection={scrollToSection} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;