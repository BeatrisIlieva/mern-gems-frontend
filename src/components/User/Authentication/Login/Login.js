import { SwitchButton } from "../SwitchButton/SwitchButton";

export const Login = ({ switchPopupHandler, switchOptions }) => {
  return (
    <SwitchButton
      text={"Already a member?"}
      title={"Sign In"}
      switchPopupHandler={switchPopupHandler}
      option={switchOptions.Register}
    />
  );
};
