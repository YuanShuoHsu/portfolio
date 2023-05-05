import React from "react";

import styles from "./index.module.scss";

export default function SidebarMenu() {
  return (
    <div className={styles.sidebarMenu}>
      <ul className={styles.sidebarMenu__list}>
        <li className={styles.sidebarMenu__listItem}>Home</li>
        <li className={styles.sidebarMenu__listItem}>About</li>
        <li className={styles.sidebarMenu__listItem}>Work</li>
        <li className={styles.sidebarMenu__listItem}>Contact</li>
      </ul>
    </div>
  );
}
