import styles from "./Label.module.css";

export const Label = ({ initialFormValues, values, value }) => {
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
};
