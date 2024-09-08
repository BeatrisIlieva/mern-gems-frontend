import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { EmptyBag } from "./EmptyBag";

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
  test("renders InfoMessage and CardSlider", () => {
    render(<EmptyBag />);

    expect(screen.getByText("Your Shopping Bag Is Empty.")).toBeInTheDocument();
    expect(
      screen.getByText("Explore and add something you love.")
    ).toBeInTheDocument();

    expect(screen.getByText("CardSlider")).toBeInTheDocument();
  });
});
