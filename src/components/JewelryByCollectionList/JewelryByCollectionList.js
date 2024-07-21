import { JewelryList } from "../JewelryList/JewelryList";
import * as jewelryByCollectionService from "../../services/jewelryByCollectionService";
import { COLLECTIONS_BY_ID } from "../../mappers/collectionsById";

export const JewelryByCollectionList = () => {
  return (
    <JewelryList
      mapper={COLLECTIONS_BY_ID}
      fetchService={jewelryByCollectionService.getAll}
    />
  );
};
