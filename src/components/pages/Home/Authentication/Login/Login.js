import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";
import { SwitchButton } from "../reusable/SwitchButton/SwitchButton";
import { LoginForm } from "./LoginForm/LoginForm";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";

import {
  TITLE_BY_LANGUAGE,
  HELPER_TEXT_BY_LANGUAGE,
  BUTTON_TITLE_BY_LANGUAGE,
} from "./constants/languageRelated";

export const Login = ({
  updateIsTransitioningHandler,
  closeHandler,
  switchOptions,
}) => {
  const { language } = useLanguageContext();

  return (
    <>
      <LargeTitle
        title={TITLE_BY_LANGUAGE[language]}
        textAlign={"align-center"}
      />
      <LoginForm closeHandler={closeHandler} />
      <SwitchButton
        text={HELPER_TEXT_BY_LANGUAGE[language]}
        title={BUTTON_TITLE_BY_LANGUAGE[language]}
        switchPopupHandler={updateIsTransitioningHandler}
        option={switchOptions.Register}
      />
    </>
  );
};
