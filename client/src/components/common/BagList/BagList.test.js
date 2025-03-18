import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { BagList } from "./BagList";

import { useLanguageContext } from "../../../contexts/LanguageContext";
import { useBagContext } from "../../../contexts/BagContext";

jest.mock("../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

jest.mock("../../../contexts/BagContext", () => ({
  useBagContext: jest.fn(),
}));

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
      UpdateQuantity Component - BagId: {bagId}, BagQuantity: {bagQuantity},
      InventoryQuantity: {inventoryQuantity}
    </div>
  ),
}));

jest.mock("./Buttons/Buttons", () => ({
  Buttons: ({ bagId, categoryId, colorId }) => (
    <div>
      Buttons Component - BagId: {bagId}, CategoryId: {categoryId}, ColorId:{" "}
      {colorId}
    </div>
  ),
}));

describe("BagList Component", () => {
  const mockLanguage = "English";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  const mockBagItems = [
    {
      bagId: "1",
      firstImageUrl: "https://example.com/image1.jpg",
      jewelryTitle: "Jewelry 1",
      totalPrice: "100",
      size: "M",
      categoryId: "1",
      colorId: "color1",
      quantity: 2,
      inventoryQuantity: 10,
    },
  ];

  test("renders Buttons and UpdateQuantity components when pathname is not /checkout or /checkout/payment", () => {
    useLocation.mockReturnValue({ pathname: "/some/path" });
    useBagContext.mockReturnValue({ bagItems: mockBagItems });
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    render(
      <Router>
        <BagList variant="default" />
      </Router>
    );

    expect(
      screen.getByText(
        "Buttons Component - BagId: 1, CategoryId: 1, ColorId: color1"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "UpdateQuantity Component - BagId: 1, BagQuantity: 2, InventoryQuantity: 10"
      )
    ).toBeInTheDocument();
  });

  test("does not render Buttons and UpdateQuantity components when pathname is /checkout", () => {
    useLocation.mockReturnValue({ pathname: "/checkout" });
    useBagContext.mockReturnValue({ bagItems: mockBagItems });

    render(
      <Router>
        <BagList variant="default" />
      </Router>
    );

    expect(
      screen.queryByText(
        "Buttons Component - BagId: 1, CategoryId: 1, ColorId: color1"
      )
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        "UpdateQuantity Component - BagId: 1, BagQuantity: 2, InventoryQuantity: 10"
      )
    ).not.toBeInTheDocument();
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

    expect(
      screen.queryByText(
        "Buttons Component - BagId: 1, CategoryId: 1, ColorId: color1"
      )
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        "UpdateQuantity Component - BagId: 1, BagQuantity: 2, InventoryQuantity: 10"
      )
    ).not.toBeInTheDocument();
    expect(screen.getByText("Size: M")).toBeInTheDocument();
    expect(screen.getByText("Qty 2")).toBeInTheDocument();
  });
});
