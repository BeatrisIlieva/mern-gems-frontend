import { useState, useEffect } from "react";

import { useService } from "../../../hooks/useService";
import { userLoginDetailsServiceFactory } from "../../../services/userLoginDetailsService";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";
import { NormalTitle } from "../../NormalTitle/NormalTitle";

export const LoginInformation = () => {
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

  return (
    <NormalTitle
      title={`A confirmation email has been sent to: ${userLoginDetails.email}`}
      variant={"bolded"}
    />
  );
};
