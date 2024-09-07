import { useCallback } from "react";

import { useNavigate } from "react-router-dom";

import { slugify } from "../utils/slugify";

export const useLargeImagesClick = ({ categoryTitle, colorTitle }) => {
  const navigate = useNavigate();

  const slugifiedCategoryTitle = slugify(categoryTitle);

  const slugifiedColorTitle = slugify(colorTitle);

  const largeImagesClickHandler = useCallback(() => {
    return navigate(
      `/collection/${slugifiedCategoryTitle}/${slugifiedColorTitle}`
    );
  }, [slugifiedCategoryTitle, slugifiedColorTitle]);

  return { largeImagesClickHandler };
};
