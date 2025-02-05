import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/TechnologiesCarousel.module.css";

const technologies = [
  { name: "React", logo: "" },
  { name: "Node.js", logo: "" },
  { name: "Wordpress", logo: "" },
  { name: "Shopify", logo: "" },
  { name: "HTML", logo: "" },
  { name: "CSS", logo: "" },
  { name: "JavaScript", logo: "" },
  { name: "Redux", logo: "" },
  { name: "Wix", logo: "" },
  // Add more technologies as needed
];

const TechnologiesCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.slide}>
            {/* <img src={tech.logo} alt={tech.name} className={styles.logo} /> */}
            <p className={styles.techName}>{tech.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechnologiesCarousel;
