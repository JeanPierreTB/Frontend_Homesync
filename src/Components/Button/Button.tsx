import React from "react";
import "./Button.css"
import { ButtonI } from "../../Intefaces/ButtonI";

const Button:React.FC<ButtonI>=({nombre})=>{
    return (
        <button className="boton">{nombre}</button>
    )
}


export default Button;