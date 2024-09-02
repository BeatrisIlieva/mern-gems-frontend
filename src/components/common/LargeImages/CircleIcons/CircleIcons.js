import { CircleIcon } from "./CircleIcon/CircleIcon";

import styles from "./CircleIcons.module.css";

export const CircleIcons = ({
  firstImageUrlIsActive,
  toggleFirstImageUrlIsActive,
  position
}) => {
  return (
    <div className={`${styles["circle-icons-container"]} ${styles[position]}`}>
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
