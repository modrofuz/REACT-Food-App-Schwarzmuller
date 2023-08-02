import classes from "./Cart.module.css";
import {CartItemI} from "../../models/CartItem.model";
import {Modal} from "../UI/Modal/Modal";
import {useContext} from "react";
import {CartStore} from "../../store/cart-store";
import {CartItem} from "./CartItem";

export function Cart(props: any) {
    const cartContext = useContext(CartStore);
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    function cartItemRemoveHandler(id: CartItemI['id']) {
        cartContext.removeItem(id);
    }

    function cartItemAddHandler(item: CartItemI) {
        cartContext.addItem({...item, amount: 1})
    }


    const cartItems = <ul className={classes['cart-items']}> {
        /*[{
            id: 'c1',
            name: 'Sushi',
            price: 12.99,
            amount: 2
        }]*/
        cartContext.items.map((item: CartItemI) => <CartItem key={item.id}
                                                             name={item.name}
                                                             amount={item.amount}
                                                             price={item.price}
                                                             onRemove={cartItemRemoveHandler.bind(null, item.id)}
                                                             onAdd={() => cartItemAddHandler(item)}></CartItem>
        )}
    </ul>;

    return (
        <Modal onCloseModal={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}
                        onClick={props.onCloseCart}>Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}