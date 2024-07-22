import { PopupHeader } from "../PopupHeader/PopupHeader";
import { SwitchButton } from "../SwitchButton/SwitchButton";

export const Login = ({ switchPopupHandler, switchOptions }) => {
  return (
    <section>
      <PopupHeader title={"Sign In to Shop"} />
      <SwitchButton
        text={"Already a member?"}
        title={"Sign In"}
        switchPopupHandler={switchPopupHandler}
        option={switchOptions.Register}
      />
    </section>
  );
};
