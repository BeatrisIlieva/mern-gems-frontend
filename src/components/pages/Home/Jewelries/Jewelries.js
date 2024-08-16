import { Bracelets } from "./Bracelets/Bracelets";
import { Earrings } from "./Earrings/Earrings";
import { Necklaces } from "./Necklaces/Necklaces";
import { Rings } from "./Rings/Rings";

import styles from "./Jewelries.module.css";

export const Jewelries = () => {
  return (
    <section className={styles["jewelries"]}>
      <Bracelets />
      <Earrings />
      <Necklaces />
      <Rings />
    </section>
  );
};
