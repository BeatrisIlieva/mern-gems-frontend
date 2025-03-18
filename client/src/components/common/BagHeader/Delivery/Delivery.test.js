import { render } from "@testing-library/react";

import { Delivery } from "./Delivery";

import { useLanguageContext } from "../../../../contexts/LanguageContext";

jest.mock("../../../../contexts/LanguageContext", () => ({
  useLanguageContext: jest.fn(),
}));

import styles from "./Delivery.module.css";

describe("Delivery Component", () => {
  const mockLanguage = "English";
  
  beforeEach(() => {
    useLanguageContext.mockReturnValue({ language: mockLanguage });

    jest.clearAllMocks();
  });

  test("applies the correct CSS class to the outer div", () => {
    const { container } = render(<Delivery />);

    const outerDiv = container.querySelector(`.${styles["delivery"]}`);
    expect(outerDiv).toBeInTheDocument();
  });
});
