import { render } from "@testing-library/react";

import { BagCount } from "./BagCount";

import { useBagContext } from "../../../../contexts/BagContext";

import styles from "./BagCount.module.css";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

jest.mock("../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

jest.mock("../../../../contexts/BagContext", () => ({
  useBagContext: jest.fn(),
}));

describe("BagCount Component", () => {
  const mockLanguage = "English";

  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("displays the correct text when bagTotalQuantity is greater than 1", () => {
    useBagContext.mockReturnValue({ bagTotalQuantity: 5 });

    const { getByText } = render(<BagCount />);

    const textElement = getByText("(5 items)");
    expect(textElement).toBeInTheDocument();
  });

  test("displays the correct text when bagTotalQuantity is 1", () => {
    useBagContext.mockReturnValue({ bagTotalQuantity: 1 });

    const { getByText } = render(<BagCount />);

    const textElement = getByText("(1 item)");
    expect(textElement).toBeInTheDocument();
  });

  test("applies the correct CSS class", () => {
    useBagContext.mockReturnValue({ bagTotalQuantity: 3 });

    const { container } = render(<BagCount />);

    const h4Element = container.querySelector(`.${styles["title"]}`);
    expect(h4Element).toBeInTheDocument();
  });
});
