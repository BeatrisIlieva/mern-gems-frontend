import { CircleIcon } from "./CircleIcon/CircleIcon";

import styles from "./CircleIcons.module.css";

export const CircleIcons = ({
  firstImageUrlIsActive,
  toggleFirstImageUrlIsActive,
  circleIconsPosition
}) => {
  return (
    <div className={`${styles["circle-icons-container"]} ${styles[circleIconsPosition]}`}>
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
};
