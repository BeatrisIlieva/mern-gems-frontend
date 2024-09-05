import { InfoMessage } from "../../../../reusable/InfoMessage/InfoMessage";
import { CardSlider } from "../../../../common/CardSlider/CardSlider";

export const EmptyMiniBag = () => {
  return (
    <>
      <InfoMessage title={"Your Shopping Bag Is Empty"} />
      <CardSlider/>
    </>
  );
};
