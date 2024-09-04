import { LargeTitle } from "../LargeTitle/LargeTitle";
import { Paragraph } from "../Paragraph/Paragraph";

import styles from "./InfoMessage.module.css";

export const InfoMessage = ({ title, subtitle }) => {
  return (
    <section className={styles["info-message"]}>
      <div className={styles["message"]}>
        <LargeTitle title={title} textAlign={"center"} />
        <Paragraph text={subtitle} textAlign={"center"} color={"gray"} />
      </div>
    </section>
  );
};
