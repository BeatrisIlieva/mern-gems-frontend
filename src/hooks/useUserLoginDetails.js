import { useEffect, useState } from "react";

import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import { useService } from "./useService";

import { userLoginDetailsServiceFactory } from "../services/userLoginDetailsService";

export const useUserLoginDetails = () => {
  const [userLoginDetails, setUserLoginDetails] = useState([]);

  const { userId } = useAuthenticationContext();

  const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

  useEffect(() => {
    userLoginDetailsService
      .getOne(userId)
      .then((data) => {
        setUserLoginDetails(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userLoginDetailsService, userId]);

  const updateUserEmail = async (data) => {
    await userLoginDetailsService.updateEmail(userId, data);
  };

  const updateUserPassword = async (data) => {
    await userLoginDetailsService.updatePassword(userId, data);
  };

  return { userLoginDetails, updateUserEmail, updateUserPassword };
};
