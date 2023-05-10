import React from "react";

import Link from "next/link";

import styles from "./index.module.scss";

interface headerLogoProps {
  themeNightValue: boolean;
}

export default function HeaderLogo({ themeNightValue }: headerLogoProps) {
  return (
    <Link href="/" className={styles.headerLogo}>
        <span className={styles.headerLogo__text}>My</span>
        <span
          className={`${styles.headerLogo__text} ${
            themeNightValue ? styles["headerLogo__text--active"] : ""
          }`}
        >
          Portfolio_
        </span>
    </Link>
  );
}
