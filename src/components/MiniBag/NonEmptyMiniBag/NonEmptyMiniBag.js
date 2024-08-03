import { Link } from "react-router-dom";
import { useBagContext } from "../../../contexts/BagContext";

import { BagList } from "../../BagList/BagList";

import { NormalTitle } from "../../NormalTitle/NormalTitle";

import { LargeTitle } from "../../LargeTitle/LargeTitle";

import { Button } from "../../Button/Button";

import { BagCount } from "../../BagCount/BagCount";

import styles from "./NonEmptyMiniBag.module.css";

export const NonEmptyMiniBag = ({ toggleDisplayMiniBagPopup }) => {
  const { totalPrice } = useBagContext();

  return (
    <section className={styles["mini-bag"]}>
      <div className={styles["title"]}>
        <LargeTitle title={"My Bag"} />
        <BagCount />
      </div>
      <BagList variant={"mini-bag"} />
      <div className={styles["total-price-wrapper"]}>
        <NormalTitle title={"Total"} variant={"bolded"} />
        <NormalTitle title={`$ ${totalPrice}`} variant={"bolded"} />
      </div>
      <Link to={"/users/shopping-bag"} className={styles["no-decoration"]}>
        <Button
          title={"View Bag"}
          buttonIsDisabled={false}
          callBackFunction={toggleDisplayMiniBagPopup}
          variant={"pink-button"}
        />
      </Link>
      <Link to={"/checkout"} className={styles["no-decoration"]}>
        <Button
          title={"Continue Checkout"}
          buttonIsDisabled={false}
          callBackFunction={toggleDisplayMiniBagPopup}
          variant={"gray-button"}
        />
      </Link>
    </section>
  );
};
