import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Image } from "./Image/Image";

import { useJewelry } from "../../../hooks/useJewelry";

import { slugify } from "../../../utils/slugify";

import { COLORS_BY_ID } from "../../../constants/colorsById";
import { MINI_IMAGES_BY_COLOR_ID_AND_IMAGE_URL } from "../../pages/Home/Collection/constants/miniImagesByColorIdAndImageUrl";

import styles from "./MiniImages.module.css";

export const MiniImages = ({ jewelriesByCategory }) => {
  const navigate = useNavigate();

  const clickHandler = (colorId) => {
    const categoryId = jewelriesByCategory[0].category;

    const slugifiedJewelryTitle = slugify(jewelriesByCategory[0].title);

    navigate(`/${categoryId}/${colorId}`);
  };

  const [activeMiniImage, setActiveMiniImage] = useState(
    jewelriesByCategory[0].color
  );

  const updateActiveMiniImage = (id) => {
    setActiveMiniImage(id);

    clickHandler(id);
  };

  const color = COLORS_BY_ID[activeMiniImage];

  return (
    <ul className={styles["mini-images-list"]} role="list">
      {Object.entries(MINI_IMAGES_BY_COLOR_ID_AND_IMAGE_URL).map(
        ([id, { title, imageUrl }]) => (
          <li
            key={id}
            className={`${
              Number(id) === activeMiniImage
                ? `${styles["active-mini-image"]} ${styles[color]}`
                : ""
            }`.trim()}
          >
            <Image
              imageUrl={imageUrl}
              title={title}
              id={Number(id)}
              updateActiveMiniImage={updateActiveMiniImage}
              isActive={Number(id) === activeMiniImage}
            />
          </li>
        )
      )}
    </ul>
  );
};
