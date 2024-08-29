import { useState } from "react";

import styles from "./Button.module.css";

export const Button = ({
  title,
  buttonIsDisabled,
  callBackFunction,
  variant,
  type,
  isLoading, 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleIsHovered = () => {
    setIsHovered((isHovered) => !isHovered);
  };

  return (
    <button
      type={type}
      className={
        !buttonIsDisabled && !isLoading
          ? `${styles["button"]} ${styles[variant]} ${
              isHovered ? styles["hovered"] : ""
            }`.trim()
          : `${styles["button"]} ${styles[variant]} ${styles["disabled"]}`
      }
      disabled={buttonIsDisabled}
      onClick={callBackFunction}
      onMouseEnter={toggleIsHovered}
      onMouseLeave={toggleIsHovered}
      onTouchStart={toggleIsHovered}
      onTouchEnd={toggleIsHovered}
    >
      {isLoading ? "Processing..." : title}
    </button>
  );
};
