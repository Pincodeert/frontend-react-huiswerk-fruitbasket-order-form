function Button(props) {
    return(
        <button
            type={props.type}
            onClick={props.clickHandler}
            disabled={props.disabled || false}
        >
        {props.children}
        </button>
    );
}

export default Button;