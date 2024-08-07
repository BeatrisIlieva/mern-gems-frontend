import { Button } from "../Button/Button";
import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";

export const UpdateEmail = ({
  updateEmailClickHandler,
  displayUpdateEmail,
}) => {
  return (
    <>
      <Button
        title={"Update Email Address"}
        callBackFunction={updateEmailClickHandler}
      />
      {displayUpdateEmail && <UpdateEmailForm />}
    </>
  );
};
