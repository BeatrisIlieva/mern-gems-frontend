import { render, screen, fireEvent, act } from "@testing-library/react";
import { SwitchLanguage } from "./SwitchLanguage";
import { useLanguageContext } from "../../../contexts/LanguageContext";

import { IMAGE_URLS } from "./constsnts/imageUrls";

jest.mock("../../../contexts/LanguageContext");

describe("SwitchLanguage Component", () => {
  const mockUpdateLanguage = jest.fn();

  beforeEach(() => {
    mockUpdateLanguage.mockClear();

    useLanguageContext.mockReturnValue({
      language: "English",
      updateLanguage: mockUpdateLanguage,
    });
  });

  it("renders the initial selected language", () => {
    render(<SwitchLanguage variant="to-the-left" />);

    const flagImage = screen.getByAltText("flag");
    expect(flagImage).toBeInTheDocument();
    expect(flagImage).toHaveAttribute("src", IMAGE_URLS.English);
  });

  it("displays the dropdown when clicked", async () => {
    render(<SwitchLanguage variant="to-the-left" />);

    const flagThumbnail = screen.getByAltText("flag");

    act(() => {
      fireEvent.click(flagThumbnail);
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
    });

    const chineseFlag = screen.getByAltText("Chinese flag");
    const bulgarianFlag = screen.getByAltText("Bulgarian flag");
    expect(chineseFlag).toBeInTheDocument();
    expect(bulgarianFlag).toBeInTheDocument();
  });

  it("updates the language when a new flag is selected", async () => {
    render(<SwitchLanguage variant="to-the-left" />);

    const flagThumbnail = screen.getByAltText("flag");

    act(() => {
      fireEvent.click(flagThumbnail);
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
    });

    const chineseFlag = screen.getByAltText("Chinese flag");
    fireEvent.click(chineseFlag);

    const updatedFlagImage = screen.getByAltText("flag");
    expect(updatedFlagImage).toHaveAttribute("src", IMAGE_URLS.English);
  });
});
