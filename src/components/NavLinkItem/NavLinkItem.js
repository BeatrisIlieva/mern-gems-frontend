import { NavLink } from "react-router-dom";

import { MediumTitle } from "../MediumTitle/MediumTitle";

import styles from "./NavLinkItem.module.css";

export const NavLinkItem = ({ children, items, variant }) => {
  return (
    <nav>
      <ul className={styles["list"]} role="list">
        {items.map((item) => (
          <>
            <li className={styles[variant]}>
              <NavLink
                key={item.to}
                end
                className={({ isActive }) =>
                  isActive ? styles["selected"] : styles["not-selected"]
                }
                to={item.to}
              >
                {children}
                <MediumTitle title={item.label} />
              </NavLink>
            </li>
            {variant === "jewelry-list" && (
              <div className={styles["vertical-line"]}></div>
            )}
          </>
        ))}
      </ul>
    </nav>
  );
};
