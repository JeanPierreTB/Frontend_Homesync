import Button from "../../../Components/Button/Button";
import Textfield from "../../../Components/Textfield/Textfield";
import { FaArrowLeft } from 'react-icons/fa'; 
import "./Olvidar.css";
import { useNavigate } from "react-router-dom";


const PageOlvidar=()=>{

    const navigate=useNavigate();
    return(
        <div className="container-pageolvidar">
            <div className="container-pageolvidar-info">
                <FaArrowLeft style={{cursor:'pointer'}} size={24} onClick={()=>navigate('/')} />
                <h1>¿Olvidaste tu contraseña?</h1>
                <p>Entra tu correo y tu nueva contraseña para cambiarla</p>
                <div className="container-olvidar-inputs">
                    <Textfield placeholder="Correo Electronico"/>
                    <Textfield placeholder="Nueva contraseña"/>
                    <Button nombre="CAMBIAR CONTRASEÑA" />
                </div>
                
                
            </div>

            <img src='https://img.freepik.com/fotos-premium/edificio-realista-rascacielos-aislado-fondo-blanco-imagen-generada-ia_905368-1224.jpg' alt="icono"></img>

            
        </div>
    )
}


export default PageOlvidar;