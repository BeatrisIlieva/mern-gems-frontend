import { Children } from "react";

import styles from "./RightSide.module.css";

export const RightSide = ({ children }) => {
  const childrenArray = Children.toArray(children);

  return (
    <div className={styles["right"]}>
      {childrenArray.map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  );
};
