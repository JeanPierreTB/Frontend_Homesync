import React from "react";
import "./Button.css"
import { ButtonI } from "../../Intefaces/ButtonI";

const Button:React.FC<ButtonI>=({nombre,onclick,color})=>{
    return (
        <button className="boton" style={{background:color}} onClick={onclick}>{nombre}</button>
    )
}


export default Button;