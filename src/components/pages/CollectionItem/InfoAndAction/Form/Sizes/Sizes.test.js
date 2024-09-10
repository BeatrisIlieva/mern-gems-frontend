// // import { render, screen } from "@testing-library/react";
// // import { MemoryRouter } from "react-router-dom";
// // import "@testing-library/jest-dom/extend-expect";

// // import { Sizes } from "./Sizes";

// // jest.mock("../../../../../reusable/NormalTitle/NormalTitle", () => ({
// //   NormalTitle: ({ title, variant }) => (
// //     <div data-testid={`normal-title-${variant}`}>{title}</div>
// //   ),
// // }));

// // describe("Sizes Component", () => {
// //   const mockChangeHandler = jest.fn();

// //   const mockInventories = [
// //     { size: "S", quantity: 10, price: "50" },
// //     { size: "M", quantity: 0, price: "60" },
// //     { size: "L", quantity: 5, price: "70" },
// //   ];

// //   beforeEach(() => {
// //     jest.clearAllMocks();
// //   });

// //   test("renders sizes and error message", () => {
// //     render(
// //       <MemoryRouter>
// //         <Sizes
// //           inventories={mockInventories}
// //           errorMessage="Size selection is required."
// //           changeHandler={mockChangeHandler}
// //           selectedSize="M"
// //         />
// //       </MemoryRouter>
// //     );

// //     expect(screen.getByText("Size")).toBeInTheDocument();
// //     expect(screen.getByText("$50")).toBeInTheDocument();
// //     expect(screen.getByText("$60")).toBeInTheDocument();
// //     expect(screen.getByText("$70")).toBeInTheDocument();

// //     expect(screen.getByTestId("error-message")).toHaveTextContent(
// //       "Size selection is required."
// //     );
// //   });
// // });


// import { render, screen, fireEvent } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";

// import { Sizes } from "./Sizes";

// jest.mock("../../../../../reusable/NormalTitle/NormalTitle", () => ({
//   NormalTitle: ({ title, variant }) => (
//     <div data-testid={`normal-title-${variant}`}>{title}</div>
//   ),
// }));

// describe("Sizes Component", () => {
//   const mockChangeHandler = jest.fn();

