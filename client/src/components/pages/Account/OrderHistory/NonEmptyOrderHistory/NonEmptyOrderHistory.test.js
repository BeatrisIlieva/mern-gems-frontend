import { render, screen } from "@testing-library/react";

import { NonEmptyOrderHistory } from "./NonEmptyOrderHistory";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";

jest.mock("../../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("./OrderHistoryList/OrderHistoryList", () => ({
  OrderHistoryList: ({ _id, ...props }) => (
    <div data-testid={`order-item-${_id}`} {...props}>
      OrderHistoryList for {_id}
    </div>
  ),
}));

jest.mock("../../../../reusable/LargeTitle/LargeTitle", () => ({
  LargeTitle: ({ title, textAlign }) => <h1 className={textAlign}>{title}</h1>,
}));

describe("NonEmptyOrderHistory Component", () => {
  const mockLanguage = "English";

  const mockOrderItems = [
    { _id: "1", product: "Product 1", date: "2024-01-01" },
    { _id: "2", product: "Product 2", date: "2024-01-02" },
  ];

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("renders LargeTitle component with correct title", () => {
    render(<NonEmptyOrderHistory orderItems={mockOrderItems} />);

    expect(screen.getByText("Order History")).toBeInTheDocument();
  });

  test("renders OrderHistoryList for each order item", () => {
    render(<NonEmptyOrderHistory orderItems={mockOrderItems} />);

    mockOrderItems.forEach((item) => {
      expect(screen.getByTestId(`order-item-${item._id}`)).toBeInTheDocument();
      expect(
        screen.getByText(`OrderHistoryList for ${item._id}`)
      ).toBeInTheDocument();
    });
  });

  test("renders the correct number of order items", () => {
    render(<NonEmptyOrderHistory orderItems={mockOrderItems} />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(mockOrderItems.length);
  });
});
