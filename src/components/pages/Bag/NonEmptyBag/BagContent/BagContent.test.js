import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BagContent } from "./BagContent";

jest.mock("../../../../common/BagHeader/BagHeader", () => ({
  BagHeader: () => <div>BagHeader</div>,
}));

jest.mock("../../../../common/BagList/BagList", () => ({
  BagList: () => <div>BagList</div>,
}));

describe("BagContent Component", () => {
  test("renders BagHeader and BagList", () => {
    render(<BagContent />);

    expect(screen.getByText("BagHeader")).toBeInTheDocument();

    expect(screen.getByText("BagList")).toBeInTheDocument();
  });
});
