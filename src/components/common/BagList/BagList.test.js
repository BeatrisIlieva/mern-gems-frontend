import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { BagList } from "./BagList";
import { useBagContext } from "../../../contexts/BagContext";
import { useLocation } from "react-router-dom";

// Mock the useLocation and useBagContext hooks
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

jest.mock("../../../contexts/BagContext", () => ({
  useBagContext: jest.fn(),
}));

// Mock components
jest.mock("../../reusable/JewelryCard/JewelryCard", () => ({
  JewelryCard: ({ firstImageUrl, jewelryTitle }) => (
    <div data-testid="jewelry-card">
      <img src={firstImageUrl} alt={jewelryTitle} />
      <h2>{jewelryTitle}</h2>
    </div>
  ),
}));

jest.mock("../../reusable/DualTitleSection/DualTitleSection", () => ({
  DualTitleSection: ({ firstTitle, secondTitle }) => (
    <div>
      <div>{firstTitle}</div>
      <div>{secondTitle}</div>
    </div>
  ),
}));

jest.mock("./UpdateQuantity/UpdateQuantity", () => ({
  UpdateQuantity: ({ bagId, bagQuantity, inventoryQuantity }) => (
    <div>
      UpdateQuantity Component - BagId: {bagId}, BagQuantity: {bagQuantity}, InventoryQuantity: {inventoryQuantity}
    </div>
  ),
}));

jest.mock("./Buttons/Buttons", () => ({
  Buttons: ({ bagId, categoryId, colorId }) => (
    <div>
      Buttons Component - BagId: {bagId}, CategoryId: {categoryId}, ColorId: {colorId}
    </div>
  ),
}));

describe("BagList Component", () => {
  const mockBagItems = [
    {
      bagId: "1",
      firstImageUrl: "https://example.com/image1.jpg",
      jewelryTitle: "Jewelry 1",
      totalPrice: "100",
      size: "M",
      categoryId: "cat1",
      colorId: "color1",
      quantity: 2,
      inventoryQuantity: 10,
    },
  ];

  test("renders Buttons and UpdateQuantity components when pathname is not /checkout or /checkout/payment", () => {
    useLocation.mockReturnValue({ pathname: "/some/path" });
    useBagContext.mockReturnValue({ bagItems: mockBagItems });

    render(
      <Router>
        <BagList variant="default" />
      </Router>
    );

    // Check that Buttons and UpdateQuantity components are rendered
    expect(screen.getByText("Buttons Component - BagId: 1, CategoryId: cat1, ColorId: color1")).toBeInTheDocument();
    expect(screen.getByText("UpdateQuantity Component - BagId: 1, BagQuantity: 2, InventoryQuantity: 10")).toBeInTheDocument();
  });

  test("does not render Buttons and UpdateQuantity components when pathname is /checkout", () => {
    useLocation.mockReturnValue({ pathname: "/checkout" });
    useBagContext.mockReturnValue({ bagItems: mockBagItems });

    render(
      <Router>
        <BagList variant="default" />
      </Router>
    );

    // Check that Buttons and UpdateQuantity components are not rendered
    expect(screen.queryByText("Buttons Component - BagId: 1, CategoryId: cat1, ColorId: color1")).not.toBeInTheDocument();
    expect(screen.queryByText("UpdateQuantity Component - BagId: 1, BagQuantity: 2, InventoryQuantity: 10")).not.toBeInTheDocument();
    expect(screen.getByText("Size: M")).toBeInTheDocument();
    expect(screen.getByText("Qty 2")).toBeInTheDocument();
  });

  test("does not render Buttons and UpdateQuantity components when pathname is /checkout/payment", () => {
    useLocation.mockReturnValue({ pathname: "/checkout/payment" });
    useBagContext.mockReturnValue({ bagItems: mockBagItems });

    render(
      <Router>
        <BagList variant="default" />
      </Router>
    );

    // Check that Buttons and UpdateQuantity components are not rendered
    expect(screen.queryByText("Buttons Component - BagId: 1, CategoryId: cat1, ColorId: color1")).not.toBeInTheDocument();
    expect(screen.queryByText("UpdateQuantity Component - BagId: 1, BagQuantity: 2, InventoryQuantity: 10")).not.toBeInTheDocument();
    expect(screen.getByText("Size: M")).toBeInTheDocument();
    expect(screen.getByText("Qty 2")).toBeInTheDocument();
  });
});
