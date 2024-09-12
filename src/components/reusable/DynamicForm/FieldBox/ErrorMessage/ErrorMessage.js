import { useLocation } from "react-router-dom";

import { QuestionMark } from "./QuestionMark/QuestionMark";

import {
  PASSWORD_REQUIREMENTS,
  PASSWORD_MISMATCH_ERROR_MESSAGE,
} from "../../../../../constants/password";

import styles from "./ErrorMessage.module.css";

export const ErrorMessage = ({ values, value, currentKey }) => {
  const location = useLocation();

  const fieldIsPasswordAndStageIsAuthentication =
    currentKey === "Password" && location.pathname === "/";

  const fieldIsNewPasswordOrRetypeNewPasswordAndStageIsUpdatePassword =
    (currentKey === "NewPassword" || currentKey === "RetypeNewPassword") &&
    values[value].errorMessage !== PASSWORD_MISMATCH_ERROR_MESSAGE;

  const displayQuestionMark =
    fieldIsPasswordAndStageIsAuthentication ||
    fieldIsNewPasswordOrRetypeNewPasswordAndStageIsUpdatePassword;

  return (
    <>
      {values[value].errorMessage && (
        <div className={styles["error-message"]} data-testid={`${value}-error`}>
          {values[value].errorMessage}
          {displayQuestionMark && <QuestionMark text={PASSWORD_REQUIREMENTS} />}
        </div>
      )}
    </>
  );
};
