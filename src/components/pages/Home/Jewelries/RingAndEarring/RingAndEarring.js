import { Rings } from "../Rings/Rings";
import { Earrings } from "../Earrings/Earrings";

import styles from "./RingAndEarring.module.css";

export const RingAndEarring = () => {
  return (
    <section id={styles["ring-and-earring"]}>
      <div className={styles["cards-wrapper"]}>
        <Rings />
        <Earrings />
      </div>
      <div className={styles["thumbnail"]}>
        <img
          lassName={styles["image"]}
          src="https://res.cloudinary.com/deztgvefu/image/upload/v1723886288/discover/sbs_lp_forgetmenot_h1qc12.jpg"
          alt="Forget-Me-Not-Collection"
        />
      </div>
    </section>
  );
};
