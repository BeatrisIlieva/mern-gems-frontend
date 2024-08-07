import { Button } from "../Button/Button";
import { UpdatePasswordForm } from "./UpdatePasswordForm/UpdatePasswordForm";

export const UpdatePassword = ({
  updatePasswordClickHandler,
  displayUpdatePassword,
}) => {
  return (
    <>
      <Button
        title={"Change Password"}
        callBackFunction={updatePasswordClickHandler}
      />
      {displayUpdatePassword && <UpdatePasswordForm />}
    </>
  );
};
