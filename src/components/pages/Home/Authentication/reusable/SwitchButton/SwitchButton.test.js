// // import { render, screen } from "@testing-library/react";

// // import { SwitchButton } from "./SwitchButton";

// // jest.mock("../../../../../reusable/Button/Button", () => ({
// //   Button: jest.fn(({ callBackFunction, title, variant }) => (
// //     <button
// //       onClick={callBackFunction}
// //       data-title={title}
// //       data-variant={variant}
// //     >
// //       {title}
// //     </button>
// //   )),
// // }));

// // describe("SwitchButton Component", () => {
// //   const mockSwitchPopupHandler = jest.fn();
// //   const option = "register";

// //   beforeEach(() => {
// //     jest.clearAllMocks();
// //   });

// //   test("renders the text correctly", () => {
// //     render(
// //       <SwitchButton
// //         text="Not a member?"
// //         title="Sign Up"
// //         switchPopupHandler={mockSwitchPopupHandler}
// //         option={option}
// //       />
// //     );

// //     expect(screen.getByText("Not a member?")).toBeInTheDocument();
// //   });
// // });

// import { render, screen, fireEvent } from "@testing-library/react";
// import { SwitchButton } from "./SwitchButton";

// jest.mock("../../../../../reusable/Button/Button", () => ({
//   Button: jest.fn(({ callBackFunction, title, variant }) => (
//     <button
//       onClick={callBackFunction}
//       data-title={title}
//       data-variant={variant}
//     >
//       {title}
//     </button>
//   )),
// }));

// describe("SwitchButton Component", () => {
//   const mockSwitchPopupHandler = jest.fn();
//   const option = "register";

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test("renders the text correctly", () => {
//     render(
//       <SwitchButton
//         text="Not a member?"
//         title="Sign Up"
//         switchPopupHandler={mockSwitchPopupHandler}
//         option={option}
//       />
//     );

//     expect(screen.getByText("Not a member?")).toBeInTheDocument();
//   });

//   test("calls switchPopupHandler with the correct option when button is clicked", () => {
//     render(
//       <SwitchButton
//         text="Not a member?"
//         title="Sign Up"
//         switchPopupHandler={mockSwitchPopupHandler}
//         option={option}
//       />
//     );

//     // Query the button using getByText, which is the button's title text
//     const button = screen.getByText("Sign Up");

//     // Simulate a button click
//     fireEvent.click(button);

//     // Verify that the switchPopupHandler was called with the correct option
//     expect(mockSwitchPopupHandler).toHaveBeenCalledTimes(1);
//     expect(mockSwitchPopupHandler).toHaveBeenCalledWith(option);
//   });
// });
import { render, screen, fireEvent } from "@testing-library/react";
import { SwitchButton } from "./SwitchButton";
import { Button } from "../../../../../reusable/Button/Button"; // Import real Button component

describe("SwitchButton Component", () => {
  const mockSwitchPopupHandler = jest.fn();
  const option = "register";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the text correctly", () => {
    render(
      <SwitchButton
        text="Not a member?"
        title="Sign Up"
        switchPopupHandler={mockSwitchPopupHandler}
        option={option}
      />
    );

    // Verify the text is rendered
    expect(screen.getByText("Not a member?")).toBeInTheDocument();
  });

  test("calls switchPopupHandler with the correct option when button is clicked", () => {
    render(
      <SwitchButton
        text="Not a member?"
        title="Sign Up"
        switchPopupHandler={mockSwitchPopupHandler}
        option={option}
      />
    );

    // Query the button by its role (button) and accessible name ("Sign Up")
    const button = screen.getByRole("button", { name: "Sign Up" });

    // Ensure the button is not disabled
    expect(button).not.toBeDisabled();

    // Simulate a button click
    fireEvent.click(button);

    // Verify the correct function call with the expected argument
    expect(mockSwitchPopupHandler).toHaveBeenCalledTimes(1);
    expect(mockSwitchPopupHandler).toHaveBeenCalledWith(option);
  });
});
