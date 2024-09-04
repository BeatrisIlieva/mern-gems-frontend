import { Link } from "react-router-dom";

import { BagHeader } from "../../../../common/BagHeader/BagHeader";
import { BagList } from "../../../../common/BagList/BagList";
import { Button } from "../../../../reusable/Button/Button";
import { DualTitleSection } from "../../../../reusable/DualTitleSection/DualTitleSection";

import { useBagContext } from "../../../../../contexts/BagContext";

import styles from "./NonEmptyMiniBag.module.css";

export const NonEmptyMiniBag = ({ toggleDisplayMiniBagPopup }) => {
  const { totalPrice } = useBagContext();

  const clickHandler = () => {
    document.body.style.overflow = "visible";

    toggleDisplayMiniBagPopup();
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
          <Link to={"/users/shopping-bag"} className={styles["no-decoration"]}>
            <Button
              title={"View Bag"}
              buttonIsDisabled={false}
              callBackFunction={clickHandler}
              variant={"pink"}
            />
          </Link>
          <Link to={"/checkout"} className={styles["no-decoration"]}>
            <Button
              title={"Continue Checkout"}
              buttonIsDisabled={false}
              callBackFunction={clickHandler}
              variant={"gray"}
            />
          </Link>
        </div>
      </>
    </>
  );
};
