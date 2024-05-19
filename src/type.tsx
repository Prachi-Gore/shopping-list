export type shoppingItemsType={
    id:string|number,
    name:string,
    quantity:number
}

export type Action={
    type: 'add_item'; itemName: string;
}|{  type: 'add_quantity'|'remove_quantity'; itemId: number | string }