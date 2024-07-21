import { JewelryList } from "../JewelryList/JewelryList";
import * as jewelryByCategoryService from "../../services/jewelryByCategoryService";
import { CATEGORIES_BY_ID } from "../../mappers/categoriesById";

export const JewelryByCategoryList = () => {
  return (
    <JewelryList
      mapper={CATEGORIES_BY_ID}
      fetchService={jewelryByCategoryService.getAll}
    />
  );
};
