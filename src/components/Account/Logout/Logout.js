import { useNavigate } from "react-router-dom";
import { useService } from "../../../hooks/useService";
import { UnderlinedButton } from "../../UnderlinedButton/UnderlinedButton";

import { userLoginDetailsServiceFactory } from "../../../services/userLoginDetailsService";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

const LogoutButtonTitle = "Logout";

export const Logout = () => {
  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);
  const { clearToken } = useAuthenticationContext();

  const navigate = useNavigate();

  const logoutHandler = async () => {
    await userLoginDetailsService.logout();

    await clearToken();

    navigate("/");
  };

  return (
    <UnderlinedButton
      title={LogoutButtonTitle}
      callBackFunction={logoutHandler}
    />
  );
};
