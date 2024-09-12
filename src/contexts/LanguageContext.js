import { useState, createContext, useContext, useMemo } from "react";

import { LANGUAGES } from "../constants/languages";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(LANGUAGES[0]);

  const updateLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const context = useMemo(
    () => ({
      language,
      updateLanguage,
    }),
    [language, updateLanguage]
  );

  return (
    <LanguageContext.Provider value={context}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);

  return context;
};
