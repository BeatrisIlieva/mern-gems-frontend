import { useState, useEffect } from "react";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useService } from "../../../hooks/useService";

import { userServiceFactory } from "../../../services/userService";

import { XLargeTitle } from "../../XLargeTitle/XLargeTitle";

export const ShippingInformation = () => {
  const { userId } = useAuthenticationContext();
  const userService = useService(userServiceFactory);
  const [userInformation, setUserInformation] = useState([]);

  useEffect(() => {
    userService
      .getUserShippingDetails(userId)
      .then((data) => {
        setUserInformation(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [userService, userId]);

  return (
    <XLargeTitle
      title={`Thank you for your purchase, ${userInformation.firstName}!`}
    />
  );
};
