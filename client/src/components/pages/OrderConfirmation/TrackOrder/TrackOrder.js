import { Link } from "react-router-dom";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

import { MESSAGE_BY_LANGUAGE } from "./constants/languageRelated";

import styles from "./TrackOrder.module.css";

export const TrackOrder = () => {
  const { language } = useLanguageContext();

  const message = MESSAGE_BY_LANGUAGE[language];

  return (
    <Link to={"/users/account"} className={styles["link"]}>
      <span className={styles["violet"]}>{message}</span>
    </Link>
  );
};
