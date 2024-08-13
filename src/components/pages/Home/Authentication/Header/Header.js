import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";

import styles from "./Header.module.css";

export const Header = ({ title }) => {
  return (
    <div className={styles["header"]}>
      <LargeTitle title={title} />
    </div>
  );
};
