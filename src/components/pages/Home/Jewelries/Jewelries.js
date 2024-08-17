import { HeroBanner } from "./HeroBanner/HeroBanner";
import { Bracelet } from "./Bracelet/Bracelet";
import { RingAndEarring } from "./RingAndEarring/RingAndEarring";
import { Necklace } from "./Necklace/Necklace";

import { Bracelets } from "./Bracelet/Bracelets/Bracelets";
import { Earrings } from "./RingAndEarring/Earrings/Earrings";
import { Necklaces } from "./Necklace/Necklaces/Necklaces";
import { Rings } from "./RingAndEarring/Rings/Rings";
import styles from "./Jewelries.module.css";

export const Jewelries = () => {
  return (
    <section id={styles["jewelries"]}>
      <HeroBanner />
      <div className={styles["wrapper"]}>
        <Bracelets />
        <Earrings />
        <Necklaces />
        <Rings />
      </div>
    </section>
  );
};
