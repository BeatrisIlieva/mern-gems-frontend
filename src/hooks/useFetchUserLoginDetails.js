import { useEffect, useState } from "react";

import { useService } from "./useService";

import { userLoginDetailsServiceFactory } from "../services/userLoginDetailsService";

export const useFetchUserLoginDetails = (userId) => {
  const [userLoginDetails, setUserLoginDetails] = useState([]);
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

  return userLoginDetails;
};
