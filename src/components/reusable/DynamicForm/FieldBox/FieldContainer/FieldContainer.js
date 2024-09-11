import { useState, memo } from "react";

import { Input } from "./Input/Input";
import { Label } from "./Label/Label";
import { PasswordVisibilityIcon } from "./PasswordVisibilityIcon/PasswordVisibilityIcon";

import styles from "./FieldContainer.module.css";

export const FieldContainer = memo(
  ({
    clickHandler,
    blurHandler,
    changeHandler,
    userInformation,
    initialFormValues,
    values,
    value,
    currentKey,
    // displayPassword
  }) => {

    const [displayPassword, setDisplayPassword] = useState(false);

    const toggleDisplayPassword = () => {
      setDisplayPassword((displayPassword) => !displayPassword);
    };

    return (
      <div
        data-testid="field-container"
        className={`${styles["field-container"]} ${
          values[value].errorMessage !== "" ? styles["error"] : ""
        }`.trim()}
        onClick={() => clickHandler(value)}
        onBlur={() => blurHandler(value)}
      >
        <Input
          changeHandler={changeHandler}
          clickHandler={clickHandler}
          userInformation={userInformation}
          values={values}
          value={value}
          currentKey={currentKey}
          displayPassword={displayPassword}
        />
        <Label
          initialFormValues={initialFormValues}
          values={values}
          value={value}
          currentKey={currentKey}
          displayPassword={displayPassword}
          toggleDisplayPassword={toggleDisplayPassword}
        />
        {(currentKey === "NewPassword" ||
          currentKey === "Password" ||
          currentKey === "RetypeNewPassword") && (
          <PasswordVisibilityIcon
            displayPassword={displayPassword}
            toggleDisplayPassword={toggleDisplayPassword}
          />
        )}
      </div>
    );
  }
);
