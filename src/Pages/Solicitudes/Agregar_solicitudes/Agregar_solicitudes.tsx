import { useNavigate } from "react-router-dom";
import ComponentHeaderBar from "../../../Components/HeaderBar/HeaderBar";
import "./Agregar_solicitudes.css";
import { FaArrowCircleLeft} from 'react-icons/fa'; 
import FieldImage from "../../../Components/FieldImage/FieldImage";
import Button from "../../../Components/Button/Button";

const PageAgregar_solicitudes = () => {
    const navigate = useNavigate();

    return (
        <div className="container-agregar-solicitudes">
            <ComponentHeaderBar nombre="Registrar solicitud" />

            <div className="container-agregar-solicitudes-info">
                <FaArrowCircleLeft
                    className="back-button" 
                    onClick={() => navigate('/solicitudes')} 
                />
                
                <div className="container-agregar-solitudes-contenido">
                    <div className="container-agregar-solicitudes-datos">
                        <FieldImage 
                            imagen="https://static.vecteezy.com/system/resources/previews/015/646/155/non_2x/request-signature-icon-outline-style-vector.jpg"
                            des="Tipo de solicitud"
                            opciones={["Tipo de servicio","Agregar contenido", "Reparacion", "Mantenimiento"]}
                        />
                        <textarea className="request-textarea" placeholder="Escribe los detalles de la solicitud..."></textarea>
                        <Button 
                            nombre="SOLICITAR" 
                            onclick={() => navigate('/solicitudes')} 
                        />
                    </div>

                    <div className="container-agregar-solicitud-imagen">
                        <img 
                            src="https://static.vecteezy.com/system/resources/previews/009/827/300/non_2x/business-woman-in-formal-suit-open-both-hands-to-the-side-business-woman-in-formal-suit-pointing-illustration-png.png"
                            alt="Imagen de solicitud"
                            className="imagen-fondo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageAgregar_solicitudes;
