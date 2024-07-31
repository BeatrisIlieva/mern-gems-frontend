import { useNavigate } from "react-router-dom";
import { useService } from "../../../hooks/useService";
import { UnderlinedButton } from "../../UnderlinedButton/UnderlinedButton";

import { userServiceFactory } from "../../../services/userService";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

const LogoutButtonTitle = "Logout";

export const Logout = ({ popupCloseHandler }) => {
  const userService = useService(userServiceFactory);
  const { clearToken } = useAuthenticationContext();

  const navigate = useNavigate();

  const logoutHandler = async () => {
    await userService.logout();

    await clearToken();

    popupCloseHandler();

    navigate("/");
  };

  return (
    <UnderlinedButton
      title={LogoutButtonTitle}
      callBackFunction={logoutHandler}
    />
  );
};
