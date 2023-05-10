import React, { useState, useEffect } from "react";

import styles from "./index.module.scss";

export default function ScrollToTopButton() {
    
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 60) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className={`${styles.scrollToTopButton} ${
        isVisible ? `${styles["scrollToTopButton--active"]}` : ""
      }`}
    >
      <div className={styles.scrollToTopButton__icon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
        </svg>
      </div>
      <span className={styles.scrollToTopButton__text}>TOP</span>
    </div>
  );
}
