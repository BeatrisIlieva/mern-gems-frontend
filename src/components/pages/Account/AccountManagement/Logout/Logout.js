import { useNavigate } from "react-router-dom";

import { Button } from "../../../../reusable/Button/Button";

import { useAuthenticationContext } from "../../../../../contexts/AuthenticationContext";

import { useService } from "../../../../../hooks/useService";

import { userLoginDetailsServiceFactory } from "../../../../../services/userLoginDetailsService";

export const Logout = () => {
  const navigate = useNavigate();

  const { userId, clearToken } = useAuthenticationContext();

  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

  const logoutHandler = async () => {
    await userLoginDetailsService.logout(userId);

    await clearToken();

    navigate("/");
  };

  return (
    <Button
      title={"Logout"}
      callBackFunction={logoutHandler}
      variant={"underlined"}
    />
  );
};
