import { render, screen } from "@testing-library/react";

import { HeroBanner } from "./HeroBanner";
import { Collection } from "./Collection/Collection";

jest.mock("./Collection/Collection");

describe("HeroBanner Component", () => {
  beforeEach(() => {
    Collection.mockReturnValue(<div data-testid="collection" />);
  });

  test("renders Collection inside HeroBanner", () => {
    render(<HeroBanner />);

    const collection = screen.getByTestId("collection");
    expect(collection).toBeInTheDocument();
  });
});
