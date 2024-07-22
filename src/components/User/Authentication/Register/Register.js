import { PopupHeader } from "../PopupHeader/PopupHeader";
import { SwitchButton } from "../SwitchButton/SwitchButton";

export const Register = ({ switchPopupHandler, switchOptions }) => {
  return (
    <section>
      <PopupHeader title={"Become A Member"} />
      <SwitchButton
        text={"Not a member?"}
        title={"Sign Up"}
        switchPopupHandler={switchPopupHandler}
        option={switchOptions.Login}
      />
    </section>
  );
};
