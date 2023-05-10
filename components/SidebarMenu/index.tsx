import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { hideSidebarMenu } from "@/store/slice/sidebarMenu";
import { RootState } from "@/store";

import styles from "./index.module.scss";

const menuItems = ["Home", "About", "Work", "Contact"];

export default function SidebarMenu() {
  const dispatch = useDispatch();

  const sidebarMenuValue = useSelector(
    (state: RootState) => state.sidebarMenu.value
  );

  const handleSidebarHide = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      dispatch(hideSidebarMenu());
    }
  };

  const handleItemClick = () => {
    dispatch(hideSidebarMenu());
  };

  return (
    <div
      onClick={handleSidebarHide}
      className={`${styles.sidebarMenu} ${
        sidebarMenuValue ? styles["sidebarMenu--active"] : ""
      }`}
    >
      <ul className={styles.sidebarMenu__list}>
        {menuItems.map((item) => (
          <li
            onClick={handleItemClick}
            key={item}
            className={styles.sidebarMenu__listItem}
          >
            <button className={styles.sidebarMenu__listItemButton}>{item}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
