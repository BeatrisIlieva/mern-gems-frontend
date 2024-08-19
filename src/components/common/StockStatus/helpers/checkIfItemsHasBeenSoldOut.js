export const checkIfItemsHasBeenSoldOut = (item) => {
  return item.inventories.every((inventory) => inventory.quantity === 0);
};
