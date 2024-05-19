import { useReducer } from "react";
import { shoppingItemsType } from "../../type";
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import { itemReducer } from "../../reducer/itemReducer";

const ShoppingList = () => {
  const[shoppingItems,dispatch]=useReducer(itemReducer,[])
  // useReducer take initial state([]) and return updated state(shoppingItems)
  console.log('shoppingItems ',shoppingItems)
 
  function handleAddQuantity(id:string|number) {
  dispatch({
    type:"add_quantity",
    itemId:id
  })
  }

  function handleRemoveQuantity(item: shoppingItemsType) {
    if(item.quantity>0){
      dispatch({
        type:"remove_quantity",
        itemId:item.id
      })
  }
}
  return (
    <div className="container">
      <Header />
      <InputItem
        dispatch={dispatch}
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
