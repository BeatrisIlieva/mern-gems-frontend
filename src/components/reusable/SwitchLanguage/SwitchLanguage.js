import { useState } from "react";

import { SelectedLanguage } from "./SelectedLanguage/SelectedLanguage";
import { Dropdown } from "./Dropdown/Dropdown";

import { useLanguageContext } from "../../../contexts/LanguageContext";

import { IMAGE_URLS } from "./constants/imageUrls";

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

  return (
    <section className={sectionStyles}>
      <SelectedLanguage
        updateIsTransitioningHandler={updateIsTransitioningHandler}
        displayDropdown={displayDropdown}
        isTransitioning={isTransitioning}
        selectedImage={selectedImage}
      />
      {displayDropdown && (
        <Dropdown
          isTransitioning={isTransitioning}
          language={language}
          languageChangeHandler={languageChangeHandler}
          variant={variant}
        />
      )}
    </section>
  );
};
