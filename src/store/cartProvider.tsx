import {CartStore} from "./cart-store";
import {CartItemI} from "../models/CartItem.model";
import {useReducer} from "react";


const defaultCartState = {
    items: [],
    totalAmount: 0,
}

function cartReducer(state: any, action: any) {
    switch (action.type) {
        case 'ADD' : {
            const existingCartItemIndex: number = state.items.findIndex((item: CartItemI) => item.id === action.item.id);
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;
            if (existingCartItem) {
                const updatedItem = {...existingCartItem, amount: existingCartItem.amount + action.item.amount}
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem
            } else {
                updatedItems = state.items.concat(action.item);
            }
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }

        }
        case 'REMOVE' : {
            const existingCartItemIndex: number = state.items.findIndex((item: CartItemI) => item.id === action.id);
            const existingCartItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingCartItem.price;
            let updatedItems;
            if (existingCartItem.amount === 1 ){
                updatedItems = state.items.filter((item: CartItemI) => item.id !== action.id)
            } else {
                const updatedItem: CartItemI = {...existingCartItem, amount: existingCartItem.amount - 1}
                updatedItems =[...state.items];
                updatedItems[existingCartItemIndex] = updatedItem
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }

    }
    return defaultCartState;
}

export function CartProvider(props: any) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    function addItemToCartHandler(item: CartItemI) {
        dispatchCartAction({type: 'ADD', item: item})
    }

    function removeItemToCartHandler(id: CartItemI['id']) {
        dispatchCartAction({type: 'REMOVE', id: id})

    }

    const cartStore = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }
    return (
        <CartStore.Provider value={cartStore}>
            {props.children}
        </CartStore.Provider>
    )
}