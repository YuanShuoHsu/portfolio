import React from "react";

import Link from "next/link";

import styles from "./index.module.scss";

interface headerLogoProps {
  nightValue: boolean;
}

export default function HeaderLogo({ nightValue }: headerLogoProps) {
  return (
    <Link href="/" className={styles.headerLogo}>
        <span className={styles.headerLogo__text}>My</span>
        <span
          className={`${styles.headerLogo__text} ${
            nightValue ? styles["headerLogo__text--active"] : ""
          }`}
        >
          Portfolio_
        </span>
    </Link>
  );
}
