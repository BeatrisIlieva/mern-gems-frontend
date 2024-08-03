import { useEffect, useState } from "react";

import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import { useService } from "./useService";

import { userServiceFactory } from "../services/userService";

export const useUserLoginDetails = () => {
  const [userLoginDetails, setUserLoginDetails] = useState([]);

  const { userId } = useAuthenticationContext();

  const userService = useService(userServiceFactory);

  useEffect(() => {
    userService
      .getUserLoginDetails(userId)
      .then((data) => {
        setUserLoginDetails(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userService, userId]);

  return { userLoginDetails };
};
