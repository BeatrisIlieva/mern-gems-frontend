import { HeroBanner } from "./HeroBanner/HeroBanner";
import { Bracelet } from "./Bracelet/Bracelet";
import { RingAndEarring } from "./RingAndEarring/RingAndEarring";
import { Necklace } from "./Necklace/Necklace";

import styles from "./Jewelries.module.css";

export const Jewelries = () => {
  return (
    <section className={styles["jewelries"]}>
      <HeroBanner/>
      <Bracelet />
      <RingAndEarring />
      <Necklace/>
    </section>
  );
};
