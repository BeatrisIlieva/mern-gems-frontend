import { PopupHeader } from "../PopupHeader/PopupHeader";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import { LoginForm } from "./LoginForm/LoginForm.js/LoginForm";

export const Login = ({ switchPopupHandler, switchOptions }) => {
  return (
    <section>
      <PopupHeader title={"Sign In to Shop"} />
      <LoginForm />
      <SwitchButton
        text={"Not a member?"}
        title={"Sign Up"}
        switchPopupHandler={switchPopupHandler}
        option={switchOptions.Register}
      />
    </section>
  );
};
