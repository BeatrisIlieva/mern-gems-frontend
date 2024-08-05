import { useState, useEffect } from "react";

import { useService } from "../../../hooks/useService";
import { userLoginDetailsServiceFactory } from "../../../services/userLoginDetailsService";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";
import { NormalTitle } from "../../NormalTitle/NormalTitle";

export const LoginInformation = ({ userLoginDetails}) => {
  // const [userLoginDetails, setUserLoginDetails] = useState([]);

  // const { userId } = useAuthenticationContext();

  // const userLoginDetailsService = useService(userLoginDetailsServiceFactory);

  // useEffect(() => {
  //   toggleIsLoading();
  //   userLoginDetailsService
  //     .getOne(userId)
  //     .then((data) => {
  //       setUserLoginDetails(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     })
  //     .finally(() => {
  //       toggleIsLoading();
  //     });
  // }, [userLoginDetailsService, userId, toggleIsLoading]);

  return (
    <NormalTitle
      title={`A confirmation email has been sent to: ${userLoginDetails.email}`}
      variant={"bolded"}
    />
  );
};