//   const mockInventories = [
//     { size: "S", quantity: 10, price: "50" },
//     { size: "M", quantity: 0, price: "60" },
//     { size: "L", quantity: 5, price: "70" },
//   ];

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test("renders sizes and error message", () => {
//     render(
//       <MemoryRouter>
//         <Sizes
//           inventories={mockInventories}
//           errorMessage="Size selection is required."
//           changeHandler={mockChangeHandler}
//           selectedSize="M"
//         />
//       </MemoryRouter>
//     );

//     expect(screen.getByText("Size")).toBeInTheDocument();
//     expect(screen.getByText("$50")).toBeInTheDocument();
//     expect(screen.getByText("$60")).toBeInTheDocument();
//     expect(screen.getByText("$70")).toBeInTheDocument();
//     expect(screen.getByTestId("error-message")).toHaveTextContent(
//       "Size selection is required."
//     );
//   });

//   test("updates hoveredLabel on hover events", () => {
//     render(
//       <MemoryRouter>
//         <Sizes
//           inventories={mockInventories}
//           errorMessage="Size selection is required."
//           changeHandler={mockChangeHandler}
//           selectedSize="M"
//         />
//       </MemoryRouter>
//     );

//     // Get the label elements
//     const sizeLabels = screen.getAllByText(/^[SML]$/); // Matches S, M, L

//     // Hover over the 'S' label
//     fireEvent.mouseEnter(sizeLabels[0]);
//     expect(sizeLabels[0]).toHaveClass("hovered");

//     // Hover out of the 'S' label
//     fireEvent.mouseLeave(sizeLabels[0]);
//     expect(sizeLabels[0]).not.toHaveClass("hovered");
//   });

//   test("resets hoveredLabel on route change", () => {
//     const { rerender } = render(
//       <MemoryRouter initialEntries={['/initial-route']}>
//         <Sizes
//           inventories={mockInventories}
//           errorMessage="Size selection is required."
//           changeHandler={mockChangeHandler}
//           selectedSize="M"
//         />
//       </MemoryRouter>
//     );

//     // Hover over the 'S' label
//     const sizeLabel = screen.getByText("S");
//     fireEvent.mouseEnter(sizeLabel);
//     expect(sizeLabel).toHaveClass("hovered");

//     // Change the route
//     rerender(
//       <MemoryRouter initialEntries={['/new-route']}>
//         <Sizes
//           inventories={mockInventories}
//           errorMessage="Size selection is required."
//           changeHandler={mockChangeHandler}
//           selectedSize="M"
//         />
//       </MemoryRouter>
//     );

//     // Verify that the hoveredLabel is reset (i.e., no hovered class)
//     expect(sizeLabel).not.toHaveClass("hovered");
//   });
// });


import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Sizes } from "./Sizes";

jest.mock("../../../../../reusable/NormalTitle/NormalTitle", () => ({
  NormalTitle: ({ title, variant }) => (
    <div data-testid={`normal-title-${variant}`}>{title}</div>
  ),
}));

describe("Sizes Component", () => {
  const mockChangeHandler = jest.fn();

  const mockInventories = [
    { size: "S", quantity: 10, price: "50" },
    { size: "M", quantity: 0, price: "60" },
    { size: "L", quantity: 5, price: "70" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders sizes and error message", () => {
    render(
      <MemoryRouter>
        <Sizes
          inventories={mockInventories}
          errorMessage="Size selection is required."
          changeHandler={mockChangeHandler}
          selectedSize="M"
        />
      </MemoryRouter>
    );

    expect(screen.getByText("Size")).toBeInTheDocument();
    expect(screen.getByText("$50")).toBeInTheDocument();
    expect(screen.getByText("$60")).toBeInTheDocument();
    expect(screen.getByText("$70")).toBeInTheDocument();
    expect(screen.getByTestId("error-message")).toHaveTextContent(
      "Size selection is required."
    );
  });

  test("updates hoveredLabel on hover events", () => {
    render(
      <MemoryRouter>
        <Sizes
          inventories={mockInventories}
          errorMessage="Size selection is required."
          changeHandler={mockChangeHandler}
          selectedSize="M"
        />
      </MemoryRouter>
    );

    const sizeLabels = screen.getAllByText(/^[SML]$/); // Matches S, M, L

    // Hover over the 'S' label
    fireEvent.mouseEnter(sizeLabels[0]);
    expect(sizeLabels[0]).toHaveClass("label hovered");

    // Hover out of the 'S' label
    fireEvent.mouseLeave(sizeLabels[0]);
    expect(sizeLabels[0]).toHaveClass("label");
  });

  test("resets hoveredLabel on route change", () => {
    const { rerender } = render(
      <MemoryRouter initialEntries={['/initial-route']}>
        <Sizes
          inventories={mockInventories}
          errorMessage="Size selection is required."
          changeHandler={mockChangeHandler}
          selectedSize="M"
        />
      </MemoryRouter>
    );

    // Hover over the 'S' label
    const sizeLabel = screen.getByText("S");
    fireEvent.mouseEnter(sizeLabel);
    expect(sizeLabel).toHaveClass("hovered");

    // Change the route
    rerender(
      <MemoryRouter initialEntries={['/new-route']}>
        <Sizes
          inventories={mockInventories}
          errorMessage="Size selection is required."
          changeHandler={mockChangeHandler}
          selectedSize="M"
        />
      </MemoryRouter>
    );

    // Check all labels to ensure none have the 'hovered' class
    const updatedSizeLabels = screen.getAllByText(/^[SML]$/); // Matches S, M, L
    updatedSizeLabels.forEach((label) => {
      expect(label).toHaveClass("label");
    });
  });
});
