import { NormalTitle } from "../../NormalTitle/NormalTitle";

import { useLoginInformation } from "../../../hooks/useUserLoginDetails";

export const LoginInformation = () => {
  const { userInformation } = useLoginInformation();

  return (
    <NormalTitle
      title={`A confirmation email has been sent to: ${userInformation.email}`}
      variant={"bolded"}
    />
  );
};
