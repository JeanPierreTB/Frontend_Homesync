import { useNavigate } from "react-router-dom";
import ComponentHeaderBar from "../../../Components/HeaderBar/HeaderBar";
import "./Detalles_solicitudes.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";


const PageDetalles_solicitudes=()=>{

    const navigate=useNavigate();

    return(
        <div className="container-detalles-solicitudes">
            <ComponentHeaderBar nombre="Detalles de la solicitud"/>
            <FaArrowAltCircleLeft style={{ cursor: 'pointer' }} onClick={()=>navigate('/solicitudes')} size={30} />
            <div className="container-detalles-solicitudes-info">

                <div className="container-detalles-solicitudes-datos1">
                    <p><strong>Fecha de solicitud:</strong> 4/7/24</p>
                    <p><strong>Descripcion:</strong> Se esta presentando problemas ultimamente con la luz,se apaga y se prende por momentos</p>
                    <p><strong>Fecha estimada: </strong> 10/07/24</p>
                    <p><strong>Precio: </strong>Precio normal</p>
                    
                </div>

                <div className="container-detalles-solicitudes-datos2">
                    <p><strong>Prestado del servicio:</strong> Luis Carlos Jose</p>
                    <img src="https://img.freepik.com/fotos-premium/electricista-esta-reparando-luces-departamento-recientemente-renovado_114016-5972.jpg" alt="Reparacion de luz" ></img>
                </div>

            </div>
        </div>
    )

}


export default PageDetalles_solicitudes;