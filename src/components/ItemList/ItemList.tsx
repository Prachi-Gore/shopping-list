import { shoppingItemsType } from "../../type"
import Item from "../Item/Item"


const ItemList = ({shoppingItems,handleAddQuantity,handleRemoveQuantity}:{shoppingItems:shoppingItemsType[],handleAddQuantity:(item:shoppingItemsType)=>void,handleRemoveQuantity:(item:shoppingItemsType)=>void}) => {
  return (
    <div className="container">
      {shoppingItems?.map(item=>{
        return <Item key={item.id} item={item} handleAddQuantity={handleAddQuantity} handleRemoveQuantity={handleRemoveQuantity}/>
      })}
    </div>
  )
}

export default ItemList
