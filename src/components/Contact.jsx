import React from 'react';
import styles from '../styles/Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Us</h2>
        <div className={styles.content}>
          <div className={styles.formWrapper}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input type="text" id="name" name="name" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input type="email" id="email" name="email" required className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" name="message" required className={styles.textarea}></textarea>
              </div>
              <button type="submit" className={styles.button}>Send Message</button>
            </form>
          </div>
          {/* <div className={styles.infoWrapper}>
            <div className={styles.infoGroup}>
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={styles.infoText}>espinolaj192@gmail.com</p>
            </div>
            <div className={styles.infoGroup}>
              <h3 className={styles.infoTitle}>Phone</h3>
              <p className={styles.infoText}>(206) 673-0480</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;