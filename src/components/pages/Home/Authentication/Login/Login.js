import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import { LoginForm } from "./LoginForm/LoginForm";

export const Login = ({ updateIsTransitioningHandler, closeHandler, switchOptions }) => {
  return (
    <>
      <LargeTitle title={"Sign In to Shop"} textAlign={"align-center"} />
      <LoginForm closeHandler={closeHandler} />
      <SwitchButton
        text={"Not a member?"}
        title={"Sign Up"}
        switchPopupHandler={updateIsTransitioningHandler}
        option={switchOptions.Register}
      />
    </>
  );
};
