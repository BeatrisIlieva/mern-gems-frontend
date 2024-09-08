import { memo } from "react";

import { Button } from "../../reusable/Button/Button";

export const ShopBy = memo(({ categoryTitle, buttonClickHandler }) => {
  return (
    <Button
      title={`Shop ${categoryTitle}`}
      variant={"underlined"}
      callBackFunction={buttonClickHandler}
    />
  );
});
