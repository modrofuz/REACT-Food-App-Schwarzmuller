import classes from "./MealItem.module.css";
import {MealI} from "../../../models/Meal.model";
import {MealItemForm} from "./MealItemForm";

export function MealItem(props: MealI) {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
                <h3> {props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm></MealItemForm>
            </div>
        </li>
    )
}