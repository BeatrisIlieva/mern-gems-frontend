import { NavLink } from "react-router-dom";

import { SmallTitle } from "../../SmallTitle/SmallTitle";

import styles from "./Navigation.module.css";

const navItems = [
  { to: "bracelets", label: "Bracelets" },
  { to: "earrings", label: "Earrings" },
  { to: "necklaces", label: "Necklaces & Pendants" },
  { to: "rings", label: "Rings" },
];

export const Navigation = () => {
  return (
    <nav className={styles["sub-nav"]}>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          className={({ isActive }) =>
            isActive ? styles["selected"] : styles["sub-nav-title"]
          }
          to={item.to}
        >
          <SmallTitle title={item.label} />
        </NavLink>
      ))}
    </nav>
  );
};
