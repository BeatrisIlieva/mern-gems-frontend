import { render, screen } from "@testing-library/react";

import { EmptyWishlist } from "./EmptyWishlist";

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
  test("renders InfoMessage and CardSlider", () => {
    render(<EmptyWishlist />);

    expect(screen.getByText("This Wishlist Is Empty.")).toBeInTheDocument();
    expect(
      screen.getByText("Explore and add something you love.")
    ).toBeInTheDocument();

    expect(screen.getByText("CardSlider Component")).toBeInTheDocument();
  });
});
