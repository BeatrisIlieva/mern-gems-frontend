import { useState, memo } from "react";

import styles from "./Button.module.css";

export const Button = memo(
  ({ title, buttonIsDisabled, callBackFunction, variant, type, isLoading }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <button
        data-testid="button"
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {isLoading ? "Processing..." : title}
      </button>
    );
  }
);
