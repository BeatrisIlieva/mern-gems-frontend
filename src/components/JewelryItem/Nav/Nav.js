import { Link } from "react-router-dom";

import { transformUrlSegment } from "../../../utils/transformUrlSegment";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Nav.module.css"

export const Nav = ({ collection, category }) => {
  const collectionTitle = transformUrlSegment(collection);
  const categoryTitle = transformUrlSegment(category);

  return (
    <nav className={styles["nav"]}>
      <Link
        to={`/${collection}`}
        className={styles["nav-item"]}
      >{`${collectionTitle}`}</Link>
      <FontAwesomeIcon icon={faCircle} className={styles["icon"]} />
      <Link
        to={`/${collection}/${category}`}
        className={styles["nav-item"]}
      >{`${categoryTitle}`}</Link>
    </nav>
  );
};
