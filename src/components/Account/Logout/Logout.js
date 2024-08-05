import { useNavigate } from "react-router-dom";
import { useService } from "../../../hooks/useService";
import { UnderlinedButton } from "../../UnderlinedButton/UnderlinedButton";

import { userLoginDetailsServiceFactory } from "../../../services/userLoginDetailsService";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

export const Logout = () => {
  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);
  const { userId, clearToken } = useAuthenticationContext();

  const navigate = useNavigate();

  const logoutHandler = async () => {
    await userLoginDetailsService.logout(userId);

    await clearToken();

    navigate("/");
  };

  return <UnderlinedButton title={"Logout"} callBackFunction={logoutHandler} />;
};
