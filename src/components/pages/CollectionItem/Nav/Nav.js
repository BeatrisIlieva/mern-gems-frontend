import { useLocation, Link } from "react-router-dom";

import styles from "./Nav.module.css"

export const Nav = () => {
  const location = useLocation();

  let category = location.pathname.split("/")[2];

  category = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <nav className={styles["nav"]}>
      <ul className={styles["list"]} role="list">
        <Link to={"/collection"}>
          <li className={styles["item"]}>Collection</li>
        </Link>
          <li className={styles["item"]}>{category}</li>
      </ul>
    </nav>
  );
};
