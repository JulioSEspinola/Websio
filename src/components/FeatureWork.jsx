import React from "react";
import styles from "../styles/FeatureWork.module.css";

const FeatureWork = () => {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Feature Work</h2>
          <h2 className={styles.subtitle}>Mi Centro</h2>
          <p className={styles.description}>
            Mi Centro is a community-driven nonprofit dedicated to supporting LatinX and
            Indigenous families. Through their educational programs, crisis
            intervention, family outreach services, arts and culture
            initiatives, and advocacy efforts, they strive to empower and uplift
            the community, ensuring that every family has access to the
            resources and support they need to thrive.
          </p>
          <a
            href="https://micentrowa.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinButton}
          >
            View
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureWork;
