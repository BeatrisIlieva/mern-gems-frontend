import { render, screen } from "@testing-library/react";
import { Content } from "./Content";
import { useBagContext } from "../../../../../contexts/BagContext";
import { useService } from "../../../../../hooks/useService";
import { checkIfItemsHasBeenSoldOut } from "../../../../common/StockStatus/helpers/checkIfItemsHasBeenSoldOut";

jest.mock("../../../../../contexts/BagContext", () => ({
  useBagContext: jest.fn(),
}));

jest.mock("../../../../../hooks/useService", () => ({
  useService: jest.fn(),
}));

jest.mock(
  "../../../../common/StockStatus/helpers/checkIfItemsHasBeenSoldOut",
  () => ({
    checkIfItemsHasBeenSoldOut: jest.fn(),
  })
);

jest.mock("./AddToBag/AddToBag", () => ({
  AddToBag: jest.fn(() => <div>Mocked AddToBag</div>),
}));

jest.mock("./JewelryCard/JewelryCard", () => ({
  JewelryCard: jest.fn(() => <div>Mocked JewelryCard</div>),
}));

jest.mock("../../../../reusable/Popup/Popup", () => ({
  Popup: jest.fn(({ children }) => <div>Mocked Popup {children}</div>),
}));

jest.mock("../../../../common/MiniBagContent/MiniBagContent", () => ({
  MiniBagContent: jest.fn(() => <div>Mocked MiniBagContent</div>),
}));

describe("Content Component", () => {
  const mockJewelries = [{ id: 1, price: 100, stock: "In Stock" }];
  const mockBagTotalQuantity = 1;

  const mockJewelryService = {
    getOne: jest.fn(),
  };

  beforeEach(() => {
    useBagContext.mockReturnValue({ bagTotalQuantity: mockBagTotalQuantity });
    useService.mockReturnValue(mockJewelryService);
    checkIfItemsHasBeenSoldOut.mockReturnValue(false);

    mockJewelryService.getOne.mockResolvedValue(mockJewelries);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const setup = (props = {}) => {
    const defaultProps = {
      categoryTitle: "Rings",
      colorTitle: "Pink",
    };

    return render(<Content {...defaultProps} {...props} />);
  };

  test("renders without crashing", () => {
    setup();
    expect(screen.queryByText("Mocked JewelryCard")).not.toBeInTheDocument();
  });
});
