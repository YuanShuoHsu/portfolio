import React from "react";

import { useDispatch} from "react-redux";
import { showSidebarMenu } from "@/store/slice/sidebarMenu";
// import { RootState } from "@/store";

import styles from "./index.module.scss";

export default function HeaderNav() {
  const dispatch = useDispatch();
  // const sidebarMenuValue = useSelector(
  //   (state: RootState) => state.sidebarMenu.value
  // );

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
        <li className={styles.headerNav__menuItem}>
          <span className={styles.headerNav__menuItemText}>Home</span>
        </li>
        <li className={styles.headerNav__menuItem}>
          <span className={styles.headerNav__menuItemText}>About</span>
        </li>
        <li className={styles.headerNav__menuItem}>
          <span className={styles.headerNav__menuItemText}>Work</span>
        </li>
        <li className={styles.headerNav__menuItem}>
          <span className={styles.headerNav__menuItemText}>Contact</span>
        </li>
      </ul>
    </nav>
  );
}
