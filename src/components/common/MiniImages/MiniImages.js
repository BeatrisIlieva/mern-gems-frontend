import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Image } from "./Image/Image";

import { slugify } from "../../../utils/slugify";

import { COLORS_BY_TITLE } from "../../../constants/colorsByTitle";
import { MINI_IMAGES_BY_TITLE_AND_IMAGE_URL } from "./constants/miniImagesByTitleAndImageUrl";

import styles from "./MiniImages.module.css";

export const MiniImages = ({ jewelriesByCategory, updateColorTitle }) => {
  const location = useLocation();

  const navigate = useNavigate();

  const clickHandler = (colorTitle) => {
    if (location.pathname === "/") {
      updateColorTitle(colorTitle);
    } else {
      const categoryTitle = jewelriesByCategory[0].categories[0].title;

      const slugifiedCategoryTitle = slugify(categoryTitle);

      const slugifiedColorTitle = slugify(colorTitle);

      navigate(`/${slugifiedCategoryTitle}/${slugifiedColorTitle}`);
    }
  };

  const [activeMiniImage, setActiveMiniImage] = useState(
    jewelriesByCategory[0].colors[0].title
  );

  const updateActiveMiniImage = (colorTitle) => {
    setActiveMiniImage(colorTitle);

    clickHandler(colorTitle);
  };

  const color = COLORS_BY_TITLE[activeMiniImage];

  return (
    <ul className={styles["mini-images-list"]} role="list">
      {Object.entries(MINI_IMAGES_BY_TITLE_AND_IMAGE_URL).map(
        ([colorName, { title, imageUrl }]) => (
          <li
            key={colorName}
            className={`${
              colorName === activeMiniImage
                ? `${styles["active-mini-image"]} ${styles[color]}`
                : ""
            }`.trim()}
          >
            <Image
              imageUrl={imageUrl}
              title={title}
              colorName={colorName}
              updateActiveMiniImage={updateActiveMiniImage}
              isActive={colorName === activeMiniImage}
            />
          </li>
        )
      )}
    </ul>
  );
};
