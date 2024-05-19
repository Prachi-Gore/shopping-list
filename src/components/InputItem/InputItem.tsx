import { ToastContainer } from 'react-toastify';
import '../../App.css'
import 'react-toastify/dist/ReactToastify.css';
import { showSuccess } from '../utils/showToast';
import {   Dispatch, useState } from 'react';
import { Action } from '../../type';

export default function InputItem({dispatch}:{dispatch:Dispatch<Action>}) {
    const [item,setItem]=useState<string>('');
   
function handleAddItem(){
    if(item.length>0){
  dispatch({
      type:'add_item',
      itemName:item
    })
    showSuccess('Item Added Successfully')
    setItem('')
    }
   
}
  return (
    <div className="d-flex justify-content-center my-4   gx-1 container">
      <input type="text" placeholder="Add an Item..." className="p-2 input-item"
      value={item}
      onChange={(e)=>setItem(e.target.value)}
      />
      <button className="add-item-btn text-white  border-0" type="button" onClick={handleAddItem}>Add</button>
      <ToastContainer />
    </div>
  );
}
