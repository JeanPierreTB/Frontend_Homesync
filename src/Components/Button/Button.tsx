import React from "react";
import "./Button.css"
import { ButtonI } from "../../Intefaces/ButtonI";

const Button:React.FC<ButtonI>=({nombre,onclick})=>{
    return (
        <button className="boton" onClick={onclick}>{nombre}</button>
    )
}


export default Button;