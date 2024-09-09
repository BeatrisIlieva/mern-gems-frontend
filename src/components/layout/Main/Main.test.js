import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Main } from "./Main";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

jest.mock("../../../contexts/AuthenticationContext", () => ({
  useAuthenticationContext: jest.fn(),
}));

jest.mock("../../pages/Home/Home", () => ({
  Home: () => <div>Home Page</div>,
}));

jest.mock("../../pages/CollectionList/CollectionList", () => ({
  CollectionList: () => <div>Collection List Page</div>,
}));

jest.mock("../../pages/CollectionItem/CollectionItem", () => ({
  CollectionItem: () => <div>Collection Item Page</div>,
}));

jest.mock("../../pages/Account/Account", () => ({
  Account: () => <div>Account Page</div>,
}));

jest.mock("../../pages/Bag/Bag", () => ({
  Bag: () => <div>Shopping Bag Page</div>,
}));

jest.mock("../../pages/Wishlist/Wishlist", () => ({
  Wishlist: () => <div>Wishlist Page</div>,
}));

jest.mock("../../pages/Checkout/Checkout", () => ({
  Checkout: () => <div>Checkout Page</div>,
}));

jest.mock("../../pages/OrderConfirmation/OrderConfirmation", () => ({
  OrderConfirmation: () => <div>Order Confirmation Page</div>,
}));

jest.mock("../../pages/Page404/Page404", () => ({
  Page404: () => <div>404 Page</div>,
}));

describe("Main Component", () => {
  const renderWithRouter = (route = "/") => {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Main />
      </MemoryRouter>
    );
  };

  it("should render the Home component when the user navigates to '/'", () => {
    renderWithRouter("/");
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  it("should render the CollectionList component for '/collection' when authenticated", () => {
    useAuthenticationContext.mockReturnValue({ isAuthenticated: true });
    renderWithRouter("/collection");
    expect(screen.getByText("Collection List Page")).toBeInTheDocument();
  });

  it("should render the CollectionItem component for '/collection/:slugifiedCategoryTitle/:slugifiedColorTitle' when authenticated", () => {
    useAuthenticationContext.mockReturnValue({ isAuthenticated: true });
    renderWithRouter("/collection/some-category/some-color");
    expect(screen.getByText("Collection Item Page")).toBeInTheDocument();
  });

  it("should render the Account component for '/users/account' when authenticated", () => {
    useAuthenticationContext.mockReturnValue({ isAuthenticated: true });
    renderWithRouter("/users/account");
    expect(screen.getByText("Account Page")).toBeInTheDocument();
  });

  it("should redirect to '/' if not authenticated for '/users/account'", () => {
    useAuthenticationContext.mockReturnValue({ isAuthenticated: false });
    renderWithRouter("/users/account");
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });

  it("should render the Bag component for '/users/shopping-bag' when authenticated", () => {
    useAuthenticationContext.mockReturnValue({ isAuthenticated: true });
    renderWithRouter("/users/shopping-bag");
    expect(screen.getByText("Shopping Bag Page")).toBeInTheDocument();
  });

  it("should render the Wishlist component for '/users/wishlist' when authenticated", () => {
    useAuthenticationContext.mockReturnValue({ isAuthenticated: true });
    renderWithRouter("/users/wishlist");
    expect(screen.getByText("Wishlist Page")).toBeInTheDocument();
  });

  it("should render the Checkout component for '/checkout' when authenticated", () => {
    useAuthenticationContext.mockReturnValue({ isAuthenticated: true });
    renderWithRouter("/checkout");
    expect(screen.getByText("Checkout Page")).toBeInTheDocument();
  });

  it("should render the OrderConfirmation component for '/order-confirmation' when authenticated", () => {
    useAuthenticationContext.mockReturnValue({ isAuthenticated: true });
    renderWithRouter("/order-confirmation");
    expect(screen.getByText("Order Confirmation Page")).toBeInTheDocument();
  });
});
