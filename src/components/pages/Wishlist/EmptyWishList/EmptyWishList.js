import { memo } from "react";

import { InfoMessage } from "../../../reusable/InfoMessage/InfoMessage";
import { CardSlider } from "../../../common/CardSlider/CardSlider";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

import {
  TITLES_BY_LANGUAGE,
  SUBTITLES_BY_LANGUAGE,
} from "./constants/languageRelated";

import styles from "./EmptyWishlist.module.css";

export const EmptyWishlist = memo(() => {
  const { language } = useLanguageContext();

  const title = TITLES_BY_LANGUAGE[language];

  const subtitle = SUBTITLES_BY_LANGUAGE[language];

  return (
    <section id={styles["empty-wishlist"]}>
      <InfoMessage title={title} subtitle={subtitle} />
      <CardSlider />
    </section>
  );
});
