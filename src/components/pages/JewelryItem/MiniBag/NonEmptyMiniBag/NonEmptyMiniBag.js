import { Link } from "react-router-dom";

import { BagList } from "../../../../reusable/BagList/BagList";
import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";
import { Button } from "../../../../reusable/Button/Button";
import { BagCount } from "../../../../common/BagCount/BagCount";
import { DualTitleSection } from "../../../../reusable/DualTitleSection/DualTitleSection";

import { useBagContext } from "../../../../../contexts/BagContext";

import styles from "./NonEmptyMiniBag.module.css";

export const NonEmptyMiniBag = ({ toggleDisplayMiniBagPopup }) => {
  const { totalPrice } = useBagContext();

  return (
    <section className={styles["mini-bag"]}>
      <div className={styles["title"]}>
        <LargeTitle title={"My Bag"} />
        <BagCount />
      </div>
      <BagList variant={"mini"} />
      <DualTitleSection
        firstTitle={"Total"}
        secondTitle={`$ ${totalPrice}`}
        variant={"bolded"}
      />
      <Link to={"/users/shopping-bag"} className={styles["no-decoration"]}>
        <Button
          title={"View Bag"}
          buttonIsDisabled={false}
          callBackFunction={toggleDisplayMiniBagPopup}
          variant={"pink"}
        />
      </Link>
      <Link to={"/checkout"} className={styles["no-decoration"]}>
        <Button
          title={"Continue Checkout"}
          buttonIsDisabled={false}
          callBackFunction={toggleDisplayMiniBagPopup}
          variant={"gray"}
        />
      </Link>
    </section>
  );
};
