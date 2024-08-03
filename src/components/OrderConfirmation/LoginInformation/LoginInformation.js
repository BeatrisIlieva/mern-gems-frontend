import { NormalTitle } from "../../NormalTitle/NormalTitle";

import { useUserLoginDetails } from "../../../hooks/useUserLoginDetails";

export const LoginInformation = () => {
  const { userLoginDetails } = useUserLoginDetails();

  return (
    <NormalTitle
      title={`A confirmation email has been sent to: ${userLoginDetails.email}`}
      variant={"bolded"}
    />
  );
};
