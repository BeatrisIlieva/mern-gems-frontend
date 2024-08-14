import { NavLink } from "react-router-dom";
import { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./NavLinkItem.module.css";

export const NavLinkItem = ({ items }) => {
  return (
    <nav className={styles["nav"]}>
      <ul className={styles["list"]} role="list">
        {items.map((item, index) => (
          <Fragment key={`${item.label}-${item.to}-${index}`}>
            <li className={styles["list-item"]}>
              <NavLink
                end
                className={({ isActive }) =>
                  isActive ? styles["selected"] : styles["not-selected"]
                }
                to={item.to}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`${styles["icon"]} ${styles[item.variant]}`}
                />
                <span className={`${styles["list-item"]} ${styles["label"]}`}>{item.label}</span>
              </NavLink>
            </li>
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};
