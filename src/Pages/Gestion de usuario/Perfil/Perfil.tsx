import { FaArrowCircleLeft} from "react-icons/fa";
import ComponentHeaderBar from "../../../Components/HeaderBar/HeaderBar";
import "./Perfil.css";
import { useNavigate } from "react-router-dom";
import Textfield from "../../../Components/Textfield/Textfield";
import Button from "../../../Components/Button/Button";


const PagePerfil=()=>{

    const navigate=useNavigate();

    return(
        <div className="container-pageperfil">
            <ComponentHeaderBar nombre="Perfil del usuario" />
            <div className="left">
                <FaArrowCircleLeft  onClick={()=>navigate('/solicitudes')} size={30} />
            </div>
            <div className="container-pagperfil-info">
                <div className="container-pagperfil-datos1">
                    <Textfield placeholder="Usuario"/>
                    <Textfield placeholder="Correo electronico"/>
                    <Textfield placeholder="Contraseña"/>
                    <Textfield placeholder="Telefono"/>
                </div>

                <div className="container-pagperfil-datos2">
                    <img src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg" alt="persona"></img>
                    <Button nombre="ACTUALIZAR" onclick={()=>navigate('/solicitudes')}/>
                </div>
                
                
            </div>
        </div>
    )
}


export default PagePerfil;