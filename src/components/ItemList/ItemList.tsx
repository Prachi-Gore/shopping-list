import { useContext } from "react"
import { shoppingItemsType } from "../../type"
import Item from "../Item/Item"
import { ShoppingDispatchContext, ShoppingItemsContext } from "../../providers/ShoppingContext";


const ItemList = () => {
  const {shoppingItems}=useContext(ShoppingItemsContext);
  const {dispatch}=useContext(ShoppingDispatchContext);
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
      {shoppingItems?.map(item=>{
        return <Item key={item.id} item={item} handleAddQuantity={handleAddQuantity} handleRemoveQuantity={handleRemoveQuantity}/>
      })}
    </div>
  )
}

export default ItemList
