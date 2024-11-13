import "./Texfield.css";
import React from "react";
import { TextfieldI } from "../../Intefaces/TextfieldI";


const Textfield:React.FC<TextfieldI>=({placeholder})=>{

    return (
            <input className="input" placeholder={placeholder}></input>
       
    )

}


export default Textfield;