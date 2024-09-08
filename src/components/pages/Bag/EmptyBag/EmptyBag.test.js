import { render, screen } from "@testing-library/react";
import { EmptyBag } from "./EmptyBag";
import '@testing-library/jest-dom/extend-expect';

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
  CardSlider: () => <div>CardSlider</div>,
}));

describe("EmptyBag Component", () => {
  test("renders InfoMessage and CardSlider", () => {
    render(<EmptyBag />);

    // Check if InfoMessage with the correct title and subtitle is rendered
    expect(screen.getByText("Your Shopping Bag Is Empty.")).toBeInTheDocument();
    expect(screen.getByText("Explore and add something you love.")).toBeInTheDocument();
    
    // Check if CardSlider is rendered
    expect(screen.getByText("CardSlider")).toBeInTheDocument();
  });
});
