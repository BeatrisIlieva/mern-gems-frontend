import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import { RegisterForm } from "./RegisterForm/RegisterForm";

export const Register = ({ switchPopupHandler, switchOptions }) => {
  return (
    <>
      <LargeTitle title={"Become A Member"} textAlign={"align-center"} />
      <RegisterForm />
      <SwitchButton
        text={"Already a member?"}
        title={"Sign In"}
        switchPopupHandler={switchPopupHandler}
        option={switchOptions.Login}
      />
    </>
  );
};
