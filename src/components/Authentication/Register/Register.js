import { PopupHeader } from "../PopupHeader/PopupHeader";
import { SwitchButton } from "../SwitchButton/SwitchButton";

export const Register = ({ switchPopupHandler, switchOptions }) => {
  return (
    <section>
      <PopupHeader title={"Become A Member"} />
      <SwitchButton
        text={"Already a member?"}
        title={"Sign In"}
        switchPopupHandler={switchPopupHandler}
        option={switchOptions.Login}
      />
    </section>
  );
};
