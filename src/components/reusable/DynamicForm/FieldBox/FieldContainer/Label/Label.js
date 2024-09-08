import { memo } from "react";

import styles from "./Label.module.css";

export const Label = memo(({ initialFormValues, values, value }) => {
  return (
    <label
      htmlFor={value}
      className={`${styles["label"]} ${
        values[value].isFocused === true ? styles["isFocused"] : ""
      }`.trim()}
    >
      {initialFormValues[value].fieldLabel}
    </label>
  );
});
