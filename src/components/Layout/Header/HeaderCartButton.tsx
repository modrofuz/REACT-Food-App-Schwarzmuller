import classes from "./HeaderCartButton.module.css";
import {CartIcon} from "../../Cart/CartIcon";
import {useContext, useEffect, useState} from "react";
import {CartStore} from "../../../store/cart-store";
import {CartItemI} from "../../../models/CartItem.model";

export function HeaderCartButton(props: any) {

    const cartContext = useContext(CartStore);
    const [isBtnHighlighted, setBtnIsHighlighted] = useState(false);
    const btnClasses = `${classes.button} ${isBtnHighlighted ? classes.bump : ''}`
    useEffect(() => {
        if (cartContext.items.length === 0) {
            return
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false)
        }, 300)
        return () => {
            clearTimeout(timer)
        }
    }, [cartContext.items])

    const nmbOfCartItems = cartContext.items.reduce((currentNumber: number, item: CartItemI) => {
        return currentNumber + item.amount
    }, 0);



    return (
        <button className={btnClasses} onClick={props.onClickHeaderButton}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{nmbOfCartItems}</span>
        </button>
    );

}