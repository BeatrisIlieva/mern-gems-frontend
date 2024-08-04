import { useEffect, useState } from "react";

import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import { useService } from "./useService";

import { userShippingDetailsServiceFactory } from "../services/userShippingDetailsService";

export const useUserShippingDetails = () => {
  const [userShippingDetails, setUserShippingDetails] = useState([]);

  const { userId } = useAuthenticationContext();

  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  useEffect(() => {
    userShippingDetailsService
      .getOne(userId)
      .then((data) => {
        setUserShippingDetails(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userShippingDetailsService, userId]);

  const updateUserShippingDetails = async (data) => {
    await userShippingDetailsService.update(userId, data);
  };

  return { userShippingDetails, updateUserShippingDetails };
};
