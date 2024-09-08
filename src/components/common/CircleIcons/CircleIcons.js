import { memo } from "react";

import { CircleIcon } from "./CircleIcon/CircleIcon";

import styles from "./CircleIcons.module.css";

export const CircleIcons = memo(
  ({ firstImageUrlIsActive, toggleFirstImageUrlIsActive }) => {
    return (
      <div className={styles["circle-icons-container"]}>
        <CircleIcon
          isSelected={firstImageUrlIsActive}
          toggleFirstImageUrlIsActive={toggleFirstImageUrlIsActive}
        />
        <CircleIcon
          isSelected={!firstImageUrlIsActive}
          toggleFirstImageUrlIsActive={toggleFirstImageUrlIsActive}
        />
      </div>
    );
  }
);
