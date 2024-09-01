import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./NavLinkItem.module.css";

export const NavLinkItem = ({ items }) => {
  return (
    <nav>
      <ul className={styles["list"]} role="list">
        {items.map((item, index) => (
          <li
            className={styles["list-item"]}
            key={`${item.label}-${item.to}-${index}`}
          >
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
              <span className={`${styles["list-item"]} ${styles["label"]}`}>
                {item.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
