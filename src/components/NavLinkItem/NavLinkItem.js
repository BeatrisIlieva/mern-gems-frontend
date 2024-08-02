import { NavLink } from "react-router-dom";
import { Fragment } from "react";

import { MediumTitle } from "../MediumTitle/MediumTitle";

import styles from "./NavLinkItem.module.css";

export const NavLinkItem = ({ items, variant }) => {
  return (
    <nav>
      <ul className={styles["list"]} role="list">
        {items.map((item, index) => (
          <Fragment key={`${item.label}-${item.to}-${index}`}>
            <li className={styles[variant]}>
              <NavLink
                end
                className={({ isActive }) =>
                  isActive ? styles["selected"] : styles["not-selected"]
                }
                to={item.to}
              >
                {item.icon}
                <MediumTitle title={item.label} />
              </NavLink>
            </li>
            {variant === "jewelry-list" && (
              <div className={styles["vertical-line"]}></div>
            )}
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};
