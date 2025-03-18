import { render, screen } from "@testing-library/react";

import { MiniImage } from "./MiniImage";

describe("MiniImage Component", () => {
  const imageUrl = "https://example.com/image.jpg";
  const variant = "large";
  const waveEffect = "wave";

  test("renders image with correct src and alt attributes", () => {
    render(
      <MiniImage
        imageUrl={imageUrl}
        variant={variant}
        waveEffect={waveEffect}
      />
    );

    const image = screen.getByAltText("Forget-Me-Not-Collection");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", imageUrl);
    expect(image).toHaveAttribute("alt", "Forget-Me-Not-Collection");
  });

  test("applies the correct variant and waveEffect classes", () => {
    const { container } = render(
      <MiniImage
        imageUrl={imageUrl}
        variant={variant}
        waveEffect={waveEffect}
      />
    );

    const divElement = container.querySelector("div");
    const imgElement = container.querySelector("img");

    expect(divElement).toHaveClass(`mini-image ${variant}`);

    expect(imgElement).toHaveClass(waveEffect);
  });
});
