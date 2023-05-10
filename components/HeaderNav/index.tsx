import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { showSidebarMenu } from "@/store/slice/sidebarMenu";
import { RootState } from "@/store";

import styles from "./index.module.scss";

const navItems = [
  { id: "targetDiv1", label: "Home" },
  { id: "targetDiv2", label: "About" },
  { id: "targetDiv3", label: "Work" },
  { id: "targetDiv4", label: "Contact" },
];

export default function HeaderNav() {
  const dispatch = useDispatch();
  const targetDivRefs = useSelector((state: RootState) => state.targetDivs);

  const handleNavClick = (id: string) => {
    const targetDivRef = targetDivRefs[id];
    if (targetDivRef?.current) {
      targetDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = () => {
    dispatch(showSidebarMenu());
  };

  return (
    <nav className={styles.headerNav}>
      <button onClick={handleClick} className={styles.headerNav__button}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <ul className={styles.headerNav__menu}>
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={styles.headerNav__menuItem}
          >
            <span className={styles.headerNav__menuItemText}>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
