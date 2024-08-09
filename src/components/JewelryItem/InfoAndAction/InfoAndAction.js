import { NormalTitle } from "../../NormalTitle/NormalTitle";
import { LargeTitle } from "../../LargeTitle/LargeTitle";
import { Form } from "./Form/Form";
import { Description } from "./Description/Description";
import { useJewelryItemContext } from "../../../contexts/JewelryItemContext";

import styles from "./InfoAndAction.module.css"

export const InfoAndAction = ({ toggleDisplayMiniBagPopup }) => {
  const { jewelry, categoryIsEarring } = useJewelryItemContext();

  return (
    <div className={styles["right-container"]}>
      <LargeTitle title={jewelry.title} />
      <Description/>
      {categoryIsEarring && <NormalTitle title={"Size:"} variant={"bolded"} />}
      <Form toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup} />
    </div>
  );
};
