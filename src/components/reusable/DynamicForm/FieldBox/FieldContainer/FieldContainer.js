import { memo } from "react";

import Input from "./Input/Input";
import Label from "./Label/Label";

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
  }) => {
    return (
      <div
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
        />
        <Label
          initialFormValues={initialFormValues}
          values={values}
          value={value}
        />
      </div>
    );
  }
);
