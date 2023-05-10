import React from "react";

import ThemeSocial from "../ThemeSocial";
import Night from "../ThemeNight";

import styles from "./index.module.scss";

export default function Theme() {
  return <div className={styles.theme}>
    <ThemeSocial />
    <Night/>
  </div>;
}
