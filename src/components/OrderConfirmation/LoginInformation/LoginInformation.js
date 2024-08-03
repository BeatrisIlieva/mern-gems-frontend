import { NormalTitle } from "../../NormalTitle/NormalTitle";

import { useLoginInformation } from "../../../hooks/useLoginInformation";

export const LoginInformation = () => {
  const { userInformation } = useLoginInformation();

  return (
    <NormalTitle
      title={`A confirmation email has been sent to: ${userInformation.email}`}
      variant={"bolded"}
    />
  );
};
