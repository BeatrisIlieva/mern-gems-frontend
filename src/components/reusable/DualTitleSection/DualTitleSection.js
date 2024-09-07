import { memo } from "react";

import { Title } from "./Title/Title";

import styles from "./DualTitleSection.module.css";

const DualTitleSection = ({ firstTitle, secondTitle, variant }) => {
  return (
    <div className={styles["wrapper"]}>
      <Title title={firstTitle} variant={variant} />
      <Title title={secondTitle} variant={variant} />
    </div>
  );
};

export default memo(DualTitleSection);
