import { NormalTitle } from "../../NormalTitle/NormalTitle";

export const LoginInformation = ({ userLoginDetails }) => {
  return (
    <NormalTitle
      title={`A confirmation email has been sent to: ${userLoginDetails.email}`}
      variant={"bolded"}
    />
  );
};
