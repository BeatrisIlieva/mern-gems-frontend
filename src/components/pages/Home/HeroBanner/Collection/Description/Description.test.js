import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";

import { Description } from "./Description";

import { IMAGE_BY_URL_AND_VARIANT } from "./constants/imagesByUrlAndVariant";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../../MiniImage/MiniImage", () => ({
  MiniImage: ({ imageUrl }) => <img src={imageUrl} alt="mini image" />,
}));

jest.mock("../../../../../reusable/LargeTitle/LargeTitle", () => ({
  LargeTitle: ({ title }) => <h1>{title}</h1>,
}));

jest.mock("../../../../../reusable/Paragraph/Paragraph", () => ({
  Paragraph: ({ text }) => <p>{text}</p>,
}));

jest.mock("../../../../../reusable/Button/Button", () => ({
  Button: ({ title, callBackFunction }) => (
    <button onClick={callBackFunction}>{title}</button>
  ),
}));

describe("Description Component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
  });

  test("renders the MiniImage components with correct URLs", () => {
    render(<Description />);

    const images = screen.getAllByAltText("mini image");
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute(
      "src",
      IMAGE_BY_URL_AND_VARIANT.butterfly.imageUrl
    );
    expect(images[1]).toHaveAttribute(
      "src",
      IMAGE_BY_URL_AND_VARIANT.white.imageUrl
    );
  });

  test("renders the LargeTitle with correct text", () => {
    render(<Description />);

    const title = screen.getByText("Forget-Me-Not Collection");
    expect(title).toBeInTheDocument();
  });

  test("renders the Paragraph with correct text", () => {
    render(<Description />);

    const paragraphText =
      "The enchanting and delicate beauty of a Forget-Me-Not flower in bloom is captured in a series of fine jewelry designs that celebrate the endless beauty of nature’s greatest gifts – rare gemstones and flowers in bloom.";
    const paragraph = screen.getByText(paragraphText);
    expect(paragraph).toBeInTheDocument();
  });

  test("navigates to '/collection' when the Discover button is clicked", () => {
    render(<Description />);

    const button = screen.getByText("Discover");
    userEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/collection");
  });
});
