import { useEffect, useState } from "react";

import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import { useService } from "./useService";

import { userCardDetailsServiceFactory } from "../services/userCardDetailsService";

export const useUserCardDetails = () => {
  const [userCardDetails, setUserCardDetails] = useState([]);

  const { userId } = useAuthenticationContext();

  const userCardDetailsService = useService(userCardDetailsServiceFactory);

  useEffect(() => {
    userCardDetailsService
      .getOne(userId)
      .then((data) => {
        setUserCardDetails(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userCardDetailsService, userId]);

  const updateUserCardDetails = async (data) => {
    await userCardDetailsService.update(userId, data);
  };

  return { userCardDetails, updateUserCardDetails };
};
