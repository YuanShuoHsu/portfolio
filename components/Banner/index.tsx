import React from "react";

import Typed from "../Typed";
import Introduction from "../Introduction";
import Theme from "../Theme";
import Portrait from "../Portrait";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import styles from "./index.module.scss";

export default function Banner() {
  const nightValue = useSelector((state: RootState) => state.night.value);

  return (
    <main
      className={`${styles.banner} ${
        nightValue ? styles["banner--active"] : ""
      }`}
    >
      <div className={styles.banner__container}>
        <Portrait />
      </div>
      <div className={styles.banner__container}>
        <Typed />
        <Introduction />
        <Theme />
      </div>
    </main>
  );
}
