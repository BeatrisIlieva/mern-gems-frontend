import { useState } from "react";

import { Button } from "../Button/Button";

export const UpdateEmail = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const toggleDisplayForm = () => {
    setDisplayForm((displayForm) => !displayForm);
  };

  return (
    <>
      {displayForm && (
        <Button
          title={"Update Email Address"}
          callBackFunction={toggleDisplayForm}
        />
      )}
    </>
  );
};
