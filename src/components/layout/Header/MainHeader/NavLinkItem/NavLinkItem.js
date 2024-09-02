import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./NavLinkItem.module.css";

export const NavLinkItem = ({ to, icon, label, count }) => {
  return (
    <>
      <NavLink
        end
        className={({ isActive }) =>
          isActive ? styles["selected"] : styles["not-selected"]
        }
        to={to}
      >
        <FontAwesomeIcon icon={icon} className={styles["icon"]} />
        <span className={styles["label"]}>{label}</span>
      </NavLink>
      {count && <span className={styles["count"]}>({count})</span>}
    </>
  );
};
