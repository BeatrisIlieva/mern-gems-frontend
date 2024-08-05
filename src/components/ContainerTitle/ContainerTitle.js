import { LargeTitle } from "../LargeTitle/LargeTitle";

import styles from "./ContainerTitle.module.css";

export const ContainerTitle = ({ title }) => {
  return (
    <div className={styles["title"]}>
      <LargeTitle title={title} />
    </div>
  );
};
