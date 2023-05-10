import React from "react";

import HeaderLogo from "../HeaderLogo";
import HeaderNav from "../HeaderNav";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import styles from "./index.module.scss";

export default function Header() {
  const themeNightValue = useSelector((state: RootState) => state.themeNight.value);

  return (
    <header className={`${styles.header} ${themeNightValue ? styles["header--active"] : ""}`}>
      <HeaderLogo themeNightValue={themeNightValue} />
      <HeaderNav />
    </header>
  );
}
