import React from 'react';
import styles from '../styles/Home.module.css';
import videoBackground from '../assets/websio_background.mp4'

function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className={styles.home}>
      <video autoPlay muted loop playsInline className={styles.backgroundVideo} >
          <source src={videoBackground} type="video/mp4" />
      </video>
      {/* <h1 className={styles.title}>Welcome to Websio</h1> */}
      <p className={styles.subtitle}>We create web <a className={styles.label}>solutions</a> for <a className={styles.label}>non-profits</a> and <a className={styles.label}>businesses</a>.</p>
      <button onClick={() => scrollToSection('contact')}>Get a Free Quote!</button>
    </section>
  );
}

export default Home;