import * as jewelryByCategoryService from "../services/jewelryByCategoryService";
import * as jewelryByCollectionService from "../services/jewelryByCollectionService";

export const ENTITIES_MAPPER = {
  bracelets: { entityId: 1, fetchFunction: jewelryByCategoryService.getAll },
  earrings: { entityId: 2, fetchFunction: jewelryByCategoryService.getAll },
  necklaces: { entityId: 3, fetchFunction: jewelryByCategoryService.getAll },
  rings: { entityId: 4, fetchFunction: jewelryByCategoryService.getAll },
  "diamond-loop": {
    entityId: 1,
    fetchFunction: jewelryByCollectionService.getAll,
  },
  "sparkling-cluster": {
    entityId: 2,
    fetchFunction: jewelryByCollectionService.getAll,
  },
  "forget-me-not": {
    entityId: 3,
    fetchFunction: jewelryByCollectionService.getAll,
  },
  sunflower: { entityId: 4, fetchFunction: jewelryByCollectionService.getAll },
};
