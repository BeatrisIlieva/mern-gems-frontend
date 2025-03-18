import { Link } from "react-router-dom";

import { NormalTitle } from "../../../reusable/NormalTitle/NormalTitle";
import { SwitchLanguage } from "../../../reusable/SwitchLanguage/SwitchLanguage";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

import { GO_TO_BAG_BUTTON_NAMING } from "./constants/languageRelated";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./MiniHeader.module.css";

export const MiniHeader = () => {
  const { language } = useLanguageContext();

  return (
    <header className={styles["mini-header"]}>
      <Link to={"/users/shopping-bag"} className={styles["wrapper"]}>
        <FontAwesomeIcon icon={faArrowLeftLong} className={styles["icon"]} />
        <NormalTitle title={GO_TO_BAG_BUTTON_NAMING[language]} />
      </Link>
      <SwitchLanguage variant={"to-the-left"} />
    </header>
  );
};
