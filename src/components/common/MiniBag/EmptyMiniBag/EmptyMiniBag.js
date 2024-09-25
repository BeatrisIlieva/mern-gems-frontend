import { InfoMessage } from "../../../reusable/InfoMessage/InfoMessage";
import { CardSlider } from "../../CardSlider/CardSlider";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

import {
  SUBTITLES_BY_LANGUAGE,
  EMPTY_BAG_TITLE,
} from "../../../../constants/languageRelated";

import styles from "./EmptyMiniBag.module.css";

export const EmptyMiniBag = ({ popupCloseHandler }) => {
  const { language } = useLanguageContext();

  const title = EMPTY_BAG_TITLE[language];

  const subtitle = SUBTITLES_BY_LANGUAGE[language];

  return (
    <section id={styles["empty-mini-bag"]} data-testid="empty-mini-bag">
      <InfoMessage title={title} subtitle={subtitle} />
      <CardSlider popupCloseHandler={popupCloseHandler} />
    </section>
  );
};
