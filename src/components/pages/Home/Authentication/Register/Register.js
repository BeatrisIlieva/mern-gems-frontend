import { LargeTitle } from "../../../../reusable/LargeTitle/LargeTitle";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import { RegisterForm } from "./RegisterForm/RegisterForm";

export const Register = ({
  updateIsTransitioningHandler,
  closeHandler,
  switchOptions,
}) => {
  return (
    <>
      <LargeTitle title={"Become A Member"} textAlign={"align-center"} />
      <RegisterForm closeHandler={closeHandler} />
      <SwitchButton
        text={"Already a member?"}
        title={"Sign In"}
        switchPopupHandler={updateIsTransitioningHandler}
        option={switchOptions.Login}
      />
    </>
  );
};
