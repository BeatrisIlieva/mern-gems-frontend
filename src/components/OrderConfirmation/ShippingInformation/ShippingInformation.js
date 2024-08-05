import { useState, useEffect } from "react";

import { useAuthenticationContext } from "../../../contexts/AuthenticationContext";

import { useService } from "../../../hooks/useService";
import { userShippingDetailsServiceFactory } from "../../../services/userShippingDetailsService";
import { XLargeTitle } from "../../XLargeTitle/XLargeTitle";

export const ShippingInformation = ({ userShippingDetails }) => {
  // const [userShippingDetails, setUserShippingDetails] = useState([]);

  // const { userId } = useAuthenticationContext();

  // const userShippingDetailsService = useService(
  //   userShippingDetailsServiceFactory
  // );

  // useEffect(() => {
  //   // toggleIsLoading();

  //   userShippingDetailsService
  //     .getOne(userId)
  //     .then((data) => {
  //       setUserShippingDetails(data);

  //       // toggleIsLoading();
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, [userShippingDetailsService, userId]);

  return (
    <XLargeTitle
      title={`Thank you for your purchase, ${userShippingDetails.firstName}!`}
    />
  );
};
