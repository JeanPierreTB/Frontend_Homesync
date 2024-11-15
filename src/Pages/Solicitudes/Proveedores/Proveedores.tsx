import React, { useState } from "react";
import Button from "../../../Components/Button/Button";
import ComponentHeaderBar from "../../../Components/HeaderBar/HeaderBar";
import "./Proveedores.css";
import FieldImage from "../../../Components/FieldImage/FieldImage";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PageProveedores = () => {

    const navigate=useNavigate();
    const datos = [
        { id: 1, nombre: "Marco Palomino", calificacion: 4, especialidad: "Electricidad", estado: 1 },
        { id: 2, nombre: "Cesar Costilla", calificacion: 3, especialidad: "Instalacion", estado: 0 },
        { id: 3, nombre: "Pedro Sánchez", calificacion: 5, especialidad: "Pintura", estado: 1 },
        { id: 4, nombre: "Luis López", calificacion: 4, especialidad: "Albañilería", estado: 0 },
        { id: 5, nombre: "Carla García", calificacion: 5, especialidad: "Jardinería", estado: 1 },
        { id: 6, nombre: "Juan Pérez", calificacion: 2, especialidad: "Carpintería", estado: 0 },
        { id: 7, nombre: "Ana Rojas", calificacion: 4, especialidad: "Plomería", estado: 1 },
        { id: 8, nombre: "Carlos Díaz", calificacion: 3, especialidad: "Electricidad", estado: 0 },
        { id: 9, nombre: "Sofía López", calificacion: 5, especialidad: "Decoración", estado: 1 },
    ];

    const [paginaActual, setPaginaActual] = useState(1);
    const elementosPorPagina = 6;

    const indiceInicial = (paginaActual - 1) * elementosPorPagina;
    const indiceFinal = indiceInicial + elementosPorPagina;
    const datosPaginados = datos.slice(indiceInicial, indiceFinal);

    const paginaSiguiente = () => {
        if (paginaActual < Math.ceil(datos.length / elementosPorPagina)) {
            setPaginaActual(paginaActual + 1);
        }
    };

    const paginaAnterior = () => {
        if (paginaActual > 1) {
            setPaginaActual(paginaActual - 1);
        }
    };

    const Estrellas = ({ calificacion }:any) => {
        const estrellas = [];
        for (let i = 1; i <= 5; i++) {
            estrellas.push(
                <span key={i} className={i <= calificacion ? "estrella llena" : "estrella vacia"}>
                    ★
                </span>
            );
        }
        return <div className="calificacion-estrellas">{estrellas}</div>;
    };
    

    return (
        <div className="container-pageproveedores">
            <ComponentHeaderBar nombre="Proveedores Disponibles" />
            <div className="container-pageproveedores-boton">
                <FaArrowAltCircleLeft style={{ cursor: 'pointer' }} onClick={()=>navigate('/ver-detalles')} size={30} />

                <Button nombre="Recomendar Proveedor" onclick={() => alert("Proveedor recomendado")} />
            </div>
            <div className="paginacion">
                <FieldImage imagen="https://cdn-icons-png.flaticon.com/512/94/94948.png" des="Estresllas" opciones={["1","2","3","4","5"]} />
                <FieldImage imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhjyjoKCNazgusbOIBf6XTCnpntFuXDf6HranggUxcISFnyLGUKRgOjHHbvzHo5OBDuI&usqp=CAU" des="Disponible" opciones={["Disponible","No disponible"]}/>
                <FieldImage imagen="https://cdn-icons-png.flaticon.com/512/87/87727.png" des="Especialista" opciones={["Electricidad","Instalacion","Pintura"]}/>
                <div>
                <button onClick={paginaAnterior} disabled={paginaActual === 1}>Anterior</button>
                <span>Página {paginaActual} de {Math.ceil(datos.length / elementosPorPagina)}</span>
                <button onClick={paginaSiguiente} disabled={paginaActual === Math.ceil(datos.length / elementosPorPagina)}>Siguiente</button>
                </div>
                
            </div>
            <div className="container-table-proveedor">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Calificación</th>
                            <th>Especialidad</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosPaginados.map(data => (
                            <tr onClick={()=>alert("Proveedor elegido:"+data.nombre)} key={data.id}>
                                <td>{data.nombre}</td>
                                <td><Estrellas calificacion={data.calificacion} /></td>
                                <td>{data.especialidad}</td>
                                <td>{data.estado === 1 ? "Activo" : "Inactivo"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default PageProveedores;
