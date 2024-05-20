import { useReducer } from "react";
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import { itemReducer } from "../../reducer/itemReducer";
import { ShoppingItemsContext,ShoppingDispatchContext } from "../../providers/ShoppingContext";
import Footer from "../Footer/footer";
import Profile from "../Profile/Profile";

const ShoppingList = () => {
  const[shoppingItems,dispatch]=useReducer(itemReducer,[])
  // useReducer take initial state([]) and return updated state(shoppingItems)
  console.log('shoppingItems ',shoppingItems)
 
  return (
    <ShoppingItemsContext.Provider value={{shoppingItems}}>
      <ShoppingDispatchContext.Provider value={{dispatch}}>
    <div className="container">
      <Header />
      <InputItem
      />
      <ItemList
      />
      <Footer />
      <Profile />
    </div>
    </ShoppingDispatchContext.Provider>
    </ShoppingItemsContext.Provider>
  );
};

export default ShoppingList;
