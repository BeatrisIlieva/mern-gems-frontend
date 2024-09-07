import { memo } from "react";

const Input = ({
  changeHandler,
  clickHandler,
  userInformation,
  values,
  value,
  currentKey,
}) => {
  return (
    <input
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
};

export default memo(Input);
