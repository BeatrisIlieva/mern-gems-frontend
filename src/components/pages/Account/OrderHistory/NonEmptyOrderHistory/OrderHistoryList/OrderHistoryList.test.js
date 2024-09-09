import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { OrderHistoryList } from "./OrderHistoryList";

import { convertToReadableDate } from "../../../../../../utils/convertToReadableDate";

jest.mock("../../../../../reusable/JewelryCard/JewelryCard", () => ({
  JewelryCard: ({ name, price }) => (
    <div>
      <div>{name}</div>
      <div>${price}</div>
    </div>
  ),
}));

jest.mock("../../../../../reusable/NormalTitle/NormalTitle", () => ({
  NormalTitle: ({ title }) => <div>{title}</div>,
}));

jest.mock("../../../../../../utils/convertToReadableDate", () => ({
  convertToReadableDate: jest.fn(),
}));

describe("OrderHistoryList Component", () => {
  beforeEach(() => {
    convertToReadableDate.mockImplementation((date) =>
      new Date(date).toLocaleDateString()
    );
  });

  test("renders order information correctly", () => {
    render(
      <OrderHistoryList
        status="Completed"
        createdAt="2024-09-01T00:00:00Z"
        totalPrice={123.45}
        jewelries={[{ _id: "1", name: "Ring", price: 50 }]}
      />
    );

    expect(screen.getByText("Status: Completed")).toBeInTheDocument();
    expect(
      screen.getByText(
        `Created at: ${new Date("2024-09-01T00:00:00Z").toLocaleDateString()}`
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Total: $ 123.45")).toBeInTheDocument();
  });

  test("renders jewelry items correctly", () => {
    render(
      <OrderHistoryList
        status="Completed"
        createdAt="2024-09-01T00:00:00Z"
        totalPrice={123.45}
        jewelries={[
          { _id: "1", name: "Ring", price: 50 },
          { _id: "2", name: "Necklace", price: 73.45 },
        ]}
      />
    );

    expect(screen.getByText("Ring")).toBeInTheDocument();
    expect(screen.getByText("$50")).toBeInTheDocument();
    expect(screen.getByText("Necklace")).toBeInTheDocument();
    expect(screen.getByText("$73.45")).toBeInTheDocument();
  });

  test("renders empty jewelry list correctly", () => {
    render(
      <OrderHistoryList
        status="Completed"
        createdAt="2024-09-01T00:00:00Z"
        totalPrice={123.45}
        jewelries={[]}
      />
    );

    expect(screen.queryByText("Ring")).not.toBeInTheDocument();
  });
});
