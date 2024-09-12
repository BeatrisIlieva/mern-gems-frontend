import { useLanguageContext } from "../../../contexts/LanguageContext";

import { LANGUAGES } from "../../../constants/languages";

import styles from "./SwitchLanguage.module.css";

export const SwitchLanguage = () => {
  const { updateLanguage } = useLanguageContext();

  return (
    <div className={styles["select-language"]}>
      <button onClick={() => updateLanguage(LANGUAGES[0])}>English</button>
      <button onClick={() => updateLanguage(LANGUAGES[1])}>Bulgarian</button>
    </div>
  );
};
