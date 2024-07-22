import { SwitchButton } from "../SwitchButton/SwitchButton";

export const Register = ({ switchPopupHandler, switchOptions }) => {
  return (
    <SwitchButton
      text={"Not a member?"}
      title={"Sign Up"}
      switchPopupHandler={switchPopupHandler}
      option={switchOptions.Login}
    />
  );
};
