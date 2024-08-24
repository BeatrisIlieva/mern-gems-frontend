import { Collection } from "../../common/Collection/Collection";

import styles from "./CollectionList.module.css";

export const CollectionList = () => {
  return (
    <section className={styles["collection-list"]}>
      <Collection />
    </section>
  );
};
