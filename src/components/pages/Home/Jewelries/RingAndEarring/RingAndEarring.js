import { Rings } from "./Rings/Rings";
import { Earrings } from "./Earrings/Earrings";

import styles from "./RingAndEarring.module.css";

export const RingAndEarring = () => {
  return (
    <section id={styles["ring-and-earring"]}>
      <Rings />
      <Earrings />
    </section>
  );
};
