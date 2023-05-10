import React from "react";

import styles from "./index.module.scss";

export default function Typed() {
  return (
    <div className={styles.typed}>
      <h3 className={styles.typed__greeting}>Hey_</h3>
      <h2 className={styles.typed__intro}>
        <span className={styles.typed__introText}>I am</span>
        <span className={styles.typed__introText}> Yuan Shuo Hsu</span>
      </h2>
    </div>
  );
}
