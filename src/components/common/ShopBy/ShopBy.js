import { Button } from "../../reusable/Button/Button";

export const ShopBy = ({ categoryTitle, buttonClickHandler }) => {
  return (
    <Button
      title={`Shop ${categoryTitle}`}
      variant={"underlined"}
      callBackFunction={buttonClickHandler}
    />
  );
};
