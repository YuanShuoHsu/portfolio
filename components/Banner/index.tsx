import React, { useRef, useEffect } from "react";

import TypedIdentity from "../TypedIdentity";
import Introduction from "../Introduction";
import Theme from "../Theme";
import Portrait from "../Portrait";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setTargetDivRef } from "@/store/slice/targetDivs";

import styles from "./index.module.scss";

export default function Banner() {
  const dispatch = useDispatch();
  const targetDivRef1 = useRef(null);

  useEffect(() => {
    dispatch(setTargetDivRef({ id: "targetDiv1", ref: targetDivRef1 }));
  }, [dispatch]);

  const themeNightValue = useSelector(
    (state: RootState) => state.themeNight.value
  );

  return (
    <main
      ref={targetDivRef1}
      className={`${styles.banner} ${
        themeNightValue ? styles["banner--active"] : ""
      }`}
    >
      <div className={styles.banner__container}>
        <Portrait />
      </div>
      <div className={styles.banner__container}>
        <TypedIdentity />
        <Introduction />
        <Theme />
      </div>
    </main>
  );
}
