import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import Textfield from "../../../Components/Textfield/Textfield";
import "./Registro.css"

const PageRegistro=()=>{

    const navigate=useNavigate();
    return(
        <div className="container-registro">
            <div className="container-registro-info">
            <h1>Crear tu cuenta</h1>
            <p>Desbloquea todas las funciones</p>
            <div className="container-registro-inputs">
                <Textfield placeholder="Usuario"/>
                <Textfield placeholder="Correo electronico"/>
                <Textfield placeholder="Contraseña"/>
                <Textfield placeholder="Telefono"/>
                <Button nombre="REGISTRATE"/>
            </div>

            <div className="container-registro-texto">
                <p>Ya tienes cuenta?</p>
                <p id="color-gray" onClick={()=>navigate('/')}>Inicia sesion ahora</p>
            </div>

            </div>


            <img src='https://img.freepik.com/fotos-premium/edificio-realista-rascacielos-aislado-fondo-blanco-imagen-generada-ia_905368-1224.jpg' alt="icono"></img>


        </div>
    )
}


export default PageRegistro;