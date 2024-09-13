import { Link } from "react-router-dom";

import { NormalTitle } from "../../../reusable/NormalTitle/NormalTitle";
import { useLanguageContext } from "../../../../contexts/LanguageContext";

import { GO_TO_BAG_BUTTON_NAMING } from "./constants/languageRelated";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./MiniHeader.module.css";

export const MiniHeader = () => {
  const { language } = useLanguageContext();

  return (
    <header className={styles["header"]}>
      <Link to={"/users/shopping-bag"} className={styles["wrapper"]}>
        <FontAwesomeIcon icon={faArrowLeftLong} className={styles["icon"]} />
        <NormalTitle title={GO_TO_BAG_BUTTON_NAMING[language]} />
      </Link>
      <div>
        <img
          className={styles["logo-image"]}
          src={
            "https://res.cloudinary.com/deztgvefu/image/upload/v1724933359/forget-me-not-collection/miniImages/Screenshot_2024-08-29_at_15.08.13_ycwzhl.png"
          }
          alt="logo-image"
        />
      </div>
    </header>
  );
};
