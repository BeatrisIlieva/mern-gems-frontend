import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { useNavigate } from "react-router-dom";

import { InfoAndAction } from "./InfoAndAction";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

jest.mock("../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../../common/MiniImages/MiniImages", () => ({
  MiniImages: ({ jewelriesByCategory, clickHandler }) => (
    <div>
      <button onClick={() => clickHandler("colorTitle")}>MiniImages</button>
    </div>
  ),
}));

jest.mock("../../../common/StockStatus/StockStatus", () => ({
  StockStatus: ({ jewelriesByCategory }) => <div>StockStatus</div>,
}));

jest.mock("../../../reusable/DualTitleSection/DualTitleSection", () => ({
  DualTitleSection: ({ firstTitle, secondTitle, variant }) => (
    <div>
      <div>{firstTitle}</div>
      <div>{secondTitle}</div>
      <div>Variant: {variant}</div>
    </div>
  ),
}));

jest.mock("../../../reusable/LargeTitle/LargeTitle", () => ({
  LargeTitle: ({ title, textAlign }) => <h1 style={{ textAlign }}>{title}</h1>,
}));

jest.mock("../../../reusable/Paragraph/Paragraph", () => ({
  Paragraph: ({ text, textAlign, color }) => (
    <p style={{ textAlign, color }}>{text}</p>
  ),
}));

jest.mock("./Form/Form", () => ({
  Form: ({ jewelriesByCategory, toggleDisplayPopup }) => (
    <div>
      <button onClick={toggleDisplayPopup}>Toggle Popup</button>
    </div>
  ),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("InfoAndAction Component", () => {
  const mockLanguage = "English";

  const mockJewelries = [
    {
      category: 1,
      title: {English: "Jewelry Title"},
      description: "Jewelry Description",
    },
  ];

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("renders with correct child components and props", () => {
    render(
      <MemoryRouter>
        <InfoAndAction
          jewelriesByCategory={mockJewelries}
          language={mockLanguage}
          toggleDisplayPopup={() => {}}
        />
      </MemoryRouter>
    );

    expect(screen.getByText("MiniImages")).toBeInTheDocument();
    expect(screen.getByText("StockStatus")).toBeInTheDocument();
    expect(screen.getByText("Jewelry Title")).toBeInTheDocument();
    expect(screen.getByText("Jewelry Description.")).toBeInTheDocument();
  });

  test("navigates to the correct URL when MiniImages is clicked", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(
      <MemoryRouter>
        <InfoAndAction
          jewelriesByCategory={mockJewelries}
          toggleDisplayPopup={() => {}}
          language={mockLanguage}
        />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("MiniImages"));

    expect(navigate).toHaveBeenCalledWith(
      "/collection/categorytitle/colortitle"
    );
  });

  test("calls toggleDisplayPopup when Form button is clicked", () => {
    const toggleDisplayPopup = jest.fn();

    render(
      <MemoryRouter>
        <InfoAndAction
          jewelriesByCategory={mockJewelries}
          toggleDisplayPopup={toggleDisplayPopup}
          language={mockLanguage}
        />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Toggle Popup"));

    expect(toggleDisplayPopup).toHaveBeenCalled();
  });
});
