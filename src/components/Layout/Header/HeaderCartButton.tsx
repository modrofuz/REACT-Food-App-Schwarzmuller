import classes from "./HeaderCartButton.module.css";
import {CartIcon} from "../../Cart/CartIcon";
export function HeaderCartButton(props: any) {
    return (
        <button className={classes.button} onClick={props.onClickHeaderButton}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );

}