import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

import { CardDetailsForm } from "./CardDetailsForm";

import { AuthenticationContext } from "../../../contexts/AuthenticationContext";
import { BagContext } from "../../../contexts/BagContext";

import { useService } from "../../../hooks/useService";

import { paymentServiceFactory } from "../../../services/paymentService";
import { orderServiceFactory } from "../../../services/orderService";

import { FORM_KEYS, INITIAL_FORM_VALUES } from "./constants/initialFormValues";
import { CARD_HAS_EXPIRED_ERROR_MESSAGE } from "../../../constants/expiryDate";

import { ERROR_MESSAGES } from "../../../mappers/errorMessages";

jest.mock("../../../hooks/useService");

const userId = "test-id";

describe("CardDetailsForm Component", () => {
  const mockToken = "testToken";
  const mockUserId = userId;
  const mockTotalPrice = 100;

  const mockUserCardDetailsService = {
    getOne: jest.fn(),
    update: jest.fn(),
  };

  const mockPaymentService = {
    create: jest.fn(),
  };

  const mockOrderService = {
    create: jest.fn(),
  };

  const mockPopupCloseHandler = jest.fn();

  beforeEach(() => {
    useService.mockImplementation((serviceFactory) => {
      if (serviceFactory === paymentServiceFactory) {
        return mockPaymentService;
      } else if (serviceFactory === orderServiceFactory) {
        return mockOrderService;
      } else {
        return mockUserCardDetailsService;
      }
    });

    mockUserCardDetailsService.getOne.mockClear();
    mockUserCardDetailsService.update.mockClear();
    mockPaymentService.create.mockClear();
    mockOrderService.create.mockClear();
  });

  test("Submits the form with valid values and popupCloseHandler; Expect update and popupCloseHandler to be called, paymentService.create and orderService.create not to be called", async () => {
    const mockUserInformation = {
      token: mockToken,
      userId: mockUserId,
    };

    const mockBagInformation = {
      totalPrice: mockTotalPrice,
    };

    mockUserCardDetailsService.getOne.mockResolvedValue(mockUserInformation);

    render(
      <MemoryRouter>
        <BagContext.Provider value={mockBagInformation}>
          <AuthenticationContext.Provider value={mockUserInformation}>
            <CardDetailsForm popupCloseHandler={mockPopupCloseHandler} />
          </AuthenticationContext.Provider>
        </BagContext.Provider>
      </MemoryRouter>
    );

    const inputs = {};

    Object.values(FORM_KEYS).forEach((value) => {
      inputs[value] = screen.getByTestId(`${value}-input`);
    });

    Object.entries(inputs).forEach(([inputKey, inputValue]) => {
      fireEvent.change(inputValue, {
        target: { value: INITIAL_FORM_VALUES[inputKey].validTestData },
      });
    });

    const submitButton = screen.getByTestId("button");
    fireEvent.click(submitButton);

    const submitData = {};

    Object.entries(INITIAL_FORM_VALUES).forEach(([key, value]) => {
      submitData[key] = value.validTestData;
    });

    await waitFor(() => {
      expect(mockUserCardDetailsService.update).toHaveBeenCalledWith(
        userId,
        submitData
      );

      expect(mockPopupCloseHandler).toHaveBeenCalled();

      expect(mockPaymentService.create).not.toHaveBeenCalled();
      expect(mockOrderService.create).not.toHaveBeenCalled();
    });

    Object.keys(INITIAL_FORM_VALUES).forEach((key) => {
      const errorMessageContainer = screen.queryByTestId(`${key}-error`);
      expect(errorMessageContainer).not.toBeInTheDocument();
    });
  });

  test("Submits the form with valid values without popupCloseHandler; Expect update, paymentService.create and orderService.create to be called", async () => {
    const mockUserInformation = {
      token: mockToken,
      userId: mockUserId,
    };

    const mockBagInformation = {
      totalPrice: mockTotalPrice,
    };

    mockUserCardDetailsService.getOne.mockResolvedValue(mockUserInformation);

    render(
      <MemoryRouter>
        <BagContext.Provider value={mockBagInformation}>
          <AuthenticationContext.Provider value={mockUserInformation}>
            <CardDetailsForm />
          </AuthenticationContext.Provider>
        </BagContext.Provider>
      </MemoryRouter>
    );

    const inputs = {};

    Object.values(FORM_KEYS).forEach((value) => {
      inputs[value] = screen.getByTestId(`${value}-input`);
    });

    Object.entries(inputs).forEach(([inputKey, inputValue]) => {
      fireEvent.change(inputValue, {
        target: { value: INITIAL_FORM_VALUES[inputKey].validTestData },
      });
    });

    const submitButton = screen.getByTestId("button");
    fireEvent.click(submitButton);

    const submitData = {};

    Object.entries(INITIAL_FORM_VALUES).forEach(([key, value]) => {
      submitData[key] = value.validTestData;
    });

    await waitFor(() => {
      expect(mockUserCardDetailsService.update).toHaveBeenCalledWith(
        userId,
        submitData
      );

      expect(mockPaymentService.create).toHaveBeenCalledWith(
        userId,
        submitData
      );
      expect(mockOrderService.create).toHaveBeenCalledWith(userId);

      expect(mockPopupCloseHandler).not.toHaveBeenCalled();
    });

    Object.keys(INITIAL_FORM_VALUES).forEach((key) => {
      const errorMessageContainer = screen.queryByTestId(`${key}-error`);
      expect(errorMessageContainer).not.toBeInTheDocument();
    });
  });

  test("Submits the form with invalid data; Expect update, paymentService.create and orderService.create not to be called; Expect errors", async () => {
    const mockUserInformation = {
      token: mockToken,
      userId: mockUserId,
    };

    const mockBagInformation = {
      totalPrice: mockTotalPrice,
    };

    mockUserCardDetailsService.getOne.mockResolvedValue(mockUserInformation);

    render(
      <MemoryRouter>
        <BagContext.Provider value={mockBagInformation}>
          <AuthenticationContext.Provider value={mockUserInformation}>
            <CardDetailsForm />
          </AuthenticationContext.Provider>
        </BagContext.Provider>
      </MemoryRouter>
    );
    const inputs = {};

    Object.values(FORM_KEYS).forEach((value) => {
      inputs[value] = screen.getByTestId(`${value}-input`);
    });

    Object.entries(inputs).forEach(([inputKey, inputValue]) => {
      fireEvent.change(inputValue, {
        target: { value: INITIAL_FORM_VALUES[inputKey].invalidTestData },
      });
    });

    const submitButton = screen.getByTestId("button");
    fireEvent.click(submitButton);

    const submitData = {};

    Object.entries(INITIAL_FORM_VALUES).forEach(([key, value]) => {
      submitData[key] = value.invalidTestData;
    });

    await waitFor(() => {
      expect(mockUserCardDetailsService.update).not.toHaveBeenCalled();
      expect(mockPaymentService.create).not.toHaveBeenCalled();
      expect(mockOrderService.create).not.toHaveBeenCalled();
    });

    Object.keys(INITIAL_FORM_VALUES).forEach((key) => {
      const errorMessageContainer = screen.getByTestId(`${key}-error`);
      expect(errorMessageContainer).toHaveTextContent(ERROR_MESSAGES[key]);
    });
  });

  test("Submits the form with expired date; Expect update, paymentService.create and orderService.create not to be called; Expect errors", async () => {
    const mockUserInformation = {
      token: mockToken,
      userId: mockUserId,
    };

    const mockBagInformation = {
      totalPrice: mockTotalPrice,
    };

    mockUserCardDetailsService.getOne.mockResolvedValue(mockUserInformation);

    render(
      <MemoryRouter>
        <BagContext.Provider value={mockBagInformation}>
          <AuthenticationContext.Provider value={mockUserInformation}>
            <CardDetailsForm />
          </AuthenticationContext.Provider>
        </BagContext.Provider>
      </MemoryRouter>
    );

    const inputs = {};

    Object.values(FORM_KEYS).forEach((value) => {
      inputs[value] = screen.getByTestId(`${value}-input`);
    });

    Object.entries(inputs).forEach(([inputKey, inputValue]) => {
      fireEvent.change(inputValue, {
        target: { value: INITIAL_FORM_VALUES[inputKey].expiredTestData },
      });
    });

    const submitButton = screen.getByTestId("button");
    fireEvent.click(submitButton);

    const submitData = {};

    Object.entries(INITIAL_FORM_VALUES).forEach(([key, value]) => {
      submitData[key] = value.expiredTestData;
    });

    await waitFor(() => {
      expect(mockUserCardDetailsService.update).not.toHaveBeenCalled();
      expect(mockPaymentService.create).not.toHaveBeenCalled();
      expect(mockOrderService.create).not.toHaveBeenCalled();
    });

    const errorMessageContainer = screen.getByTestId("expiryDate-error");
    expect(errorMessageContainer).toHaveTextContent(
      CARD_HAS_EXPIRED_ERROR_MESSAGE
    );
  });

  test("Submits the form with empty values; Expect update, paymentService.create and orderService.create not to be called; Expect errors", async () => {
    const mockUserInformation = {
      token: mockToken,
      userId: mockUserId,
    };

    const mockBagInformation = {
      totalPrice: mockTotalPrice,
    };

    mockUserCardDetailsService.getOne.mockResolvedValue(mockUserInformation);

    render(
      <MemoryRouter>
        <BagContext.Provider value={mockBagInformation}>
          <AuthenticationContext.Provider value={mockUserInformation}>
            <CardDetailsForm />
          </AuthenticationContext.Provider>
        </BagContext.Provider>
      </MemoryRouter>
    );

    const inputs = {};

    Object.values(FORM_KEYS).forEach((value) => {
      inputs[value] = screen.getByTestId(`${value}-input`);
    });

    Object.entries(inputs).forEach(([inputKey, inputValue]) => {
      fireEvent.change(inputValue, {
        target: { value: INITIAL_FORM_VALUES[inputKey].emptyTestData },
      });
    });

    const submitButton = screen.getByTestId("button");
    fireEvent.click(submitButton);

    const submitData = {};

    Object.entries(INITIAL_FORM_VALUES).forEach(([key, value]) => {
      submitData[key] = value.emptyTestData;
    });

    await waitFor(() => {
      expect(mockUserCardDetailsService.update).not.toHaveBeenCalled();
      expect(mockPaymentService.create).not.toHaveBeenCalled();
      expect(mockOrderService.create).not.toHaveBeenCalled();
    });

    Object.keys(INITIAL_FORM_VALUES).forEach((key) => {
      const errorMessageContainer = screen.getByTestId(`${key}-error`);
      expect(errorMessageContainer).toHaveTextContent(ERROR_MESSAGES[key]);
    });
  });
});
