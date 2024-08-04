import styles from "./DynamicForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { QuestionMark } from "./QuestionMark/QuestionMark";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const DynamicForm = ({
  values,
  formKeys,
  clickHandler,
  blurHandler,
  changeHandler,
  initialFormValues,
  userInformation,
  buttonTitle,
  onSubmit,
}) => {

  const location = useLocation();

  const [hoveredQuestionMark, setHoveredQuestionMark] = useState(false);

  const onHoverQuestionMark = () => {
    setHoveredQuestionMark(true);
  };

  const onUnhoverQuestionMark = () => {
    setHoveredQuestionMark(false);
  };

  return (
    <form method="POST" onSubmit={onSubmit} className={styles["form"]}>
      {Object.entries(formKeys).map(([key, value]) => (
        <div key={key} className={styles["field-box"]}>
          {key === "Email" && location.pathname !== "/users/account" && (
            <span>
              {hoveredQuestionMark && <QuestionMark />}
              <FontAwesomeIcon
                icon={faQuestion}
                className={styles["icon"]}
                onMouseEnter={() => onHoverQuestionMark()}
                onMouseLeave={() => onUnhoverQuestionMark()}
              />
            </span>
          )}
          <div
            className={`${styles["field-container"]} ${
              values[value].errorMessage !== "" ? styles["error"] : ""
            }`.trim()}
            onClick={() => clickHandler(value)}
            onBlur={() => blurHandler(value)}
          >
            <input
              type={values[value].fieldType}
              name={value}
              id={value}
              defaultValue={
                key !== "Password"
                  ? userInformation
                    ? userInformation[value]
                    : values[key]
                  : ""
              }
              onChange={(e) => changeHandler(value, e.target.value)}
              onFocus={() => clickHandler(value)}
            />
            <label
              htmlFor={value}
              className={`${styles["label"]} ${
                values[value].isFocused === true ? styles["isFocused"] : ""
              }`.trim()}
            >
              {initialFormValues[value].fieldLabel}
            </label>
          </div>
          {values[value].errorMessage && (
            <div
              className={styles["error-message"]}
              data-testid={`${value}-error`}
            >
              {values[value].errorMessage}
            </div>
          )}
          {values[value].successMessage && (
            <div
              className={styles["success-message"]}
              data-testid={`${value}-success`}
            >
              {values[value].successMessage}
            </div>
          )}
        </div>
      ))}
      <button className={styles["button"]} type="submit">
        {buttonTitle}
      </button>
    </form>
  );
};
