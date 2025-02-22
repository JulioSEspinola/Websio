import React from "react";
import styles from "../styles/Pricing.module.css";
import TechnologiesCarousel from "./TechnologiesCarousel";

function Pricing() {
  const services = [
    {
      title: "Hourly Rate",
      description:
        "This model charges clients based on the number of hours worked. It’s ideal for projects with uncertain scope or ongoing work.",
    },
    {
      title: "Project-Based Pricing",
      description:
        "This model provides a fixed price for an entire project based on complexity and features. It works best when the scope is clearly defined.",
    },
    {
      title: "Retainer Model",
      description:
        "A recurring monthly payment where clients pay for ongoing work, maintenance, or dedicated development time.",
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <h2 className={styles.title}>Pricing</h2>
      <div className={styles.pricingContainer}>
        <p className={styles.pricingDesciption}>
          At Websio, We believe in providing affordable and transparent pricing
          tailored to each client's needs. Every project is unique, so pricing
          depends on factors like complexity, features, and timeline. Whether
          you need a simple website, a custom web application, or ongoing
          support, We offer flexible pricing models to fit your budget. Before
          giving you a number, I’d love to discuss your project, understand your
          goals, and find the best solution for you. Contact me for a free
          consultation, and let’s bring your vision to life!
        </p>
      </div>

      <div className={styles.serviceGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
      <TechnologiesCarousel />
    </section>
  );
}

export default Pricing;
