import React, { useRef,useEffect } from "react";

import { setTargetDivRef } from "@/store/slice/targetDivs";
import { useDispatch } from "react-redux";

import styles from "./index.module.scss";

export default function Progress() {
  const dispatch = useDispatch();
  const targetDivRef2 = useRef(null);

  useEffect(() => {
    dispatch(setTargetDivRef({ id: 'targetDiv2', ref: targetDivRef2 }));
  }, [dispatch]);

  return <div ref={targetDivRef2} className={styles.progress}>Progress</div>;
}
