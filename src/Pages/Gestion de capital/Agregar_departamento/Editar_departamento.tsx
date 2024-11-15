import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import ComponentHeaderBar from "../../../Components/HeaderBar/HeaderBar";
import Leftbar from "../../../Components/Leftbar/Leftbar";
import Textfield from "../../../Components/Textfield/Textfield";
import "./Editar_departamento.css";


const PageEditar_departamento=()=>{

    const navigate=useNavigate();

    return (
        <div className="container-editar-departamento">
            <ComponentHeaderBar nombre="Agregar departamento"/>
            <div className="container-editar-departamento-boton">
                <Button nombre="ACTUALIZAR DEPARTAMENTO" onclick={()=>navigate('/lista-departamento')}/>

            </div>
            <div className="container-editar-departamento-contenido">
                <Leftbar/>
                <div className="container-editar-departamento-dato">
                    <div className="container-editar-departamento-datos1">
                        <Textfield placeholder="Nombre del departamento" />
                        <Textfield placeholder="Precio" />
                        <Textfield placeholder="Piso" />
                        <Textfield placeholder="Numero de habitaciones"/>

                    </div>

                    <div className="container-editar-departamento-datos2">
                        <p><strong>Foto del departamento</strong></p>
                        <img src="https://cdn-icons-png.flaticon.com/512/4305/4305513.png" alt="Foto"></img>
                        <Button nombre="AGREGAR" onclick={()=>alert("Departamento agregado")}/>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default PageEditar_departamento;