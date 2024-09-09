import { render } from "@testing-library/react";
import { Navigate, Outlet } from "react-router-dom";
import { RouteGuard } from "./RouteGuard";
import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

// Mock the useAuthenticationContext hook and useLocation
jest.mock("../../../../contexts/AuthenticationContext", () => ({
  useAuthenticationContext: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn().mockReturnValue({ pathname: "/private" }),
  Navigate: jest.fn(() => null), // Mock Navigate to return null
  Outlet: jest.fn(() => null), // Mock Outlet to return null
}));

describe("RouteGuard Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });


  it("should render children if the user is authenticated", () => {
    // Mock the context to return that the user is authenticated
    useAuthenticationContext.mockReturnValue({ isAuthenticated: true });

    // Mock child component
    const ChildComponent = () => <div>Authenticated Content</div>;

    // Render the component with a child
    const { getByText } = render(
      <RouteGuard>
        <ChildComponent />
      </RouteGuard>
    );

    // Expect the child component to be rendered
    expect(getByText("Authenticated Content")).toBeInTheDocument();
  });

  it("should render <Outlet /> if no children are passed and the user is authenticated", () => {
    // Mock the context to return that the user is authenticated
    useAuthenticationContext.mockReturnValue({ isAuthenticated: true });

    // Render the component without children
    render(<RouteGuard />);

    // Expect the Outlet component to be rendered
    expect(Outlet).toHaveBeenCalled();
  });
});
