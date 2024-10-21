import React from 'react';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <section className={styles.home}>
      <h1 className={styles.title}>Welcome to Websio</h1>
      <p className={styles.subtitle}>We create web solutions for small non-profits.</p>
    </section>
  );
}

export default Home;