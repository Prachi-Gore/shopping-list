import subtract from "../../assets/subtract.png";
import addition from "../../assets/addition.png";
import { shoppingItemsType } from "../../type";
import { showError } from "../utils/showToast";

const Item = ({
  item,
  handleAddQuantity,
  handleRemoveQuantity,
}: {
  item: shoppingItemsType;
  handleAddQuantity: (item: shoppingItemsType) => void;
  handleRemoveQuantity: (item: shoppingItemsType) => void;
}) => {
  return (
    <div className="container custom-border-bottom py-2 d-flex justify-content-between px-4 text-xl">
      <div>{item.name}</div>
      <div className="">
        <span className="mx-2"> {item?.quantity}</span>
        {/* <span ></span> */}
        <img
          role="button"
          src={subtract}
          className="mx-1"
          onClick={() => {
if(item.quantity==1) showError(`${item?.name} removed from shopping list`)
            handleRemoveQuantity(item)
          }}
        />
        <img
          role="button"
          src={addition}
          className="mx-1"
          onClick={() => handleAddQuantity(item)}
        />
      </div>
    </div>
  );
};

export default Item;
