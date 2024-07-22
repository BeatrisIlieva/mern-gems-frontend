import { PopupHeader } from "../PopupHeader/PopupHeader";
import { SwitchButton } from "../SwitchButton/SwitchButton";

export const Login = ({ switchPopupHandler, switchOptions }) => {
  return (
    <section>
      <PopupHeader title={"Sign In to Shop"} />
      <SwitchButton
        text={"Not a member?"}
        title={"Sign Up"}
        switchPopupHandler={switchPopupHandler}
        option={switchOptions.Register}
      />
    </section>
  );
};
