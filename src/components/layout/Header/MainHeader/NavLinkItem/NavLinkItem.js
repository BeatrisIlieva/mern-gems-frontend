import { memo } from "react";

import { NavLink } from "react-router-dom";
import Label from "./Label/Label";

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
        <Label title={label} />
      </NavLink>
      {(count || count === 0) && (
        <span className={styles["count"]}>({count})</span>
      )}
    </>
  );
};

export default memo(NavLinkItem);
