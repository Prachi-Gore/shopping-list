import { useState } from "react";
import { shoppingItemsType } from "../../type";
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";

// const shoppingItems:shoppingItemsType[]=[{
//     id:1,name:"aaa",quantity:2
// },{
//     id:2,name:"bbbbb",quantity:2
// }]
const ShoppingList = () => {
  const [shoppingItems, setShoppingItems] = useState<shoppingItemsType[]>([]);
  function handleAddQuantity(item: shoppingItemsType) {
    const newShoppingItems = shoppingItems?.map((addeditem) => {
      if (item.id === addeditem.id) {
        return { ...addeditem, quantity: item.quantity + 1 };
      }
      return addeditem
    });
   // show only those items for which quantity is > 0
   setShoppingItems(newShoppingItems?.filter(item=>item.quantity>0));
  }

  function handleRemoveQuantity(item: shoppingItemsType) {
    if(item.quantity>0){
    const newShoppingItems = shoppingItems?.map((addeditem) => {
      if (item?.id === addeditem.id) {
        return { ...addeditem, quantity: item.quantity - 1 };
      }
      return addeditem
    });
    // show only those items for which quantity is > 0
    setShoppingItems(newShoppingItems?.filter(item=>item.quantity>0));
  }
}
  return (
    <div className="container">
      <Header />
      <InputItem
        shoppingItems={shoppingItems}
        setShoppingItems={setShoppingItems}
      />
      <ItemList
        shoppingItems={shoppingItems}
        handleAddQuantity={handleAddQuantity}
        handleRemoveQuantity={handleRemoveQuantity}
      />
    </div>
  );
};

export default ShoppingList;
