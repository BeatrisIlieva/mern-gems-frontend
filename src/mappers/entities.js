export const ENTITIES_MAPPER = {
  bracelets: { entityId: 1, fetchFunction: "getAllByCategory" },

  earrings: { entityId: 2, fetchFunction: "getAllByCategory" },

  necklaces: { entityId: 3, fetchFunction: "getAllByCategory" },

  rings: { entityId: 4, fetchFunction: "getAllByCategory" },

  "diamond-loop": {
    entityId: 1,
    fetchFunction: "getAllByCollection",
  },

  "sparkling-cluster": {
    entityId: 2,
    fetchFunction: "getAllByCollection",
  },

  "forget-me-not": {
    entityId: 3,
    fetchFunction: "getAllByCollection",
  },

  sunflower: {
    entityId: 4,
    fetchFunction: "getAllByCollection",
  },
};
