import { Collection } from "./Collection/Collection";

import styles from "./HeroBanner.module.css";

export const HeroBanner = () => {
  return (
    <section className={styles["hero-banner"]}>
      <Collection />
    </section>
  );
};
