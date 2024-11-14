import "./Texfield.css";
import React from "react";
import { TextfieldI } from "../../Intefaces/TextfieldI";


const Textfield:React.FC<TextfieldI>=({placeholder,onchange,value})=>{


    return (
        <div className="container-textfield">
           <label>{placeholder}</label>
           <input className="input"  name={value} onChange={onchange}></input>

        </div>
       
    )

}


export default Textfield;