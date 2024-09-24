import { useLocation, Link } from "react-router-dom";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

import { CATEGORY_TITLES_BY_LANGUAGE } from "../../../../constants/languageRelated";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./Nav.module.css";

export const Nav = () => {
  const location = useLocation();

  const { language } = useLanguageContext();

  let category = location.pathname.split("/")[2];

  category = category.charAt(0).toUpperCase() + category.slice(1);

  const collectionTitleByLanguage =
    CATEGORY_TITLES_BY_LANGUAGE[category][language];

  return (
    <nav className={styles["nav"]}>
      <ul className={styles["list"]} role="list">
        <Link to={"/collection"} className={styles["no-decoration"]}>
          <li className={styles["item"]}>Collection</li>
        </Link>
        <FontAwesomeIcon icon={faCircle} className={styles["icon"]} />
        <li className={`${styles["item"]} ${styles["decoration"]}`}>
          {collectionTitleByLanguage}
        </li>
      </ul>
    </nav>
  );
};
