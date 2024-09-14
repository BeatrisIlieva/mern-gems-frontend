import { useLanguageContext } from "../../../contexts/LanguageContext";

import { IMAGE_URLS } from "./constsnts/imageUrls";

import styles from "./FlagIcon.module.css";

export const FlagIcon = () => {
  const { language, updateLanguage } = useLanguageContext();

  const [selectedImage, setSelectedImage] = useState(IMAGE_URLS[language]);

  const [displayDropdown, setDisplayDropdown] = useState(false);

  const languageChangeHandler = (lang) => {
    setSelectedImage(lang);

    updateLanguage(lang);

    setDisplayDropdown(false);
  };

  return (
    <section className={styles["languages"]}>
      <button className={styles["button"]} onClick={setDisplayDropdown(true)}>
        {selectedImage}
      </button>
      {displayDropdown && (
        <div className={styles["dropdown"]}>
          {Object.keys(IMAGE_URLS)
            .filter((lang) => lang !== selectedImage)
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
                {lang}
              </div>
            ))}
        </div>
      )}
    </section>
  );
};
