import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Header() {
  const nightValue = useSelector((state: RootState) => state.night.value);

  return (
    <header className={`${styles.header} ${nightValue ? styles.active : ""}`}>
      <Link href="/">
        <div className={styles.header__logo}>
          <span className={styles.header__logoText}>My</span>
          <span className={styles.header__logoText}>Portfolio_</span>
        </div>
      </Link>
      <ul className={styles.header__menu}>
        <li className={styles.header__menuItem}>
          <span className={styles.header__menuItemText}>Home</span>
        </li>
        <li className={styles.header__menuItem}>
          <span className={styles.header__menuItemText}>About</span>
        </li>
        <li className={styles.header__menuItem}>
          <span className={styles.header__menuItemText}>Work</span>
        </li>
        <li className={styles.header__menuItem}>
          <span className={styles.header__menuItemText}>Contact</span>
        </li>
      </ul>
    </header>
  );
}
