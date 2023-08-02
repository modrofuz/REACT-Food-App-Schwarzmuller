import classes from "./Input.module.css";
import React, {ForwardedRef} from "react";

export const Input = React.forwardRef(

    (props: any
     /*{
    input: {
        id: string;
        type: string;
        min: string;
        max: string;
        step: string;
        defaultValue: string;
    },
    label: string
}*/, ref: any) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    )
});
