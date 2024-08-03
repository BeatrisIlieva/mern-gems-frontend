import { EmptyBagHeader } from "../../EmptyBagHeader/EmptyBagHeader";

import { Collection } from "../../Collection/Collection";

import styles from "./EmptyMiniBag.module.css";

export const EmptyMiniBag = () => {
  return (
    <section className={styles["empty-mini-bag"]}>
      <div className={styles["header"]}>
        <EmptyBagHeader />
      </div>
      <div className={styles["collection"]}>
        <Collection />
      </div>
    </section>
  );
};
