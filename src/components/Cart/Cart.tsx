import classes from "./Cart.module.css";
import {CartItemI} from "../../models/CartItem.model";
import {Modal} from "../UI/Modal/Modal";

export function Cart(props: any) {
    const cartItems = <ul className={classes['cart-items']}> {
        [{
            id: 'c1',
            name: 'Sushi',
            price: 12.99,
            amount: 2
        }].map((item: CartItemI) => <li>{item.name}</li>)}
    </ul>;

    return (
        <Modal onCloseModal={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}
                onClick={props.onCloseCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}