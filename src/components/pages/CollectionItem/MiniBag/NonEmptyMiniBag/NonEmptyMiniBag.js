import { useNavigate } from "react-router-dom";

import { BagHeader } from "../../../../common/BagHeader/BagHeader";
import { BagList } from "../../../../common/BagList/BagList";
import { Button } from "../../../../reusable/Button/Button";
import { DualTitleSection } from "../../../../reusable/DualTitleSection/DualTitleSection";

import { useBagContext } from "../../../../../contexts/BagContext";

import styles from "./NonEmptyMiniBag.module.css";

export const NonEmptyMiniBag = ({ popupCloseHandler }) => {
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
          <DualTitleSection
            firstTitle={"Total"}
            secondTitle={`$ ${totalPrice}`}
            variant={"bolded"}
          />
          <Button
            title={"View Bag"}
            buttonIsDisabled={false}
            callBackFunction={() => clickHandler("/users/shopping-bag")}
            variant={"pink"}
          />
          <Button
            title={"Continue Checkout"}
            buttonIsDisabled={false}
            callBackFunction={() => clickHandler("/checkout")}
            variant={"gray"}
          />
        </div>
      </>
    </>
  );
};
