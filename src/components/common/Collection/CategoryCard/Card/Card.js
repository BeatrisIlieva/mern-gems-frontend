import { Content } from "./Content/Content";

import styles from "./Card.module.css";

export const Card = ({ jewelriesByCategory, updateSelectedColor }) => {
  return (
    <div className={styles["outer-wrapper"]}>
      {jewelriesByCategory.length > 0 && (
        <Content
          jewelriesByCategory={jewelriesByCategory}
          updateSelectedColor={updateSelectedColor}
        />
      )}
    </div>
  );
};
