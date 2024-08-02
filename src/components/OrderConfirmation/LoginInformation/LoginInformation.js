import { useState, useEffect } from "react";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useService } from "../../../hooks/useService";

import { userServiceFactory } from "../../../services/userService";

import { NormalTitle } from "../../NormalTitle/NormalTitle";

export const LoginInformation = () => {
  const { userId } = useAuthenticationContext();
  const userService = useService(userServiceFactory);
  const [userInformation, setUserInformation] = useState([]);

  useEffect(() => {
    userService
      .getUserLoginDetails(userId)
      .then((data) => {
        setUserInformation(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userService, userId]);

  return (
    <NormalTitle
      title={`A confirmation email has been sent to: ${userInformation.email}`}
      variant={"bolded"}
    />
  );
};
