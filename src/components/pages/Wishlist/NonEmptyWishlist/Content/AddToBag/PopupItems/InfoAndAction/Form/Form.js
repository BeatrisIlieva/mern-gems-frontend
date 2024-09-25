import { Sizes } from "../../../../../../../../reusable/Sizes/Sizes"
import { Button } from "../../../../../../../../reusable/Button/Button";

import { useLanguageContext } from "../../../../../../../../../contexts/LanguageContext";

import { useAddToBagForm } from "../../../../../../../../../hooks/useAddToBagForm";

import { ADD_TO_BAG_BUTTON_TITLE } from "./constants/languageRelated";

import styles from "./Form.module.css";

export const Form = ({
  jewelriesByCategory,
  toggleDisplayPopup,
  toggleDisplayMiniBagPopup,
}) => {
  const { language } = useLanguageContext();

  const { errorMessage, changeHandler, onSubmit, selectedSize } =
    useAddToBagForm({ jewelriesByCategory, toggleDisplayPopup });

  const inventories = jewelriesByCategory[0].inventories;

  const buttonClickHandler = () => {
    if (selectedSize) {
      toggleDisplayMiniBagPopup();
    }
  };

  return (
    <form method="POST" onSubmit={onSubmit} className={styles["form"]}>
      <Sizes
        inventories={inventories}
        errorMessage={errorMessage}
        changeHandler={changeHandler}
        selectedSize={selectedSize}
      />
      <div className={styles["button-container"]}>
        <Button
          variant={"gray"}
          title={ADD_TO_BAG_BUTTON_TITLE[language]}
          callBackFunction={buttonClickHandler}
        />
      </div>
    </form>
  );
};
