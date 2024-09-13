import { InfoMessage } from "../../reusable/InfoMessage/InfoMessage";
import { CardSlider } from "../../common/CardSlider/CardSlider";

import { useLanguageContext } from "../../../contexts/LanguageContext";

import { TITLES_BY_LANGUAGE } from "./constants/languageRelated";

import { SUBTITLES_BY_LANGUAGE } from "../../../constants/languageRelated";

import styles from "./Page404.module.css";

export const Page404 = () => {
  const { language } = useLanguageContext();

  const title = TITLES_BY_LANGUAGE[language];

  const subtitle = SUBTITLES_BY_LANGUAGE[language];

  return (
    <section id={styles["page-404"]}>
      <InfoMessage title={title} subtitle={subtitle} />
      <CardSlider />
    </section>
  );
};
