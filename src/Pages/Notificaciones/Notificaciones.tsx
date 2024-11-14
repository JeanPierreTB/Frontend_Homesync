import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ComponentHeaderBar from "../../Components/HeaderBar/HeaderBar";
import "./Notificaciones.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import CNotificaciones from "../../Components/CNotificaciones/CNotificaciones";

const PageNotificaciones = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3; // Número de notificaciones por página

    const datos = [
        {
            id: 1,
            nombre: "Solicitud aprobada",
            des: "Tu solicitud fue aprobada, por favor realiza el pago a la brevedad",
            imagen: "https://thumbs.dreamstime.com/b/icono-de-solicitud-aprobada-estilo-esquema-vector-aprobado-para-dise%C3%B1o-web-aislado-en-fondo-blanco-163038282.jpg",
        },
        {
            id: 2,
            nombre: "Servicio concluido",
            des: "Califica a tu prestador de servicio para saber qué tal hizo su trabajo",
            imagen: "https://cdn.icon-icons.com/icons2/1369/PNG/512/-star_90512.png",
        },
        {
            id: 3,
            nombre: "Servicio concluido",
            des: "Califica a tu prestador de servicio para saber qué tal hizo su trabajo",
            imagen: "https://cdn.icon-icons.com/icons2/1369/PNG/512/-star_90512.png",
        },
        {
            id: 4,
            nombre: "Servicio concluido",
            des: "Califica a tu prestador de servicio para saber qué tal hizo su trabajo",
            imagen: "https://cdn.icon-icons.com/icons2/1369/PNG/512/-star_90512.png",
        }
    ];

    const totalPages = Math.ceil(datos.length / itemsPerPage);
    const paginatedData = datos.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    // Funciones para avanzar y retroceder de página
    const handleNextPage = () => {
        if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    return (
        <div className="container-notificaciones">
            <ComponentHeaderBar nombre="Notificaciones" />
            <FaArrowCircleLeft style={{ cursor: 'pointer' }} onClick={() => navigate('/reservas')} size={30} />

            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 0}>Anterior</button>
                <span>Página {currentPage + 1} de {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>Siguiente</button>
            </div>
            <div className="container-notificaciones-info">
                {paginatedData.map((data) => (
                    <CNotificaciones key={data.id} nombre={data.nombre} des={data.des} imagen={data.imagen} />
                ))}
            </div>

            
        </div>
    );
};

export default PageNotificaciones;
