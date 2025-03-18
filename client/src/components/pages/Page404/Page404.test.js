import { render, screen } from "@testing-library/react";

import { Page404 } from "./Page404";

import { InfoMessage } from "../../reusable/InfoMessage/InfoMessage";

import { CardSlider } from "../../common/CardSlider/CardSlider";

import { useLanguageContext } from "../../../contexts/LanguageContext";

jest.mock("../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../reusable/InfoMessage/InfoMessage");
jest.mock("../../common/CardSlider/CardSlider");

describe("Page404 Component", () => {
  const mockLanguage = "English";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    InfoMessage.mockReturnValue(<div data-testid="info-message" />);
    CardSlider.mockReturnValue(<div data-testid="card-slider" />);
  });

  test("renders Page404 component correctly", () => {
    render(<Page404 />);

    const infoMessage = screen.getByTestId("info-message");
    expect(infoMessage).toBeInTheDocument();

    const cardSlider = screen.getByTestId("card-slider");
    expect(cardSlider).toBeInTheDocument();
  });

  test("renders InfoMessage with correct title and subtitle", () => {
    render(<Page404 />);

    expect(InfoMessage).toHaveBeenCalledWith(
      {
        title: "Sorry, we can’t locate that page.",
        subtitle: "You can continue shopping by exploring the collection.",
      },
      {}
    );
  });

  test("renders CardSlider component", () => {
    render(<Page404 />);

    expect(CardSlider).toHaveBeenCalled();
  });
});
