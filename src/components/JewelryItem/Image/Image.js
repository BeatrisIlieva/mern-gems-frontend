import { useState } from "react";

import { CircleIcon } from "../CircleIcon/CircleIcon";

import styles from "./Image.module.css";

import { useJewelryItem } from "../../../hooks/useJewelryItem";

export const Image = () => {
  const { jewelry, isSoldOut } = useJewelryItem();

  const [leftIsSelected, setLeftIsSelected] = useState(true);
  const [rightIsSelected, setRightIsSelected] = useState(false);

  const toggleSelected = () => {
    setLeftIsSelected(!leftIsSelected);
    setRightIsSelected(!rightIsSelected);
  };

  return (
    <div className={styles["jewelry-images"]}>
      <div
        className={`${styles["image"]} ${
          isSoldOut === true ? styles["sold-out"] : ""
        }`.trim()}
      >
        <img
          src={leftIsSelected ? jewelry.firstImageUrl : jewelry.secondImageUrl}
          alt={jewelry.title}
          onClick={toggleSelected}
          className={
            leftIsSelected
              ? styles[`${"left-image"}`]
              : styles[`${"right-image"}`]
          }
        />
        {isSoldOut && <span className={styles["sold-out-span"]}>SOLD OUT</span>}
      </div>
      <div className={styles["circles-container"]}>
        <CircleIcon isSelected={leftIsSelected} />
        <CircleIcon isSelected={rightIsSelected} />
      </div>
    </div>
  );
};
