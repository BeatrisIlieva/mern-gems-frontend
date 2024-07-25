import { PopupHeader } from "../PopupHeader/PopupHeader";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import { RegisterForm } from "./RegisterForm/RegisterForm";

export const Register = ({ switchPopupHandler, switchOptions }) => {
  return (
    <>
      <PopupHeader title={"Become A Member"} />
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
