import React from "react";

function RadioButton(props) {
    return (
        <>
            <input
                type="radio"
                id={props.id}
                name={props.name}
                value={props.value}
                checked={props.checked}
                onChange={(e) => props.changeHandler(e.target.value)}
            />
            <label htmlFor={props.id}>{props.label}</label>
        </>
    );
}

export default RadioButton;