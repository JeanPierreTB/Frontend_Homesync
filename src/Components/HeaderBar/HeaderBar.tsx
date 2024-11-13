import { FaBell, FaUserCircle } from 'react-icons/fa';
import { HeaderbarI } from '../../Intefaces/HeaderbarI';
import "./HeaderBar.css";
import React from 'react';

const ComponentHeaderBar:React.FC<HeaderbarI>=({nombre})=>{


    return (
        <div className='container-headerbar'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCH_bBSx1qu1A0RvFhJiZw9bkA5XrAhsDvg&s" alt="logo"></img>
            <h2>{nombre}</h2>
            <div className='container-iconos'>
                <FaBell fontSize={24}/>
                <FaUserCircle fontSize={24}/>
            </div>
            
        </div>
    )
}


export default ComponentHeaderBar;