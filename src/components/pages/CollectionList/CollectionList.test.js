import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { CollectionList } from "./CollectionList";

import { INITIAL_CATEGORY_CARD_VALUES } from "../../../constants/initialCategoryCardValues";

jest.mock("./CategoryCard/CategoryCard", () => ({
  CategoryCard: ({ categoryTitle, colorTitle }) => (
    <div data-testid="category-card">
      {categoryTitle} - {colorTitle}
    </div>
  ),
}));

describe("CollectionList component", () => {
  test("renders the correct number of CategoryCard components", () => {
    render(<CollectionList />);

    const categoryCards = screen.getAllByTestId("category-card");

    expect(categoryCards).toHaveLength(
      Object.keys(INITIAL_CATEGORY_CARD_VALUES).length
    );
  });

  test("renders CategoryCard components with the correct props", () => {
    render(<CollectionList />);

    Object.entries(INITIAL_CATEGORY_CARD_VALUES).forEach(
      ([categoryTitle, colorTitle]) => {
        expect(
          screen.getByText(`${categoryTitle} - ${colorTitle}`)
        ).toBeInTheDocument();
      }
    );
  });
});
