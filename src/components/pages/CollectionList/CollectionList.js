import { Collection } from "../../common/Collection/Collection";

import styles from "./ColectionList.module.css";

export const CollectionList = () => {
  return (
    <section id={styles["collection-list"]}>
      <Collection />
    </section>
  );
};
