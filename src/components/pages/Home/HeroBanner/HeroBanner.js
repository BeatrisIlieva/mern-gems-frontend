import { Collection } from "./Collection/Collection";

import { useIsTransitioning } from "../../../../hooks/useIsTransitioning";

import styles from "./HeroBanner.module.css";

export const HeroBanner = () => {
  const { isTransitioning } = useIsTransitioning();

  return (
    <section className={styles["hero-banner"]}>
      <Collection />
    </section>
  );
};
