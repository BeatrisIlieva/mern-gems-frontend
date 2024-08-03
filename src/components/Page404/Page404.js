import { Collection } from "../Collection/Collection";
import { InfoMessage } from "../InfoMessage/InfoMessage";

export const Page404 = () => {
  return (
    <>
      <InfoMessage
        title={"Sorry, we can’t locate that page."}
        subtitle={"You can continue shopping by exploring the links below"}
      />
      <Collection />
    </>
  );
};
