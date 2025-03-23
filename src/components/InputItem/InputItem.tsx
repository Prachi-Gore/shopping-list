import { ToastContainer } from 'react-toastify';
import '../../App.css'
import 'react-toastify/dist/ReactToastify.css';
import { showSuccess } from '../utils/showToast';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { ShoppingDispatchContext } from '../../providers/ShoppingContext';


type inputItem={
  item:string
}
export default function InputItem() {
    const {dispatch}=useContext(ShoppingDispatchContext);
    const { register, handleSubmit , formState: { errors },reset} = useForm<inputItem>()
   
function handleAddItem(item:string){
  dispatch({
      type:'add_item',
      itemName:item
    })
    showSuccess('Item Added Successfully')
}
const handleFormSubmit=(data:{item:string})=>{
  handleAddItem(data.item);
  reset();
}
  return (
    <>
    <form 
    onSubmit={handleSubmit(handleFormSubmit)}
    className="d-flex justify-content-center my-4 gx-1 container">
      <input type="text" placeholder="Add an Item..." className="p-2 input-item"
      {...register("item", { required: true,minLength:2 ,pattern:/^[A-Za-z]+( [A-Za-z]+)*$/
})}
      name='item'
      aria-invalid={errors.item ? "true" : "false"}
      />
      <button type="submit" className="add-item-btn text-white  border-0"  >Add</button>
     
      <ToastContainer />
    </form>
     {errors.item?.type === "required" && (
      <p className='text-danger text-center' role="alert">Please Enter Item</p>
    )}
     {errors.item?.type === "minLength" && (
      <p className='text-danger text-center' role="alert">Item name should contain atleast two characters</p>
    )}
     {errors.item?.type === "pattern" && (
      <p className='text-danger text-center' role="alert">This is not proper item name</p>
    )}
    </>
  );
}
