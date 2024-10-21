import React from 'react';
import styles from '../styles/Animation.module.css';

function AnimatedCube() {
  return (
    <div className={styles.sceneContainer}>
      <div className={styles.cube}>
        <div className={`${styles.cubeFace} ${styles.front}`}>Web Design</div>
        <div className={`${styles.cubeFace} ${styles.back}`}>Development</div>
        <div className={`${styles.cubeFace} ${styles.right}`}>SEO</div>
        <div className={`${styles.cubeFace} ${styles.left}`}>Content</div>
        <div className={`${styles.cubeFace} ${styles.top}`}>Analytics</div>
        <div className={`${styles.cubeFace} ${styles.bottom}`}>Support</div>
      </div>
    </div>
  );
}

export default AnimatedCube;