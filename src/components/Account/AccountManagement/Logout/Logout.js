import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useService } from "../../../../hooks/useService";
import { Button } from "../Button/Button";

import { userServiceFactory } from "../../../../services/userService";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

export const Logout = () => {
  const userService = useService(userServiceFactory);
  const { clearToken } = useAuthenticationContext();

  const navigate = useNavigate();

  const logoutHandler = async () => {
    await userService.logout();

    await clearToken();

    navigate("/");
  };

  return <Button title={"Logout"} callbackFunction={logoutHandler} />;
};
