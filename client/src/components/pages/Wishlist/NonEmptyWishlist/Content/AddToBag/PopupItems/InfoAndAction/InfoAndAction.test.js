import { render, screen, fireEvent } from "@testing-library/react";
import { InfoAndAction } from "./InfoAndAction";
import { useLanguageContext } from "../../../../../../../../contexts/LanguageContext";
import { CATEGORY_NAMES_BY_LANGUAGE } from "../../../../../../../../constants/categoryNamesByLanguage";

jest.mock("../../../../../../../reusable/LargeTitle/LargeTitle", () => ({
  LargeTitle: ({ title }) => <h1>{title}</h1>,
}));

jest.mock("../../../../../../../reusable/Paragraph/Paragraph", () => ({
  Paragraph: ({ text }) => <p>{text}</p>,
}));

jest.mock("../../../../../../../reusable/MiniImages/MiniImages", () => ({
  MiniImages: ({ clickHandler }) => (
    <div onClick={() => clickHandler(1)}>MiniImages</div>
  ),
}));

jest.mock("../../../../../../../common/StockStatus/StockStatus", () => ({
  StockStatus: () => <div>Stock Status</div>,
}));

jest.mock("./Form/Form", () => ({
  Form: ({ toggleDisplayPopup, toggleDisplayMiniBagPopup }) => (
    <div>
      <button onClick={toggleDisplayPopup}>Open Popup</button>
      <button onClick={toggleDisplayMiniBagPopup}>Open Mini Bag</button>
    </div>
  ),
}));

jest.mock("../../../../../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

describe("InfoAndAction Component", () => {
  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: "en" });
  });

  const mockJewelries = [
    {
      description: {
        en: "Beautiful gold ring with diamonds.",
      },
    },
  ];

  const mockProps = {
    popupCloseHandler: jest.fn(),
    jewelriesByCategory: mockJewelries,
    updateSelectedColor: jest.fn(),
    toggleDisplayPopup: jest.fn(),
    toggleDisplayMiniBagPopup: jest.fn(),
    categoryId: "rings",
  };

  test("displays the correct jewelry title based on the language context", () => {
    CATEGORY_NAMES_BY_LANGUAGE.rings = { en: "Rings", es: "Anillos" };

    render(<InfoAndAction {...mockProps} />);

    expect(screen.getByText("Rings")).toBeInTheDocument();
  });

  test("calls updateSelectedColor when a MiniImage is clicked", () => {
    render(<InfoAndAction {...mockProps} />);

    fireEvent.click(screen.getByText("MiniImages"));

    expect(mockProps.updateSelectedColor).toHaveBeenCalledWith(1);
  });

  test('calls toggleDisplayPopup when the "Open Popup" button is clicked', () => {
    render(<InfoAndAction {...mockProps} />);

    fireEvent.click(screen.getByText("Open Popup"));

    expect(mockProps.toggleDisplayPopup).toHaveBeenCalled();
  });

  test('calls toggleDisplayMiniBagPopup when the "Open Mini Bag" button is clicked', () => {
    render(<InfoAndAction {...mockProps} />);

    fireEvent.click(screen.getByText("Open Mini Bag"));

    expect(mockProps.toggleDisplayMiniBagPopup).toHaveBeenCalled();
  });
});
