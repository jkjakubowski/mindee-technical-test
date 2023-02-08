import { ItemProps } from "../types/item-types";

export const removeItemWithId = (items: ItemProps[], itemId: number) => {
  const itemWithId = items.findIndex((item: ItemProps) => item.id === itemId);

  if (itemWithId > -1) {
    items.splice(itemWithId, 1);
  }

  const cleanItemsList = [...items]

  return cleanItemsList;
};
