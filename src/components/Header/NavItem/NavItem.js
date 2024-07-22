import { NavLink } from "react-router-dom";

import styles from "./NavItem.module.css";

export const NavItem = ({ path, title, index }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? styles["selected"]
            : `${styles["nav-item"]} ${styles[`nav-item-${index}`]}`
        }
        to={path}
      >
        {({ isActive }) =>
          isActive ? (
            <h1 className={styles["nav-title-selected"]}>{title}</h1>
          ) : (
            <h1 className={styles["nav-title"]}>{title}</h1>
          )
        }
      </NavLink>
    </li>
  );
};
