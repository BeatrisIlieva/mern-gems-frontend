import { useState } from "react";

import { Button } from "../Button/Button";
import { UpdatePasswordForm } from "./UpdatePasswordForm/UpdatePasswordForm";

export const UpdatePassword = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const toggleDisplayForm = () => {
    setDisplayForm((displayForm) => !displayForm);
  };

  return (
    <>
      <Button title={"Change Password"} callBackFunction={toggleDisplayForm} />
      {displayForm && <UpdatePasswordForm />}
    </>
  );
};
