import { NormalTitle } from "../../NormalTitle/NormalTitle";
import { LargeTitle } from "../../LargeTitle/LargeTitle";
import { Form } from "./Form/Form";
import { Description } from "./Description/Description";
import { useJewelryItemContext } from "../../../contexts/JewelryItemContext";

import styles from "./InfoAndAction.module.css"

export const InfoAndAction = ({ toggleDisplayMiniBagPopup }) => {
  const { jewelry, categoryIsEarring } = useJewelryItemContext();

  return (
    <section className={styles["info-and-action"]}>
      <LargeTitle title={jewelry.title} />
      <Description/>
      <Form toggleDisplayMiniBagPopup={toggleDisplayMiniBagPopup} />
    </section>
  );
};
