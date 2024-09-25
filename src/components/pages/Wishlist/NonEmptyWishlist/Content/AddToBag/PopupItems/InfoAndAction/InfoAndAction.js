import { Form } from "./Form/Form";
import { LargeTitle } from "../../../../../../../reusable/LargeTitle/LargeTitle";
import { Paragraph } from "../../../../../../../reusable/Paragraph/Paragraph";
import { MiniImages } from "../../../../../../../reusable/MiniImages/MiniImages";
import { StockStatus } from "../../../../../../../common/StockStatus/StockStatus";

import { useLanguageContext } from "../../../../../../../../contexts/LanguageContext";

import { CATEGORY_NAMES_BY_LANGUAGE } from "../../../../../../../../constants/categoryNamesByLanguage";

import styles from "./InfoAndAction.module.css";

export const InfoAndAction = ({
  popupCloseHandler,
  jewelriesByCategory,
  updateSelectedColor,
  toggleDisplayPopup,
  toggleDisplayMiniBagPopup,
  categoryId,
}) => {
  const { language } = useLanguageContext();

  const jewelryTitle = CATEGORY_NAMES_BY_LANGUAGE[categoryId][language];
  return (
    <section className={styles["info-and-action-wrapper"]}>
      <div className={styles["top-wrapper"]}>
        <StockStatus jewelriesByCategory={jewelriesByCategory} />
        <MiniImages
          jewelriesByCategory={jewelriesByCategory}
          clickHandler={updateSelectedColor}
        />
      </div>
      <div>
        <LargeTitle title={jewelryTitle} textAlign={"left"} />
        <Paragraph
          text={`${jewelriesByCategory[0].description[language]}`}
          textAlign={"left"}
          color={"gray"}
        />
      </div>
      <Form
        jewelriesByCategory={jewelriesByCategory}
        toggleDisplayPopup={toggleDisplayPopup}
        toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup}
      />
    </section>
  );
};
