import { useLocation } from "react-router-dom";

import { QuestionMark } from "./QuestionMark/QuestionMark";
import { FieldContainer } from "./FieldContainer/FieldContainer";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { SuccessMessage } from "./SuccessMessage/SuccessMessage";

import styles from "./FieldBox.module.css";

export const FieldBox = ({
  values,
  value,
  currentKey,
  clickHandler,
  blurHandler,
  changeHandler,
  initialFormValues,
  userInformation,
}) => {
  const location = useLocation();

  return (
    <div key={currentKey} className={styles["field-box"]}>
      {currentKey === "Email" && location.pathname !== "/users/account" && (
        <QuestionMark />
      )}
      <FieldContainer
        values={values}
        value={value}
        clickHandler={clickHandler}
        blurHandler={blurHandler}
        changeHandler={changeHandler}
        initialFormValues={initialFormValues}
        userInformation={userInformation}
        currentKey={currentKey}
      />
      <ErrorMessage values={values} value={value} />
      <SuccessMessage values={values} value={value} />
    </div>
  );
};
