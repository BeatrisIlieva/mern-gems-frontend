import { useNavigate } from "react-router-dom";

import { MiniImages } from "../../../common/MiniImages/MiniImages";
import { StockStatus } from "../../../common/StockStatus/StockStatus";
import { Form } from "./Form/Form";
import { DualTitleSection } from "../../../reusable/DualTitleSection/DualTitleSection";
import { LargeTitle } from "../../../reusable/LargeTitle/LargeTitle";
import { Paragraph } from "../../../reusable/Paragraph/Paragraph";

import { slugify } from "../../../../utils/slugify";

import styles from "./InfoAndAction.module.css";

export const InfoAndAction = ({ jewelriesByCategory, toggleDisplayPopup }) => {
  const navigate = useNavigate();
  
  const miniImagesClickHandler = (colorTitle) => {
    const categoryTitle = jewelriesByCategory[0].categories[0].title;

    const slugifiedCategoryTitle = slugify(categoryTitle);

    const slugifiedColorTitle = slugify(colorTitle);

    navigate(`/collection/${slugifiedCategoryTitle}/${slugifiedColorTitle}`);
  };

  return (
    <div className={styles["outer-wrapper"]}>
      <div className={styles["wrapper"]}>
        <DualTitleSection
          firstTitle={
            <MiniImages
              jewelriesByCategory={jewelriesByCategory}
              clickHandler={miniImagesClickHandler}
            />
          }
          secondTitle={
            <StockStatus jewelriesByCategory={jewelriesByCategory} />
          }
          variant={"regular"}
        />
        <div>
          <LargeTitle title={jewelriesByCategory[0].title} textAlign={"left"} />
          <Paragraph
            text={`${jewelriesByCategory[0].description}.`}
            textAlign={"left"}
            color={"gray"}
          />
        </div>
      </div>
      <Form
        jewelriesByCategory={jewelriesByCategory}
        toggleDisplayPopup={toggleDisplayPopup}
      />
    </div>
  );
};
