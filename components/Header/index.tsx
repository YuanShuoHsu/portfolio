import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
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
