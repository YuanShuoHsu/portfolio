import React from "react";

import Social from "../Social";
import Night from "../Night";

import styles from "./index.module.scss";

export default function Theme() {
  return <div className={styles.theme}>
    <Social />
    <Night/>
  </div>;
}
