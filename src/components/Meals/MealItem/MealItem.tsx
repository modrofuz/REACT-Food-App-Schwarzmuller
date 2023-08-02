import classes from "./MealItem.module.css";
import {MealI} from "../../../models/Meal.model";
import {MealItemForm} from "./MealItemForm";
import {useContext} from "react";
import {CartStore} from "../../../store/cart-store";

export function MealItem(props: MealI) {
    const cartContext = useContext(CartStore)
    const price = `$${props.price.toFixed(2)}`;
    function addToCartHandler(amount: number){
        cartContext.addItem({id: props.id, name: props.name, amount: amount, price: props.price})
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3> {props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}></MealItemForm>
            </div>
        </li>
    )
}