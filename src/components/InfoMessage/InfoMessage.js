import { LargeTitle } from "../LargeTitle/LargeTitle";
import { NormalTitle } from "../NormalTitle/NormalTitle";

import styles from "./InfoMessage.module.css";

export const InfoMessage = ({ title, subtitle }) => {
  return (
    <div className={styles["title"]}>
      <LargeTitle title={title} />
      <NormalTitle title={subtitle} variant={"regular"} />
    </div>
  );
};
