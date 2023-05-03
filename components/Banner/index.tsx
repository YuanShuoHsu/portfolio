import React from "react";
import styles from "./index.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h3 className={styles.banner__greeting}>Hey_</h3>
      <h2 className={styles.banner__intro}>
        I am <span className={styles.banner__introText}>Yuan Shuo Hsu</span>
      </h2>
      <p className={styles.banner__paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quisquam
        perferendis labore sequi, fugit harum non omnis maiores distinctio
        veritatis porro beatae hic incidunt dolorum voluptatem repellat sunt
        aliquam quibusdam?
      </p>
      <div className={styles.banner__buttonGroup}>
        <button className={styles.banner__button}>Hire Me</button>
        <button className={styles.banner__button}>Let's Chat</button>
      </div>
    </div>
  );
}
