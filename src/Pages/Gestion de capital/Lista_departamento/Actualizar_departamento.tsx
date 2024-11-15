import { useState } from "react";
import ComponentHeaderBar from "../../../Components/HeaderBar/HeaderBar";
import "./Actualizar_departamento.css";
import FieldImage from "../../../Components/FieldImage/FieldImage";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const PageActualizar_departamento = () => {
    const datos = [
        { id: 1, nombre: "Departamento básico", precio: 20, piso: 1 },
        { id: 2, nombre: "Departamento básico", precio: 20, piso: 3 },
        { id: 3, nombre: "Departamento básico", precio: 20, piso: 4 },
        { id: 4, nombre: "Departamento básico", precio: 20, piso: 4 },
        { id: 5, nombre: "Departamento básico", precio: 20, piso: 4 },
        { id: 6, nombre: "Departamento básico", precio: 20, piso: 4 },
        { id: 7, nombre: "Departamento deluxe", precio: 50, piso: 5 },
        { id: 8, nombre: "Departamento premium", precio: 100, piso: 10 },
    ];

    const navigate=useNavigate();

    const [paginaActual, setPaginaActual] = useState(1);
    const itemsPorPagina = 7;

    const indiceInicio = (paginaActual - 1) * itemsPorPagina;
    const indiceFin = indiceInicio + itemsPorPagina;
    const datosPaginados = datos.slice(indiceInicio, indiceFin);

    const totalPaginas = Math.ceil(datos.length / itemsPorPagina);

    const handleSiguiente = () => {
        if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1);
    };

    const handleAnterior = () => {
        if (paginaActual > 1) setPaginaActual(paginaActual - 1);
    };

    return (
        <div className="container-pageactualizar-departamento">
            <ComponentHeaderBar nombre="Lista de departamentos" />
            <div className="filtros-container-capital">
                <FieldImage 
                    imagen="https://cdn-icons-png.flaticon.com/512/1018/1018525.png" 
                    des="departamento" 
                    opciones={["Departamento 1", "Departamento 2"]} 
                />
                <FieldImage 
                    imagen="https://img.freepik.com/vector-premium/icono-piso_535345-3738.jpg" 
                    des="piso" 
                    opciones={["Piso 1", "Piso 2", "Piso 3", "Piso 4", "Piso 5"]} 
                />
                <FieldImage 
                    imagen="https://w7.pngwing.com/pngs/647/460/png-transparent-computer-icons-open-person-family-icon-black-silhouette-black-white-people-thumbnail.png" 
                    des="persona" 
                    opciones={["1", "2", "3", "4"]} 
                />
            </div>
            <div className="paginacion-pageactualizar-departamento">
                <FaArrowAltCircleLeft style={{ cursor: 'pointer' }} onClick={()=>navigate('/agregar-departamento')} size={30} />

                <div>
                    <button onClick={handleAnterior} disabled={paginaActual === 1}>Anterior</button>
                    <span>Página {paginaActual} de {totalPaginas}</span>
                    <button onClick={handleSiguiente} disabled={paginaActual === totalPaginas}>Siguiente</button>
                </div>
               
            </div>
            <div className="container-table-pageactualizar-departamento">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Piso</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosPaginados.map(data => (
                            <tr key={data.id}>
                                <td>{data.nombre}</td>
                                <td >{data.precio}</td>
                                <td>{data.piso}</td>
                                <td style={{ cursor: 'pointer' }}>
                                    <strong onClick={()=>navigate('/modificar-departamento')}>Actualizar</strong>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PageActualizar_departamento;
