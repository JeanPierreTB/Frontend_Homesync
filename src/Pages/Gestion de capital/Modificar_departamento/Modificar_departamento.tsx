import ComponentHeaderBar from "../../../Components/HeaderBar/HeaderBar";
import "./Modificar_departamento.css"
import Textfield from "../../../Components/Textfield/Textfield";
import Button from "../../../Components/Button/Button";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PageModificar_Departamento=()=>{
    const navigate=useNavigate();
    return (
        <div className="container-pagemodificar-departamento">
            <ComponentHeaderBar nombre="Actualizar departamento"/>
            <div className="container-pagemodificar-departamento-flecha">
            <FaArrowAltCircleLeft style={{ cursor: 'pointer' }} onClick={()=>navigate('/lista-departamento')} size={30} />

            </div>
            <div className="container-pagemodificar-departamento-contenido">
                    <div className="container-pagemodificar-departamento-datos1">
                        <Textfield placeholder="Nombre del departamento" />
                        <Textfield placeholder="Precio" />
                        <Textfield placeholder="Piso" />
                        <Textfield placeholder="Numero de habitaciones"/>

                    </div>

                    <div className="container-pagemodificar-departamento-datos2">
                        <p><strong>Foto del departamento</strong></p>
                        <img src="https://cdn-icons-png.flaticon.com/512/4305/4305513.png" alt="Foto"></img>
                        <Button nombre="ACTUALIZAR" onclick={()=>alert("Departamento actualizado")}/>
                    </div>
            </div>
        </div>
    )
}


export default PageModificar_Departamento;