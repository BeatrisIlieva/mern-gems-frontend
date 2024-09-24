import { memo } from "react";

import { Button } from "../Button/Button";

import { useLanguageContext } from "../../../contexts/LanguageContext";

import { BUTTON_TITLES_BY_LANGUAGE } from "./constants/languageRelated";

import { CATEGORY_TITLES_BY_LANGUAGE } from "../../../constants/languageRelated";

export const ShopBy = memo(({ categoryTitle, buttonClickHandler }) => {
  const { language } = useLanguageContext();

  return (
    <Button
      title={`${BUTTON_TITLES_BY_LANGUAGE[language]}${CATEGORY_TITLES_BY_LANGUAGE[categoryTitle][language]}`}
      variant={"underlined"}
      callBackFunction={buttonClickHandler}
    />
  );
});
