import React from "react";
import Button from "./Button.jsx";

function Counter(props) {
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <Button
                type="button"
                disabled={props.amount === 0}
                clickHandler={() => props.setAmount(props.amount - 1)}
            >
            -
            </Button>

            <p>{props.amount}</p>

            <Button
                type="button"
                clickHandler={() => props.setAmount(props.amount + 1)}
            >
            +
            </Button>


        </article>
    );
}

export default Counter;