import React from 'react';
import styles from '../styles/Contact.module.css';
import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [input, setInput] = useState({
    titel: "",
    content: "",
  });

  const [error, setError] = useState('')

  function onSubmit(e){
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/OuNhHbJBhpP", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        alert("We received your submission, thank you!");
      }
      else if(response.code === 422){
        // Field validation failed
        setError(response.message)
      }
      else {
        // other error from formcarry
        setError(response.message)
      }
    })
    .catch(error => {
      // request related error.
      setError(error.message ? error.message : error);
    });
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Us</h2>
        <div className={styles.content}>
          <div className={styles.formWrapper}>

            <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input type="text" id="name" name="name" required className={styles.input} placeholder="Your first and last name" onChange={(e) => setName(e.target.value)} />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input type="email" id="email" name="email" required className={styles.input} placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" name="message" required className={styles.textarea} placeholder='Enter your message here...' onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>

              <button type="submit" className={styles.button}>Send Message</button>
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Contact;