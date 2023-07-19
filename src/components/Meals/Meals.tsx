import {MealsSummary} from "./MealsSummary/MealsSummary";
import {AvailableMeals} from "./AvailableMeals/AvailableMeals";

export function Meals() {
    return(
        <>
            <MealsSummary></MealsSummary>
            <AvailableMeals></AvailableMeals>
        </>
    )
}