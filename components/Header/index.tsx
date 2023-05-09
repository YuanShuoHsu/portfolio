import React from "react";

import HeaderLogo from "../HeaderLogo";
import HeaderNav from "../HeaderNav";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import styles from "./index.module.scss";

export default function Header() {
  const nightValue = useSelector((state: RootState) => state.night.value);

  return (
    <header className={`${styles.header} ${nightValue ? styles["header--active"] : ""}`}>
      <HeaderLogo nightValue={nightValue} />
      <HeaderNav />
    </header>
  );
}
