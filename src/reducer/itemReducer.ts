import { v4 as uuidv4 } from "uuid";
import { Action, shoppingItemsType } from "../type";

export function itemReducer(
  shoppingItems: shoppingItemsType[],
  action: Action
) {
  switch (action.type) {
    case "add_item":
      return [
        ...shoppingItems,
        {
          id: uuidv4(),
          name: action.itemName,
          quantity: 1,
        },
      ];
    case "add_quantity": {
      const newShoppingItems = shoppingItems?.map((addeditem) => {
        if (action.itemId === addeditem.id) {
          return { ...addeditem, quantity: addeditem.quantity + 1 };
        }
        return addeditem;
      });
      // show only those items for which quantity is > 0
      return newShoppingItems?.filter((item) => item.quantity > 0);
    }
    case "remove_quantity": {
      const newShoppingItems = shoppingItems?.map((addeditem) => {
        if (action?.itemId === addeditem.id) {
          return { ...addeditem, quantity: addeditem.quantity - 1 };
        }
        return addeditem;
      });
      // show only those items for which quantity is > 0
      return newShoppingItems?.filter((item) => item.quantity > 0);
    }
    default:
      return [];
  }
}
