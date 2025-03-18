import { memo } from "react";

import { Image } from "../reusable/Image/Image";

import { IMAGE_URLS } from "../constants/imageUrls";

import styles from "./Dropdown.module.css";

export const Dropdown = memo(
  ({ isTransitioning, language, languageChangeHandler, variant }) => {
    const dropdownStyles =
      variant === "to-the-bottom"
        ? `${styles["dropdown"]} ${styles[variant]}`
        : `${styles["dropdown"]}`;

    return (
      <div
        data-testid="dropdown"
        className={`${dropdownStyles} ${
          isTransitioning ? styles["slide-out"] : styles["slide-in"]
        }`}
      >
        {Object.keys(IMAGE_URLS)
          .filter((lang) => lang !== language)
          .map((lang) => (
            <Image
              isTransitioning={isTransitioning}
              clickHandler={() => languageChangeHandler(lang)}
              imageUrl={IMAGE_URLS[lang]}
              altText={`${lang} flag`}
            />
          ))}
      </div>
    );
  }
);
