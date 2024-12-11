import React from 'react';
import styles from '../styles/Home.module.css';
import videoBackground from '../assets/websio_background.mp4'

function Home() {
  return (
    <section className={styles.home}>
      <video autoPlay muted loop className={styles.backgroundVideo}>
          <source src={videoBackground} type="video/mp4" />
      </video>
      <h1 className={styles.title}>Welcome to Websio</h1>
      <p className={styles.subtitle}>We create web solutions for non-profits and businesses.</p>
    </section>
  );
}

export default Home;