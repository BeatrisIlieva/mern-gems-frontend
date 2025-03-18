import {
  render,
  fireEvent,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import { SwitchLanguage } from "./SwitchLanguage";
import { useLanguageContext } from "../../../contexts/LanguageContext";

import { IMAGE_URLS } from "./constants/imageUrls";

jest.mock("../../../contexts/LanguageContext");

const mockUpdateLanguage = jest.fn();

describe("SwitchLanguage Component", () => {
  beforeEach(() => {
    useLanguageContext.mockReturnValue({
      language: "English",
      updateLanguage: mockUpdateLanguage,
    });
  });

  test("renders the SwitchLanguage component with initial language", () => {
    render(<SwitchLanguage variant="to-the-left" />);
    const img = screen.getByAltText("flag");
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(IMAGE_URLS.English);
  });

  test("toggles dropdown on image click", async () => {
    render(<SwitchLanguage variant="to-the-left" />);

    const img = screen.getByAltText("flag");

    act(() => {
      fireEvent.click(img);
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
    });

    await waitFor(() => {
      const dropdown = screen.getByTestId("dropdown");
      expect(dropdown).toBeInTheDocument();
    });
  });

  test("changes language on dropdown selection", async () => {
    render(<SwitchLanguage variant="to-the-left" />);

    const img = screen.getByAltText("flag");
    act(() => {
      fireEvent.click(img);
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
    });

    const chineseFlag = screen.getByAltText("Chinese flag");

    act(() => {
      fireEvent.click(chineseFlag);
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
    });

    expect(mockUpdateLanguage).toHaveBeenCalledWith("Chinese");
  });
});
