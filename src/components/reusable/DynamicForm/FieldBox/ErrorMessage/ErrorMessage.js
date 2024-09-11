import { useLocation } from "react-router-dom";

import { QuestionMark } from "./QuestionMark/QuestionMark";

import { PASSWORD_REQUIREMENTS } from "../../../../../constants/password";

import styles from "./ErrorMessage.module.css";

export const ErrorMessage = ({ values, value, currentKey }) => {
  const location = useLocation();

  return (
    <>
      {values[value].errorMessage && (
        <div className={styles["error-message"]} data-testid={`${value}-error`}>
          {values[value].errorMessage}
          {currentKey === "Password" &&
            location.pathname !== "/users/account" && (
              <QuestionMark text={PASSWORD_REQUIREMENTS} />
            )}
          {(currentKey === "NewPassword" ||
            currentKey === "RetypeNewPassword") && (
            <QuestionMark text={PASSWORD_REQUIREMENTS} />
          )}
        </div>
      )}
    </>
  );
};
