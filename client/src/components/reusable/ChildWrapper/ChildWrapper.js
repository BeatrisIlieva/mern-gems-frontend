import { Children } from "react";

import styles from "./ChildWrapper.module.css";

export const ChildWrapper = ({ children }) => {
  const childrenArray = Children.toArray(children);

  return (
    <section className={styles["child-wrapper"]}>
      {childrenArray.map((child, index) => (
        <div key={index} className={styles["wrapper"]}>
          {child}
        </div>
      ))}
    </section>
  );
};
