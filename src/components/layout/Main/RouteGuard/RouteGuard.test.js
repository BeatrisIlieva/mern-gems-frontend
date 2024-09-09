import { render } from "@testing-library/react";
import { Outlet } from "react-router-dom";
import { RouteGuard } from "./RouteGuard";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

jest.mock("../../../../contexts/AuthenticationContext", () => ({
  useAuthenticationContext: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn().mockReturnValue({ pathname: "/private" }),
  Navigate: jest.fn(() => null),
  Outlet: jest.fn(() => null),
}));

describe("RouteGuard Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render children if the user is authenticated", () => {
    useAuthenticationContext.mockReturnValue({ isAuthenticated: true });

    const ChildComponent = () => <div>Authenticated Content</div>;

    const { getByText } = render(
      <RouteGuard>
        <ChildComponent />
      </RouteGuard>
    );

    expect(getByText("Authenticated Content")).toBeInTheDocument();
  });

  it("should render <Outlet /> if no children are passed and the user is authenticated", () => {
    useAuthenticationContext.mockReturnValue({ isAuthenticated: true });

    render(<RouteGuard />);

    expect(Outlet).toHaveBeenCalled();
  });
});
