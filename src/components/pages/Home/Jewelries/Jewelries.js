import { Bracelet } from "./Bracelet/Bracelet";
import { RingAndEarring } from "./RingAndEarring/RingAndEarring";
import { Necklace } from "./Necklace/Necklace";

import styles from "./Jewelries.module.css";

export const Jewelries = () => {
  return (
    <section className={styles["jewelries"]}>
      <Bracelet />
      <RingAndEarring />
      <Necklace/>
    </section>
  );
};
