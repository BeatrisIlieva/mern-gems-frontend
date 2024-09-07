import {memo} from "react"

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./NavLinkItem.module.css";

const NavLinkItem = ({ to, icon, label, count }) => {
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
      {(count || count === 0) && <span className={styles["count"]}>({count})</span>}
    </>
  );
};

export default memo(NavLinkItem)
