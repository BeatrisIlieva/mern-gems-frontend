import { XLargeTitle } from "../XLargeTitle/XLargeTitle";
import { NormalTitle } from "../NormalTitle/NormalTitle";

import styles from "./InfoMessage.module.css";

export const InfoMessage = ({ title, subtitle }) => {
  return (
    <div className={styles["title"]}>
      <XLargeTitle title={title} variant={"regular"} />
      <NormalTitle title={subtitle} variant={"bolded"} />
    </div>
  );
};
