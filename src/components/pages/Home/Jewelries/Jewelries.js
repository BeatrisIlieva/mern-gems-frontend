import { CollectionContainer } from "./CollectionContainer/CollectionContainer";
import { RingAndEarring } from "./RingAndEarring/RingAndEarring";
import { Necklace } from "./Necklace/Necklace";

import styles from "./Jewelries.module.css";

export const Jewelries = () => {
  return (
    <section className={styles["jewelries"]}>
      <CollectionContainer />
      <RingAndEarring />
      <Necklace/>
    </section>
  );
};
