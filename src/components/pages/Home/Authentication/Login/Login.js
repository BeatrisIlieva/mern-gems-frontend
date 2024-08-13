import { Header } from "../Header/Header";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import { LoginForm } from "./LoginForm/LoginForm";

export const Login = ({ switchPopupHandler, switchOptions }) => {
  return (
    <>
      <Header title={"Sign In to Shop"} />
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
