import { render, screen } from "@testing-library/react";
import { PopupItems } from "./PopupItems";

// Mock child components
jest.mock("./Images/Images", () => ({
  Images: ({ jewelriesByCategory }) => (
    <div data-testid="images-component">{jewelriesByCategory.length} items</div>
  ),
}));

jest.mock("./InfoAndAction/InfoAndAction", () => ({
  InfoAndAction: ({
    popupCloseHandler,
    jewelriesByCategory,
    updateSelectedColor,
    toggleDisplayPopup,
    toggleDisplayMiniBagPopup,
    categoryId,
  }) => (
    <div data-testid="info-and-action-component">
      InfoAndAction - {jewelriesByCategory[0].name}
    </div>
  ),
}));

describe("PopupItems Component", () => {
  const mockJewelries = [
    { name: "Gold Ring", description: { en: "Beautiful gold ring" } },
    { name: "Silver Necklace", description: { en: "Elegant silver necklace" } },
  ];

  const mockProps = {
    toggleDisplayPopup: jest.fn(),
    jewelriesByCategory: mockJewelries,
    popupCloseHandler: jest.fn(),
    updateSelectedColor: jest.fn(),
    toggleDisplayMiniBagPopup: jest.fn(),
    categoryId: "rings",
  };

  it("renders without crashing", () => {
    render(<PopupItems {...mockProps} />);

    // Check if Images component renders
    const imagesComponent = screen.getByTestId("images-component");
    expect(imagesComponent).toBeInTheDocument();
    expect(imagesComponent).toHaveTextContent("2 items");

    // Check if InfoAndAction component renders
    const infoAndActionComponent = screen.getByTestId("info-and-action-component");
    expect(infoAndActionComponent).toBeInTheDocument();
    expect(infoAndActionComponent).toHaveTextContent("Gold Ring");
  });

  it("passes correct props to Images component", () => {
    render(<PopupItems {...mockProps} />);

    // Check if the jewelriesByCategory prop is passed correctly to Images
    const imagesComponent = screen.getByTestId("images-component");
    expect(imagesComponent).toHaveTextContent("2 items");
  });

  it("passes correct props to InfoAndAction component", () => {
    render(<PopupItems {...mockProps} />);

    const infoAndActionComponent = screen.getByTestId("info-and-action-component");

    // Ensure InfoAndAction component received the correct prop (first jewelry name)
    expect(infoAndActionComponent).toHaveTextContent("Gold Ring");

    // Check if handlers are passed correctly (though they won't be triggered directly here)
    expect(mockProps.popupCloseHandler).not.toHaveBeenCalled();
    expect(mockProps.updateSelectedColor).not.toHaveBeenCalled();
    expect(mockProps.toggleDisplayPopup).not.toHaveBeenCalled();
    expect(mockProps.toggleDisplayMiniBagPopup).not.toHaveBeenCalled();
  });
});
