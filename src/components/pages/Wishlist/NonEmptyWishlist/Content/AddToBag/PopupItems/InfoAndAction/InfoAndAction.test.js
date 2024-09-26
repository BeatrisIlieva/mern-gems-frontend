// import { render, screen, fireEvent } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import "@testing-library/jest-dom/extend-expect";

// import { InfoAndAction } from "./InfoAndAction";

// import { useLanguageContext } from "../../../../../../../../contexts/LanguageContext";

// jest.mock("../../../../../../../../contexts/LanguageContext", () => ({
//   useLanguageContext: jest.fn(),
// }));

// jest.mock("../../../../../../../reusable/MiniImages/MiniImages", () => ({
//   MiniImages: ({ jewelriesByCategory, clickHandler }) => (
//     <div>
//       <button onClick={() => clickHandler("colorTitle")}>MiniImages</button>
//     </div>
//   ),
// }));

// jest.mock("../../../../../../../common/StockStatus/StockStatus", () => ({
//   StockStatus: ({ jewelriesByCategory }) => <div>StockStatus</div>,
// }));

// jest.mock("../../../../../../../reusable/DualTitleSection/DualTitleSection", () => ({
//   DualTitleSection: ({ firstTitle, secondTitle, variant }) => (
//     <div>
//       <div>{firstTitle}</div>
//       <div>{secondTitle}</div>
//       <div>Variant: {variant}</div>
//     </div>
//   ),
// }));

// jest.mock("../../../../../../../reusable/LargeTitle/LargeTitle", () => ({
//   LargeTitle: ({ title, textAlign }) => <h1 style={{ textAlign }}>{title}</h1>,
// }));

// jest.mock("../../../../../../../reusable/Paragraph/Paragraph", () => ({
//   Paragraph: ({ text, textAlign, color }) => (
//     <p style={{ textAlign, color }}>{text}</p>
//   ),
// }));

// jest.mock("./Form/Form", () => ({
//   Form: ({ jewelriesByCategory, toggleDisplayPopup }) => (
//     <div>
//       <button onClick={toggleDisplayPopup}>Toggle Popup</button>
//     </div>
//   ),
// }));

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: jest.fn(),
// }));

// describe("InfoAndAction Component", () => {
//   const mockLanguage = "English";

//   const mockJewelries = [
//     {
//       category: 1,
//       categoryTitle: "Bracelet",
//       title: { English: "Jewelry Title" },
//       description: "Jewelry Description",
//     },
//   ];

//   beforeEach(() => {
//     useLanguageContext.mockReturnValue({ language: mockLanguage });

//     jest.clearAllMocks();
//   });

//   test("renders with correct child components and props", () => {
//     render(
//       <MemoryRouter>
//         <InfoAndAction
//           jewelriesByCategory={mockJewelries}
//           language={mockLanguage}
//           toggleDisplayPopup={() => {}}
//         />
//       </MemoryRouter>
//     );

//     expect(screen.getByText("MiniImages")).toBeInTheDocument();
//     expect(screen.getByText("StockStatus")).toBeInTheDocument();
//   });

//   test("calls toggleDisplayPopup when Form button is clicked", () => {
//     const toggleDisplayPopup = jest.fn();

//     render(
//       <MemoryRouter>
//         <InfoAndAction
//           jewelriesByCategory={mockJewelries}
//           toggleDisplayPopup={toggleDisplayPopup}
//           language={mockLanguage}
//         />
//       </MemoryRouter>
//     );

//     fireEvent.click(screen.getByText("Toggle Popup"));

//     expect(toggleDisplayPopup).toHaveBeenCalled();
//   });
// });

import { render, screen, fireEvent } from "@testing-library/react";
import { InfoAndAction } from "./InfoAndAction";
import { useLanguageContext } from "../../../../../../../../contexts/LanguageContext";
import { CATEGORY_NAMES_BY_LANGUAGE } from "../../../../../../../../constants/categoryNamesByLanguage";

// Mock child components
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

// Mock useLanguageContext hook
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

  it("displays the correct jewelry title based on the language context", () => {
    CATEGORY_NAMES_BY_LANGUAGE.rings = { en: "Rings", es: "Anillos" };

    render(<InfoAndAction {...mockProps} />);

    // Verify that the correct title is displayed based on the language ('en')
    expect(screen.getByText("Rings")).toBeInTheDocument();
  });

  it("calls updateSelectedColor when a MiniImage is clicked", () => {
    render(<InfoAndAction {...mockProps} />);

    // Simulate clicking on MiniImages
    fireEvent.click(screen.getByText("MiniImages"));

    // Ensure updateSelectedColor is called
    expect(mockProps.updateSelectedColor).toHaveBeenCalledWith(1);
  });

  it('calls toggleDisplayPopup when the "Open Popup" button is clicked', () => {
    render(<InfoAndAction {...mockProps} />);

    // Simulate clicking the "Open Popup" button
    fireEvent.click(screen.getByText("Open Popup"));

    // Ensure toggleDisplayPopup is called
    expect(mockProps.toggleDisplayPopup).toHaveBeenCalled();
  });

  it('calls toggleDisplayMiniBagPopup when the "Open Mini Bag" button is clicked', () => {
    render(<InfoAndAction {...mockProps} />);

    // Simulate clicking the "Open Mini Bag" button
    fireEvent.click(screen.getByText("Open Mini Bag"));

    // Ensure toggleDisplayMiniBagPopup is called
    expect(mockProps.toggleDisplayMiniBagPopup).toHaveBeenCalled();
  });
});
