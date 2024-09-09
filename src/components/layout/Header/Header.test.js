import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { MiniHeader } from "./MiniHeader/MiniHeader";
import { MainHeader } from "./MainHeader/MainHeader";

// Mock the MiniHeader and MainHeader components
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

    // Ensure that MiniHeader is rendered
    expect(screen.getByTestId("mini-header")).toBeInTheDocument();
    // Ensure that MainHeader is not rendered
    expect(screen.queryByTestId("main-header")).not.toBeInTheDocument();
  });

  it("renders MiniHeader when location is '/checkout/payment'", () => {
    renderHeaderWithRoute("/checkout/payment");

    // Ensure that MiniHeader is rendered
    expect(screen.getByTestId("mini-header")).toBeInTheDocument();
    // Ensure that MainHeader is not rendered
    expect(screen.queryByTestId("main-header")).not.toBeInTheDocument();
  });

  it("renders MainHeader when location is not '/checkout' or '/checkout/payment'", () => {
    renderHeaderWithRoute("/some-other-route");

    // Ensure that MainHeader is rendered
    expect(screen.getByTestId("main-header")).toBeInTheDocument();
    // Ensure that MiniHeader is not rendered
    expect(screen.queryByTestId("mini-header")).not.toBeInTheDocument();
  });
});
