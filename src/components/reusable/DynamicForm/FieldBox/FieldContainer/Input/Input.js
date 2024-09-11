import { memo } from "react";

export const Input = memo(
  ({
    changeHandler,
    clickHandler,
    userInformation,
    values,
    value,
    currentKey,
    displayPassword,
  }) => {
    const inputTypeIsText =
      displayPassword &&
      (currentKey === "NewPassword" ||
        currentKey === "Password" ||
        currentKey === "RetypeNewPassword");

    return (
      <input
        data-testid={`${value}-input`}
        type={inputTypeIsText ? "text" : values[value].fieldType}
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
