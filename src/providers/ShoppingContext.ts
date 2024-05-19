import { Dispatch, createContext } from "react";
import { Action, shoppingItemsType } from "../type";

export const ShoppingItemsContext =createContext<{shoppingItems:shoppingItemsType[]}>({
    shoppingItems:[]});
export const ShoppingDispatchContext =createContext<{dispatch:Dispatch<Action>}>({
    dispatch:():shoppingItemsType[]=> []
});

