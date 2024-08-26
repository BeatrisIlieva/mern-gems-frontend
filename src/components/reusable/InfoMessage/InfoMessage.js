import { LargeTitle } from "../LargeTitle/LargeTitle";
import { NormalTitle } from "../NormalTitle/NormalTitle";
import { HorizontalLine } from "../HorizontalLine/HorizontalLine";

import styles from "./InfoMessage.module.css";

export const InfoMessage = ({ title, subtitle }) => {
  return (
    <section className={styles["info-message"]}>
      <div className={styles["message"]}>
        <LargeTitle title={title} textAlign={"center"} />
        <NormalTitle title={subtitle} variant={"bolded"} />
      </div>
      <HorizontalLine variantHr={"small"} />
    </section>
  );
};
