import { useState } from "react";

import { Button } from "../Button/Button";
import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";

export const UpdateEmail = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const toggleDisplayForm = () => {
    setDisplayForm((displayForm) => !displayForm);
  };

  return (
    <>
      <Button
        title={"Update Email Address"}
        callBackFunction={toggleDisplayForm}
      />
      {displayForm && <UpdateEmailForm />}
    </>
  );
};
