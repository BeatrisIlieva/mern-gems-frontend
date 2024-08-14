import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import { LoginForm } from "./LoginForm/LoginForm";

export const Login = ({ switchPopupHandler, switchOptions }) => {
  return (
    <>
      <LargeTitle title={"Sign In to Shop"} textAlign={"align-center"}/>
      <LoginForm />
      <SwitchButton
        text={"Not a member?"}
        title={"Sign Up"}
        switchPopupHandler={switchPopupHandler}
        option={switchOptions.Register}
      />
    </>
  );
};
