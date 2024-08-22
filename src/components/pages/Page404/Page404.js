import { InfoMessage } from "../../reusable/InfoMessage/InfoMessage";
import { Collection } from "../../common/Collection/Collection";

export const Page404 = () => {
  return (
    <>
      <InfoMessage
        title={"Sorry, we can’t locate that page."}
        subtitle={"You can continue shopping by exploring the links below"}
      />
      <Collection/>
    </>
  );
};
