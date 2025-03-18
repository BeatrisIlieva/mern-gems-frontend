import { memo } from "react";

import { FieldContainer } from "./FieldContainer/FieldContainer";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";

import styles from "./FieldBox.module.css";

export const FieldBox = memo(
  ({
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
    return (
      <div key={currentKey} className={`${styles[fieldVariant]}`}>
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
        <ErrorMessage values={values} value={value} currentKey={currentKey} />
      </div>
    );
  }
);
