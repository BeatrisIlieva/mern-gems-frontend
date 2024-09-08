import { render, screen } from "@testing-library/react";
import { EmptyWishlist } from "./EmptyWishlist";
import { InfoMessage } from "../../../reusable/InfoMessage/InfoMessage";
import { CardSlider } from "../../../common/CardSlider/CardSlider";

// Mock the child components
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

    // Check if InfoMessage is rendered with the correct title and subtitle
    expect(screen.getByText("This Wishlist Is Empty.")).toBeInTheDocument();
    expect(
      screen.getByText("Explore and add something you love.")
    ).toBeInTheDocument();

    // Check if CardSlider is rendered
    expect(screen.getByText("CardSlider Component")).toBeInTheDocument();
  });
});
