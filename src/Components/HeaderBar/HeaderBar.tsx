import { FaBell, FaUserCircle } from 'react-icons/fa';
import { HeaderbarI } from '../../Intefaces/HeaderbarI';
import "./HeaderBar.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ComponentHeaderBar:React.FC<HeaderbarI>=({nombre})=>{

  const navigate=useNavigate();

    return (
        <div className='container-headerbar'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCH_bBSx1qu1A0RvFhJiZw9bkA5XrAhsDvg&s" alt="logo"></img>
            <h2>{nombre}</h2>
            <div className='container-iconos'>
                <FaBell style={{cursor:'pointer'}} fontSize={24} onClick={()=>navigate('/notificaciones')}/>
                <FaUserCircle style={{cursor:'pointer'}} fontSize={24}/>
            </div>
            
        </div>
    )
}


export default ComponentHeaderBar;