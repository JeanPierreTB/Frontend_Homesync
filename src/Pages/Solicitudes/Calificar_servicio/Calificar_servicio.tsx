import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaStar, FaRegStar } from "react-icons/fa"; 
import ComponentHeaderBar from "../../../Components/HeaderBar/HeaderBar";
import "./Calificar_servicio.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";

const PageCalificar_Servicio = () => {
    const [rating, setRating] = useState(0);
    const navigate=useNavigate();  

    const handleStarClick = (index:any) => {
        setRating(index);
    };

    const renderStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} style={{ cursor: "pointer" }} onClick={() => handleStarClick(i)} />);
            } else {
                stars.push(<FaRegStar key={i} style={{ cursor: "pointer" }} onClick={() => handleStarClick(i)} />);
            }
        }
        return stars;
    };

    return (
        <div className="container-pagecalificar-servicio">
            <ComponentHeaderBar nombre="Calificar Servicio" />
            <FaArrowAltCircleLeft style={{ cursor: 'pointer' }} onClick={()=>navigate('/solicitudes')} size={30} />

            <div className="container-pagecalificar-servicio-info">
                <div className="container-pagecalificar-servicio-dato1">
                    <p><strong>Fecha de solicitud:</strong> 4/7/24</p>
                    <p><strong>Descripcion:</strong> Se esta presentando problemas últimamente con la luz, se apaga y se prende por momentos</p>
                    <p><strong>Fecha de culminación:</strong> 10/7/24</p>
                    <p><strong>Estado:</strong> Pagado</p>
                </div>

                <div className="container-pagecalificar-servicio-dato2">
                    <p><strong>Prestador del servicio:</strong> Luis Carlos Jose</p>
                    <div className="container-calificacion-estrellas">
                        <p><strong>Calificación:</strong></p>
                        <div>{renderStars()}</div>  
                    </div>
                    
                    <img src="https://img.freepik.com/fotos-premium/electricista-esta-reparando-luces-departamento-recientemente-renovado_114016-5972.jpg" alt="Reparacion de luz" />
                    
                    <Button nombre="CALIFICAR" onclick={()=>navigate('/solicitudes')}  />

                    
                    
                </div>

                
            </div>

            

        </div>
    );
};

export default PageCalificar_Servicio;
