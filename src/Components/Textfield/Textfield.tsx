import "./Texfield.css";
import React from "react";
import { TextfieldI } from "../../Intefaces/TextfieldI";


const Textfield:React.FC<TextfieldI>=({placeholder})=>{

    return (
        <div className="container-textfield">
           <label>{placeholder}</label>
           <input className="input"></input>

        </div>
       
    )

}


export default Textfield;