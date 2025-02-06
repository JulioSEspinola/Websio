import React from 'react';
import styles from '../styles/Services.module.css';

function Services() {
  const services = [
    { title: 'Website Design', description: 'Custom designs tailored to your non-profit\'s mission and goals.' },
    { title: 'Web Development', description: 'Robust and scalable web applications built with cutting-edge technologies.' },
    { title: 'Content Management', description: 'Easy-to-use CMS solutions to keep your website up-to-date.' },
    { title: 'SEO Optimization', description: 'Improve your online visibility and reach your target audience effectively.' }
  ];

  return (
    <section id="services" className={styles.services}>
      <h2 className={styles.title}>Services</h2>
      <div className={styles.serviceGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;