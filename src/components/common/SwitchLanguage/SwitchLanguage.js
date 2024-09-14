import { useState } from "react";

import { useLanguageContext } from "../../../contexts/LanguageContext";

import { IMAGE_URLS } from "./constsnts/imageUrls";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./SwitchLanguage.module.css";

export const SwitchLanguage = ({ variant }) => {
  const { language, updateLanguage } = useLanguageContext();

  const [selectedImage, setSelectedImage] = useState(IMAGE_URLS[language]);

  const [displayDropdown, setDisplayDropdown] = useState(false);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleDisplayDropdown = () => {
    setDisplayDropdown((displayDropdown) => !displayDropdown);
  };

  const languageChangeHandler = (lang) => {
    setIsTransitioning(true);

    setTimeout(() => {
      setSelectedImage(IMAGE_URLS[lang]);
      updateLanguage(lang);
      setDisplayDropdown(false);
      setIsTransitioning(false);
    }, 400);
  };

  const updateIsTransitioningHandler = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      toggleDisplayDropdown();
      setIsTransitioning(false);
    }, 400);
  };

  const sectionStyles =
    variant === "to-the-left"
      ? `${styles["switch-language"]} ${styles[variant]}`
      : `${styles["switch-language"]}`;

  const dropdownStyles =
    variant === "to-the-bottom"
      ? `${styles["dropdown"]} ${styles[variant]}`
      : `${styles["dropdown"]}`;

  return (
    <section className={sectionStyles}>
      <div className={styles["wrapper"]}>
        {" "}
        <div
          className={`${styles["thumbnail"]} ${
            isTransitioning ? styles["slide-out"] : styles["slide-in"]
          }`}
          onClick={updateIsTransitioningHandler}
        >
          <img className={styles["image"]} src={selectedImage} alt="flag" />
        </div>
        <FontAwesomeIcon
          icon={faCaretDown}
          className={styles["icon"]}
          onClick={updateIsTransitioningHandler}
        />
      </div>
      {displayDropdown && (
        <div
          className={`${dropdownStyles} ${
            isTransitioning ? styles["slide-out"] : styles["slide-in"]
          }`}
        >
          {Object.keys(IMAGE_URLS)
            .filter((lang) => lang !== language)
            .map((lang) => (
              <div
                key={lang}
                className={styles["thumbnail"]}
                onClick={() => languageChangeHandler(lang)}
              >
                <img
                  className={styles["image"]}
                  src={IMAGE_URLS[lang]}
                  alt={`${lang} flag`}
                />
              </div>
            ))}
        </div>
      )}
    </section>
  );
};
