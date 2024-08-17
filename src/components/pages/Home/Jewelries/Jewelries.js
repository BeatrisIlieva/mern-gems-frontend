import { HeroBanner } from "./HeroBanner/HeroBanner";
import { Bracelet } from "./Bracelet/Bracelet";
import { RingAndEarring } from "./RingAndEarring/RingAndEarring";
import { Necklace } from "./Necklace/Necklace";

import styles from "./Jewelries.module.css";

export const Jewelries = () => {
  return (
    <section id={styles["jewelries"]}>
      <HeroBanner />
      <div className={styles["wrapper"]}>
        {/* <Bracelet /> */}
        <RingAndEarring />
        <Necklace />
      </div>
    </section>
  );
};
