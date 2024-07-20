import { Link } from "react-router-dom";

import styles from "./NavItem.module.css";

export const NavItem = ({ path, title }) => {
  return (
    <li>
      <Link className={styles["nav-item"]} to={path}>
        <h1 className={styles["nav-title"]}>{title}</h1>
      </Link>
    </li>
  );
};
