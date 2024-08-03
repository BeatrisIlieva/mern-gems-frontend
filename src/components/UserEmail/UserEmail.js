import { useLoginInformation } from "../../hooks/useUserLoginDetails";

import { NormalTitle } from "../NormalTitle/NormalTitle";

export const UserEmail = () => {
  const { userInformation } = useLoginInformation();

  return <NormalTitle title={userInformation.email} variant={"regular"} />;
};
