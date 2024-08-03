import { useEffect, useState } from "react";

import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import { useService } from "./useService";

import { userServiceFactory } from "../services/userService";

export const useUserShippingDetails = () => {
  const [userShippingDetails, setUserShippingDetails] = useState([]);

  const { userId } = useAuthenticationContext();

  const userService = useService(userServiceFactory);

  useEffect(() => {
    userService
      .getUserShippingDetails(userId)
      .then((data) => {
        setUserShippingDetails(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userService, userId]);

  return { userShippingDetails };
};
