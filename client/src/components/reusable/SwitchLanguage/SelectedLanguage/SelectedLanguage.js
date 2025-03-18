import { memo } from "react";

import { Image } from "../reusable/Image/Image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

import styles from "./SelectedLanguage.module.css";

export const SelectedLanguage = memo(
  ({
    updateIsTransitioningHandler,
    displayDropdown,
    isTransitioning,
    selectedImage,
  }) => {
    return (
      <div className={styles["wrapper"]}>
        <Image
          isTransitioning={isTransitioning}
          clickHandler={updateIsTransitioningHandler}
          imageUrl={selectedImage}
          altText={"flag"}
        />
        <FontAwesomeIcon
          data-testid="caret-icon"
          icon={displayDropdown ? faCaretUp : faCaretDown}
          className={`${styles["icon"]} ${
            isTransitioning ? styles["slide-out"] : styles["slide-in"]
          }`}
          onClick={updateIsTransitioningHandler}
        />
      </div>
    );
  }
);
