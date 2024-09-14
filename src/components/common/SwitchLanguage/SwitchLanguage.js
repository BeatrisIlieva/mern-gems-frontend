import { useState } from "react";

import { useLanguageContext } from "../../../contexts/LanguageContext";

import { IMAGE_URLS } from "./constsnts/imageUrls";

import styles from "./SwitchLanguage.module.css";

export const SwitchLanguage = ({ variant }) => {
  const { language, updateLanguage } = useLanguageContext();

  const [selectedImage, setSelectedImage] = useState(IMAGE_URLS[language]);

  const [displayDropdown, setDisplayDropdown] = useState(false);

  const toggleDisplayDropdown = () => {
    setDisplayDropdown((displayDropdown) => !displayDropdown);
  };

  const languageChangeHandler = (lang) => {
    setSelectedImage(IMAGE_URLS[lang]);

    updateLanguage(lang);

    setDisplayDropdown(false);
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
      <div className={styles["thumbnail"]} onClick={toggleDisplayDropdown}>
        <img className={styles["image"]} src={selectedImage} alt="flag" />
      </div>
      {displayDropdown && (
        <div className={dropdownStyles}>
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
