import React from "react";

export const CartStore = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item: any)=>{},
    removeItem: (id: any) => {}
});