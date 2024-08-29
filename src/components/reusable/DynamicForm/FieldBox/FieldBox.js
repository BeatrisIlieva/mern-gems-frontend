import { useLocation } from "react-router-dom";

import { QuestionMark } from "./QuestionMark/QuestionMark";
import { FieldContainer } from "./FieldContainer/FieldContainer";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { SuccessMessage } from "./SuccessMessage/SuccessMessage";

import { PASSWORD_REQUIREMENTS } from "../../../../constants/password";

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
  fieldVariant,
}) => {
  const location = useLocation();

  return (
    <div key={currentKey} className={`${styles[fieldVariant]}`}>
      {currentKey === "Password" && location.pathname !== "/users/account" && (
        <QuestionMark text={PASSWORD_REQUIREMENTS} />
      )}
      {currentKey === "NewPassword" && (
        <QuestionMark text={PASSWORD_REQUIREMENTS} />
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
