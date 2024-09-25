import { useNavigate } from "react-router-dom";

import { BagHeader } from "../../BagHeader/BagHeader";
import { BagList } from "../../BagList/BagList";
import { Button } from "../../../reusable/Button/Button";

import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useBagContext } from "../../../../contexts/BagContext";

import { CONTINUE_CHECKOUT_BUTTON_NAMING } from "../../../../constants/languageRelated";
import { VIEW_BAG_BUTTON_NAMING } from "./constants/languageRelated";

import styles from "./NonEmptyMiniBag.module.css";

export const NonEmptyMiniBag = ({ popupCloseHandler }) => {
  const { language } = useLanguageContext();

  const { totalPrice } = useBagContext();

  const navigate = useNavigate();

  const clickHandler = async (url) => {
    await popupCloseHandler();

    navigate(url);
  };

  return (
    <>
      <>
        <BagHeader />
        <BagList variant={"mini"} />
      </>
      <>
        <div className={styles["bottom-container"]}>
          <div className={styles["button"]}>
            <Button
              title={VIEW_BAG_BUTTON_NAMING[language]}
              buttonIsDisabled={false}
              callBackFunction={() => clickHandler("/users/shopping-bag")}
              variant={"pink"}
            />
          </div>
          <div className={styles["button"]}>
            <Button
              title={`${CONTINUE_CHECKOUT_BUTTON_NAMING[language]} $ ${totalPrice}`}
              buttonIsDisabled={false}
              callBackFunction={() => clickHandler("/checkout")}
              variant={"gray"}
            />
          </div>
        </div>
      </>
    </>
  );
};
