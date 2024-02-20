import React from "react";

function InputItem(props) {
    return (
        <label htmlFor={props.id}>
            {props.label}
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={(e) => props.changeHandler(e.target.value)}
            />
        </label>
    );
}

export default InputItem;