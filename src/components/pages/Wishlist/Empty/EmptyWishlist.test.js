import { render, screen } from "@testing-library/react";

import { EmptyWishlist } from "./Empty";

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
  CardSlider: () => <div>CardSlider Component</div>,
}));

describe("EmptyWishlist Component", () => {
  const mockLanguage = "English";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("renders InfoMessage and CardSlider", () => {
    render(<EmptyWishlist />);

    expect(screen.getByText("This Wish List Is Empty.")).toBeInTheDocument();
    expect(
      screen.getByText("Explore and add something you love.")
    ).toBeInTheDocument();

    expect(screen.getByText("CardSlider Component")).toBeInTheDocument();
  });
});
