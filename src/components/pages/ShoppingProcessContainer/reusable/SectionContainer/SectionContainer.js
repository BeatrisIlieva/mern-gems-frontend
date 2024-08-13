import { Children } from "react";

import styles from "./SectionContainer.module.css";

export const SectionContainer = ({ children }) => {
  const childrenArray = Children.toArray(children);

  return (
    <section className={styles["child"]}>
      {childrenArray.map((child, index) => (
        <div key={index} className={styles["wrapper"]}>
          {child}
        </div>
      ))}
    </section>
  );
};