import { useJewelryItemContext } from "../../../../contexts/JewelryItemContext";

import { Paragraph } from "../../../Paragraph/Paragraph";

export const Description = () => {
  const { jewelry, categoryIsEarring } = useJewelryItemContext();

  let earringSize;

  if (categoryIsEarring) {
    earringSize = jewelry.sizes[0].measurement;
  }

  const text = earringSize
    ? `${jewelry.description}. ${earringSize}`
    : `${jewelry.description}.`;

  return <Paragraph text={text} />;
};
