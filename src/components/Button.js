import React from "react";
const Button = ({text,color,onclick}) => {
    return (
        <button onClick={onclick} className="btn" style={{ backgroundColor:color}}>{text}</button>
    )
}

export default Button;