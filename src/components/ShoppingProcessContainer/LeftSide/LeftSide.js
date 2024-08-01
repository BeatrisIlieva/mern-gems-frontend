import { Children } from "react";

import styles from "./LeftSide.module.css"

export const LeftSide = ({ children }) => {
  const childrenArray = Children.toArray(children);

  return (
    <div className={styles["left"]}>
      {childrenArray.map((child, index) => (
        <div key={index} className={styles["child"]}>
          {child}
        </div>
      ))}
    </div>
  );
};
