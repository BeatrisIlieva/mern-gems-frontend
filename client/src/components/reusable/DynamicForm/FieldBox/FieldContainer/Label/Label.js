import { memo } from "react";

import { useLanguageContext } from "../../../../../../contexts/LanguageContext";

import styles from "./Label.module.css";

export const Label = memo(({ initialFormValues, values, value }) => {
  const { language } = useLanguageContext();

  return (
    <label
      htmlFor={value}
      className={`${styles["label"]} ${
        values[value].isFocused === true ? styles["isFocused"] : ""
      }`.trim()}
    >
      {initialFormValues[value].fieldLabel[language]}
    </label>
  );
});
