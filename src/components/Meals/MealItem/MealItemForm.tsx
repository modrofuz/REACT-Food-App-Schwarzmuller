import classes from "./MealItemForm.module.css";
import {Input} from "../../UI/Input/Input";
import React, {useRef, useState} from "react";

export function MealItemForm(props: any) {
    const [isAmountValid, setIsAmountValid] = useState(true)
    const amountInputRef = useRef({value: 0});

    function submitHandler(event: any) {
        event.preventDefault();
        const enteredAmount = +amountInputRef.current.value;
        if (enteredAmount < 0 || enteredAmount> 5) {
            return setIsAmountValid (false)
        }
        props.onAddToCart(enteredAmount)
    }


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label={"Amount"} input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>+ Add</button>
            {!isAmountValid && <p>Please enter valid amount (1-5)</p>}
        </form>
    )
}