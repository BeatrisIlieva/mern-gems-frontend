import { useUserLoginDetails } from "../../hooks/useUserLoginDetails";

import { NormalTitle } from "../NormalTitle/NormalTitle";

export const UserEmail = () => {
  const { userLoginDetails } = useUserLoginDetails();

  return <NormalTitle title={userLoginDetails.email} variant={"regular"} />;
};
