import { XLargeTitle } from "../reusable/XLargeTitle/XLargeTitle";
import { NormalTitle } from "../reusable/NormalTitle/NormalTitle";
import { HorizontalLine } from "../reusable/HorizontalLine/HorizontalLine";

import styles from "./InfoMessage.module.css";

export const InfoMessage = ({ title, subtitle }) => {
  return (
    <section className={styles["info-message"]}>
      <div className={styles["message"]}>
        <XLargeTitle title={title} variant={"regular"} />
        <NormalTitle title={subtitle} variant={"bolded"} />
      </div>
      <HorizontalLine variantHr={"small"} />
    </section>
  );
};
