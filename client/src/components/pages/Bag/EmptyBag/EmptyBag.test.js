import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { EmptyBag } from "./EmptyBag";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

jest.mock("../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../../reusable/InfoMessage/InfoMessage", () => ({
  InfoMessage: ({ title, subtitle }) => (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  ),
}));

jest.mock("../../../common/CardSlider/CardSlider", () => ({
  CardSlider: () => <div>CardSlider</div>,
}));

describe("EmptyBag Component", () => {
  const mockLanguage = "English";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("renders InfoMessage and CardSlider", () => {
    render(<EmptyBag />);

    expect(screen.getByText("Your Shopping Bag Is Empty.")).toBeInTheDocument();
    expect(
      screen.getByText("You can continue shopping by exploring the collection.")
    ).toBeInTheDocument();

    expect(screen.getByText("CardSlider")).toBeInTheDocument();
  });
});
