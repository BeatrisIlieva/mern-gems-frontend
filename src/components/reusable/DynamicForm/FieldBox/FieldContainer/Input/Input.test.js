import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Input } from "./Input";

describe("Input Component", () => {
  const changeHandler = jest.fn();
  const clickHandler = jest.fn();

  const userInformation = {
    email: "user@example.com",
    username: "username",
  };
  const values = {
    email: {
      fieldType: "email",
    },
    username: {
      fieldType: "text",
    },
    password: {
      fieldType: "password",
    },
  };
  const value = "email";
  const currentKey = "username";

  test("renders with correct attributes and default value", () => {
    render(
      <Input
        changeHandler={changeHandler}
        clickHandler={clickHandler}
        userInformation={userInformation}
        values={values}
        value={value}
        currentKey={currentKey}
      />
    );

    const input = screen.getByTestId(`${value}-input`);

    expect(input).toHaveAttribute("type", values[value].fieldType);
    expect(input).toHaveAttribute("name", value);
    expect(input).toHaveAttribute("id", value);

    expect(input).toHaveValue(userInformation[value] || values[currentKey]);
  });

  test("calls changeHandler on change event", () => {
    render(
      <Input
        changeHandler={changeHandler}
        clickHandler={clickHandler}
        userInformation={userInformation}
        values={values}
        value={value}
        currentKey={currentKey}
      />
    );

    const input = screen.getByTestId(`${value}-input`);

    fireEvent.change(input, { target: { value: "new@example.com" } });

    expect(changeHandler).toHaveBeenCalledWith(value, "new@example.com");
  });

  test("calls clickHandler on focus event", () => {
    render(
      <Input
        changeHandler={changeHandler}
        clickHandler={clickHandler}
        userInformation={userInformation}
        values={values}
        value={value}
        currentKey={currentKey}
      />
    );

    const input = screen.getByTestId(`${value}-input`);

    fireEvent.focus(input);

    expect(clickHandler).toHaveBeenCalledWith(value);
  });

  test("renders with an empty value if currentKey is Password", () => {
    render(
      <Input
        changeHandler={changeHandler}
        clickHandler={clickHandler}
        userInformation={userInformation}
        values={values}
        value="password"
        currentKey="Password"
      />
    );

    const input = screen.getByTestId("password-input");

    expect(input).toHaveValue("");
  });
});
