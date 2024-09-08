import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { useAuthenticationContext } from "../../../../../../contexts/AuthenticationContext";

import { useService } from "../../../../../../hooks/useService";

import { UserShippingDetails } from "./UserShippingDetails";

jest.mock("../../../../../../contexts/AuthenticationContext", () => ({
  useAuthenticationContext: jest.fn(),
}));

jest.mock("../../../../../../hooks/useService", () => ({
  useService: jest.fn(),
}));

jest.mock("../../../../../../services/userShippingDetailsService", () => ({
  userShippingDetailsServiceFactory: jest.fn(() => ({
    getOne: jest.fn(),
  })),
}));

describe("UserShippingDetails Component", () => {
  const mockUserId = "12345";
  const mockShippingDetails = {
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "123-456-7890",
    country: "USA",
    city: "New York",
    zipCode: "10001",
    street: "5th Ave",
    apartment: "12A",
  };

  beforeEach(() => {
    useAuthenticationContext.mockReturnValue({ userId: mockUserId });

    useService.mockReturnValue({
      getOne: jest.fn(() => Promise.resolve(mockShippingDetails)),
    });
  });

  test("renders user shipping details correctly", async () => {
    render(<UserShippingDetails />);

    await waitFor(() => {
      expect(screen.getByText("Shipping Address")).toBeInTheDocument();
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("123-456-7890")).toBeInTheDocument();
      expect(screen.getByText("USA")).toBeInTheDocument();
      expect(screen.getByText("New York 10001")).toBeInTheDocument();
      expect(screen.getByText("5th Ave St.")).toBeInTheDocument();
      expect(screen.getByText("Apt. 12A")).toBeInTheDocument();
    });
  });

  test("handles missing apartment correctly", async () => {
    const mockShippingDetailsWithoutApartment = {
      ...mockShippingDetails,
      apartment: null,
    };

    useService.mockReturnValue({
      getOne: jest.fn(() =>
        Promise.resolve(mockShippingDetailsWithoutApartment)
      ),
    });

    render(<UserShippingDetails />);

    await waitFor(() => {
      expect(screen.getByText("Shipping Address")).toBeInTheDocument();
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("123-456-7890")).toBeInTheDocument();
      expect(screen.getByText("USA")).toBeInTheDocument();
      expect(screen.getByText("New York 10001")).toBeInTheDocument();
      expect(screen.getByText("5th Ave St.")).toBeInTheDocument();

      expect(screen.queryByText("Apt. 12A")).not.toBeInTheDocument();
    });
  });
});
