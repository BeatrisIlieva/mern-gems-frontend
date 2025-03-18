import { InfoMessage } from "../../../../reusable/InfoMessage/InfoMessage";
import { CardSlider } from "../../../../common/CardSlider/CardSlider";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";

import { TITLE_BY_LANGUAGE } from "./constants/languageRelated";
import { SUBTITLES_BY_LANGUAGE } from "../../../../../constants/languageRelated";

import styles from "./EmptyOrderHistory.module.css";

export const EmptyOrderHistory = ({ popupCloseHandler }) => {
  const { language } = useLanguageContext();

  const title = TITLE_BY_LANGUAGE[language];

  const subtitle = SUBTITLES_BY_LANGUAGE[language];

  return (
    <section id={styles["empty-order-history"]}>
      <InfoMessage title={title} subtitle={subtitle} />
      <CardSlider popupCloseHandler={popupCloseHandler} />
    </section>
  );
};
