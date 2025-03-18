import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../../reusable/Button/Button";

import { useLanguageContext } from "../../../../../contexts/LanguageContext";
import { useAuthenticationContext } from "../../../../../contexts/AuthenticationContext";

import { useService } from "../../../../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../../../../services/userLoginDetailsService";

import { BUTTON_TITLE } from "./constants/languageRelated";

export const Logout = memo(() => {
  const { language } = useLanguageContext();

  const navigate = useNavigate();

  const { userId, clearToken } = useAuthenticationContext();

  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

  const logoutHandler = async () => {
    await userLoginDetailsService.logout(userId);

    clearToken();

    navigate("/");
  };

  const buttonTitle = BUTTON_TITLE[language];

  return (
    <Button
      title={buttonTitle}
      callBackFunction={logoutHandler}
      variant={"underlined"}
    />
  );
});
