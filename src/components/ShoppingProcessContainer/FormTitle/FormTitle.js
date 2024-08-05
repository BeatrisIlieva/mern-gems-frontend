import { LargeTitle } from "../../LargeTitle/LargeTitle";

import styles from "./FormTitle.module.css";

export const FormTitle = ({ title }) => {
  return (
    <div className={styles["title"]}>
      <LargeTitle title={title} />
    </div>
  );
};
