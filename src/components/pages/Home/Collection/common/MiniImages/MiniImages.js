import { useState } from "react";

import { Image } from "./Image/Image";

import { COLORS_BY_INDEX } from "../../constants/colorsByIndex";

import styles from "./MiniImages.module.css";

export const MiniImages = ({ colorIndex, entity, updateColorIndex }) => {
  const [activeMiniImage, setActiveMiniImage] = useState(colorIndex);

  const updateActiveMiniImage = (index) => {
    setActiveMiniImage(index);
  };

  const color = COLORS_BY_INDEX[colorIndex];

  return (
    <ul className={styles["mini-images-list"]} role="list">
      {entity.map((item, index) => (
        <li
          key={item._id}
          className={`${
            activeMiniImage === index
              ? `${styles["active-mini-image"]} ${styles[color]}`
              : ""
          }`.trim()}
        >
          <Image
            imageObject={item.miniImage}
            index={index}
            updateActiveMiniImage={updateActiveMiniImage}
            updateColorIndex={updateColorIndex}
            isActive={activeMiniImage === index}
          />
        </li>
      ))}
    </ul>
  );
};
