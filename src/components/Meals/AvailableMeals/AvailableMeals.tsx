import {MealI} from "../../../models/Meal.model";
import classes from './AvailableMeals.module.css'
import {Card} from "../../UI/Card/Card";
import {MealItem} from "../MealItem/MealItem";

const DUMMY_MEALS: MealI[] = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

export function AvailableMeals() {
    let mealsList: Array<JSX.Element> = [];
    DUMMY_MEALS.map((meal: MealI) => {
        // @ts-ignore
        return mealsList.push(<MealItem id={meal.id}
                      name={meal.name}
                      description={meal.description}
                      price={meal.price}
                      key={meal.id}
        /*meal={{...meal, key: meal.id}}*/>
            </MealItem>)
    });
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
}