import { useNavigate } from "react-router-dom";
import { useService } from "../../../hooks/useService";
import { UnderlinedButton } from "../../UnderlinedButton/UnderlinedButton";

import { userLoginDetailsServiceFactory } from "../../../services/userLoginDetailsService";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useBagContext } from "../../../contexts/BagContext";

export const Logout = () => {
  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);
  const { userId, clearToken } = useAuthenticationContext();
  const { clearShoppingBag } = useBagContext();

  const navigate = useNavigate();

  const logoutHandler = async () => {
    await userLoginDetailsService.logout(userId);

    await clearToken();

    await clearShoppingBag();

    navigate("/");
  };

  return <UnderlinedButton title={"Logout"} callBackFunction={logoutHandler} />;
};
