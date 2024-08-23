import { CollectionImage } from "./CollectionImage/CollectionImage";

import styles from "./HeroBanner.module.css";

export const HeroBanner = () => {
  return (
    <article id={styles["hero-banner"]}>
      <CollectionImage />
    </article>
  );
};
