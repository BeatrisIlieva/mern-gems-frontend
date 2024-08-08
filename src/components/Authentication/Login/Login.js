import { Popup } from "../Popup/Popup";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import { LoginForm } from "./LoginForm/LoginForm";

export const Login = ({ switchPopupHandler, switchOptions }) => {
  return (
    // <Popup title={"Sign In to Shop"}>
<>
<LoginForm />
      <SwitchButton
        text={"Not a member?"}
        title={"Sign Up"}
        switchPopupHandler={switchPopupHandler}
        option={switchOptions.Register}
      />
</>
    // </Popup>
  );
};
