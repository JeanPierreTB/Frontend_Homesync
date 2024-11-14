import {FaArrowCircleLeft } from "react-icons/fa";
import ComponentHeaderBar from "../../../Components/HeaderBar/HeaderBar";
import "./Pagar_solicitud.css";
import { useNavigate } from "react-router-dom";

const PagePagar_solicitud=()=>{

    const navigate=useNavigate();

    return (
        <div className="container-pagepagar-solicitud">
            <ComponentHeaderBar nombre="Datos de la solicitud"/>
            <div className="container-pagepagar-solicitud-info">
                <FaArrowCircleLeft style={{cursor:'pointer'}} size={30} onClick={()=>navigate('/solicitudes')}/>
                <div className="container-pagepagar-solicitud-datos">
                    <div className="container-pagepagar-solicitud-datos1">
                        <p><strong>Fecha de solicitud:</strong> 4/7/24</p>
                        <p><strong>Descripcion:</strong> Se esta presentando probelmas ultimanente con la luz,se apaga y se prende por momenetos</p>
                        <p><strong>Prestado de servicio:</strong> Luis Carlos Jose</p>
                        <p><strong>Estado:</strong> No pagado</p>
                    </div>

                    <div className="container-pagepagar-solicitud-datos2">
                        <p><strong>Monto</strong></p>
                        <p>S/600</p>
                        <p><strong>Tipos de pagos</strong></p>
                        <div className="container-pagos-tarjetas-imagen">
                            <img src="https://play-lh.googleusercontent.com/gBpVaCpZsbBrLufT06aRpuLQvsUq1KAZUCEof_ps76mtB8_llJg3xv24mey8I0m3dUE=w240-h480-rw" alt="BCP"></img>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-YbiyLYyImtiqdlFMTWQWt60TZWm2chkrA&s" alt="Izipay"></img>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOL5U0fXWe7o7BL274TqnieI1Kqr3OrEjVA&s" alt="Culqui"></img>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default PagePagar_solicitud;