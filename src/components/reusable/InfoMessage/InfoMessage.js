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
      <div className={styles["thumbnail"]}>
        <img
          src="https://res.cloudinary.com/deztgvefu/image/upload/v1725543807/forget-me-not-collection/miniImages/pngtree-sweet-pink-ribbon-png-image_13127280_cfwfwv.png"
          alt="ribbon"
          className={styles["ribbon"]}
        />
      </div>
    </section>
  );
};
