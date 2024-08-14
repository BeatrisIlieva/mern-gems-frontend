import { useState, useEffect } from "react";

import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import { useService } from "../hooks/useService";

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

  return { email: userLoginDetails.email };
};
