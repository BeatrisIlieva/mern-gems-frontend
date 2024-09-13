import { useNavigate } from "react-router-dom";

import { MiniImage } from "../../MiniImage/MiniImage";
import { Paragraph } from "../../../../../reusable/Paragraph/Paragraph";
import { LargeTitle } from "../../../../../reusable/LargeTitle/LargeTitle";
import { Button } from "../../../../../reusable/Button/Button";

import { useLanguageContext } from "../../../../../../contexts/LanguageContext";

import {
  TITLE_BY_LANGUAGE,
  DESCRIPTION_BY_LANGUAGE,
  BUTTON_TITLE_BY_LANGUAGE,
} from "./constants/languageRelated";
import { IMAGE_BY_URL_AND_VARIANT } from "./constants/imagesByUrlAndVariant";

import styles from "./Description.module.css";

export const Description = () => {
  const { language } = useLanguageContext();

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/collection");
  };

  const title = TITLE_BY_LANGUAGE[language];

  const description = DESCRIPTION_BY_LANGUAGE[language];

  const buttonTitle = BUTTON_TITLE_BY_LANGUAGE[language];

  return (
    <div className={styles["description"]}>
      <div className={styles["description-wrapper"]}>
        <div className={styles["outer-wrapper"]}>
          <MiniImage
            imageUrl={IMAGE_BY_URL_AND_VARIANT.butterfly.imageUrl}
            variant={IMAGE_BY_URL_AND_VARIANT.butterfly.variant}
            waveEffect={IMAGE_BY_URL_AND_VARIANT.butterfly.waveEffect}
          />
          <LargeTitle title={title} textAlign={"align-center"} />
          <div className={styles["inner-wrapper"]}>
            <MiniImage
              imageUrl={IMAGE_BY_URL_AND_VARIANT.white.imageUrl}
              variant={IMAGE_BY_URL_AND_VARIANT.white.variant}
              waveEffect={IMAGE_BY_URL_AND_VARIANT.white.waveEffect}
            />
            <Paragraph
              text={description}
              textAlign={"center"}
              color={"white"}
            />
            <div className={styles["button"]}>
              <Button
                variant={"white"}
                title={buttonTitle}
                callBackFunction={clickHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
