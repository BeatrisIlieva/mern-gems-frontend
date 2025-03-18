import { memo } from "react";

import { InfoMessage } from "../../../reusable/InfoMessage/InfoMessage";
import { CardSlider } from "../../../common/CardSlider/CardSlider";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

import {
  SUBTITLES_BY_LANGUAGE,
  EMPTY_BAG_TITLE,
} from "../../../../constants/languageRelated";

import styles from "./EmptyBag.module.css";

export const EmptyBag = memo(() => {
  const { language } = useLanguageContext();

  const title = EMPTY_BAG_TITLE[language];

  const subtitle = SUBTITLES_BY_LANGUAGE[language];

  return (
    <section id={styles["empty-bag"]}>
      <InfoMessage title={title} subtitle={subtitle} />
      <CardSlider />
    </section>
  );
});
