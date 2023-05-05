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
      <nav className={styles.header__nav}>
        <button className={styles.header__navButton}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
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
      </nav>
    </header>
  );
}
