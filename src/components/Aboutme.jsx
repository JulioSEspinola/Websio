import React from "react";
import styles from "../styles/AboutMe.module.css";
import profilePicture from "../assets/me.png"; // Replace with the path to your profile picture

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.description}>
            Hello! I'm Julio Espinola, a passionate web developer with a focus
            on creating web solutions for non-profits and businesses. With a
            background in Software Engineering, I have developed a strong skill
            set in problem solving, web design, and project management. I enjoy
            working on projects that make a positive impact and help
            organizations achieve their goals.
          </p>
          <p className={styles.description}>
            In my free time, I enjoy exploring new hikes and being surrounded by
            nature . I'm always eager to learn new technologies and improve my
            skills. Let's work together to bring your vision to life!
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={profilePicture}
            alt="Profile"
            className={styles.profilePicture}
          />
          <a
            href="https://www.linkedin.com/in/julio-steven-espinola-rodas/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinButton}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
