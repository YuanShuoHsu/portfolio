import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

import styles from "./index.module.scss";

export default function TypedIdentity() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Yuan Shuo Hsu", "Front-end Engineer", "Designer", "Coder"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 0,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={styles.typedIdentity}>
      <h3 className={styles.typedIdentity__greeting}>Hey_</h3>
      <h2 className={styles.typedIdentity__intro}>
        <span className={styles.typedIdentity__introText}>I am </span>
        <span ref={el} className={styles.typedIdentity__introText} />
      </h2>
    </div>
  );
}
