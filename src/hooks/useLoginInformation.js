import { useEffect, useState } from "react";

import { useAuthenticationContext } from "../contexts/AuthenticationContext";

import { useService } from "./useService";

import { userServiceFactory } from "../services/userService";

export const useLoginInformation = () => {
  const [userInformation, setUserInformation] = useState([]);

  const { userId } = useAuthenticationContext();

  const userService = useService(userServiceFactory);

  useEffect(() => {
    userService
      .getUserLoginDetails(userId)
      .then((data) => {
        setUserInformation(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return { userInformation };
};
