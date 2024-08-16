import { Bracelets } from "./Bracelets/Bracelets";

import styles from "./Jewelries.module.css";

export const Jewelries = () => {
  return (
    <section className={styles["jewelries"]}>
      <Bracelets />
    </section>
  );
};
