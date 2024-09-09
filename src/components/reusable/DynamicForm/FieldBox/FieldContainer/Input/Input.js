import { memo } from "react";

export const Input = memo(
  ({
    changeHandler,
    clickHandler,
    userInformation,
    values,
    value,
    currentKey,
  }) => {
    return (
      <input
        data-testid={`${value}-input`}
        type={values[value].fieldType}
        name={value}
        id={value}
        defaultValue={
          currentKey !== "Password"
            ? userInformation
              ? userInformation[value]
              : values[currentKey]
            : ""
        }
        onChange={(e) => changeHandler(value, e.target.value)}
        onFocus={() => clickHandler(value)}
      />
    );
  }
);
