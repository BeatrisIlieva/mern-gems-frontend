import { Title } from "./Title/Title";

import styles from "./SectionContainer.module.css"

export const SectionContainer = ({ firstTitle, secondTitle, variant }) => {
  return (
    <div className={styles["wrapper"]}>
      <Title title={firstTitle} variant={variant} />
      <Title title={secondTitle} variant={variant} />
    </div>
  );
};
