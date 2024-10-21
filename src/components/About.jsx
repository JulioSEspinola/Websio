import React from 'react';
import styles from '../styles/About.module.css';
import logo from '../assets/websio.png'; // Adjust the path as needed

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Websio</h2>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              Websio is dedicated to helping small non-profits establish a strong online presence. Our team of experts is passionate about creating effective web solutions tailored to your organization's needs.
            </p>
            <ul className={styles.featureList}>
              <li>Customized web solutions for non-profits</li>
              <li>Expert team with years of experience</li>
              <li>Affordable and scalable services</li>
              <li>Committed to your organization's success</li>
            </ul>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              {/* Replace with your actual image */}
              <img src={logo} alt="Websio team" className={styles.image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;