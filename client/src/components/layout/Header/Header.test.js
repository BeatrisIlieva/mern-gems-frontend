import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";

jest.mock("./MiniHeader/MiniHeader", () => ({
  MiniHeader: () => <div data-testid="mini-header">Mini Header</div>,
}));

jest.mock("./MainHeader/MainHeader", () => ({
  MainHeader: () => <div data-testid="main-header">Main Header</div>,
}));

describe("Header Component", () => {
  const renderHeaderWithRoute = (route) => {
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="*" element={<Header />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it("renders MiniHeader when location is '/checkout'", () => {
    renderHeaderWithRoute("/checkout");

    expect(screen.getByTestId("mini-header")).toBeInTheDocument();
    expect(screen.queryByTestId("main-header")).not.toBeInTheDocument();
  });

  it("renders MiniHeader when location is '/checkout/payment'", () => {
    renderHeaderWithRoute("/checkout/payment");

    expect(screen.getByTestId("mini-header")).toBeInTheDocument();
    expect(screen.queryByTestId("main-header")).not.toBeInTheDocument();
  });

  it("renders MainHeader when location is not '/checkout' or '/checkout/payment'", () => {
    renderHeaderWithRoute("/some-other-route");

    expect(screen.getByTestId("main-header")).toBeInTheDocument();
    expect(screen.queryByTestId("mini-header")).not.toBeInTheDocument();
  });
});
