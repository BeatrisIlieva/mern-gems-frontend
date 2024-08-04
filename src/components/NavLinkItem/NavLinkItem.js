import { NavLink } from "react-router-dom";
import { Fragment } from "react";

import { MediumTitle } from "../MediumTitle/MediumTitle";

import { Icon } from "../Icon/Icon";

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
                <Icon icon={item.icon} variant={item.iconVariant} />
                {item.label} 
              </NavLink>
            </li>
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};
