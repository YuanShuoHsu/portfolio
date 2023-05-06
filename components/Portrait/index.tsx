import React from "react";

import Image from "next/image";

import styles from "./index.module.scss";

export default function Portrait() {
  return (
    <div className={styles.portrait}>
      <Image
        src="/images/portrait.jpg"
        alt="許元碩"
        width={1080}
        height={1440}
        priority
      />
    </div>
  );
}
