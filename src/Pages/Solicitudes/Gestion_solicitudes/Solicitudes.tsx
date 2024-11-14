import { useNavigate } from "react-router-dom";
import Button from "../../../Components/Button/Button";
import ComponentHeaderBar from "../../../Components/HeaderBar/HeaderBar";
import Leftbar from "../../../Components/Leftbar/Leftbar";
import "./Solicitudes.css"
import { useState } from "react";

const PageSolicitudes =()=>{

    const [paginaActual, setPaginaActual] = useState(0);
    const elementosPorPagina = 5;
    const navigate=useNavigate();

    const datos = [
        { id: 1, fecha: "30/12/24", descripcion: "Arreglo de cama", estado: 3 },
        { id: 2, fecha: "28/12/24", descripcion: "Adicion de ropero", estado: 2 },
        { id: 3, fecha: "27/12/24", descripcion: "Arreglo de baño", estado: 1 },
        { id: 4, fecha: "27/12/24", descripcion: "Arreglo de baño", estado: 4 },
        { id: 5, fecha: "27/12/24", descripcion: "Arreglo de baño", estado: 1 },
        { id: 6, fecha: "27/12/24", descripcion: "Arreglo de baño", estado: 1 },
        { id: 7, fecha: "26/12/24", descripcion: "Pintura de habitación", estado: 2 },
        { id: 8, fecha: "25/12/24", descripcion: "Cambio de ventana", estado: 3 }
    ];

    const totalPaginas = Math.ceil(datos.length / elementosPorPagina);
    const datosPaginados = datos.slice(paginaActual * elementosPorPagina, (paginaActual + 1) * elementosPorPagina);

    const avanzarPagina = () => {
        if (paginaActual < totalPaginas - 1) setPaginaActual(paginaActual + 1);
    };

    const retrocederPagina = () => {
        if (paginaActual > 0) setPaginaActual(paginaActual - 1);
    };

    
    return(
        <div className="container-pagesolicitudes">
            <ComponentHeaderBar nombre="Gestion de solicitudes"/>
            <div className="container-boton-solicitudes">
                <Button nombre="Solicitar" onclick={()=>navigate('/agregar-solicitud')} />
            </div>
            
            <div className="container-leyenda">
                <div className="container-leyenda-color">
                    <img className="imagen-leyenda" src="https://static.vecteezy.com/system/resources/thumbnails/016/314/339/small/red-circle-red-dot-icon-free-png.png" alt="rojo"></img>
                    <p><strong>Pago Alto</strong></p>
                </div>

                <div className="container-leyenda-color">
                    <img className="imagen-leyenda" src="https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-green-circle-png-image_2382000.jpg" alt="verde"></img>
                    <p><strong>Pago Estandar</strong></p>
                </div>

                <div className="container-leyenda-color">
                    <img className="imagen-leyenda" src="https://i.pinimg.com/736x/ca/d7/4d/cad74db34eeefbb864673aa33747407b.jpg" alt="amarillo"></img>
                    <p><strong>Pendiente de pago</strong></p>
                </div>

                <div className="container-leyenda-color">
                    <img className="imagen-leyenda" src="https://cdn-icons-png.flaticon.com/512/0/14.png" alt="negro"></img>
                    <p><strong>Culminado</strong></p>
                </div>
            </div>

            <div className="paginacion">
                        <button onClick={retrocederPagina} disabled={paginaActual === 0}>Anterior</button>
                        <span>Página {paginaActual + 1} de {totalPaginas}</span>
                        <button onClick={avanzarPagina} disabled={paginaActual === totalPaginas - 1}>Siguiente</button>
            </div>

            <div className="container-solicitudes-info">
                <Leftbar/>

                <div className="container-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Descripcion</th>
                                <th>Estado</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                       <tbody>
                        {datosPaginados.map(dato=>(
                                <tr key={dato.id}>
                                    <td>{dato.fecha}</td>
                                    <td>{dato.descripcion}</td>
                                    <td>
                                        {dato.estado === 1 && (
                                            <img  src="https://static.vecteezy.com/system/resources/thumbnails/016/314/339/small/red-circle-red-dot-icon-free-png.png" alt="Pago Alto" style={{width:'1.8rem',height:'1.8rem'}} />
                                        )}
                                        {dato.estado === 2 && (
                                            <img  src="https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-green-circle-png-image_2382000.jpg" alt="Pago Estandar" style={{width:'1.6rem',height:'1.6rem'}} />
                                        )}
                                        {dato.estado === 3 && (
                                            <img  src="https://i.pinimg.com/736x/ca/d7/4d/cad74db34eeefbb864673aa33747407b.jpg" alt="Pendiente de Pago" style={{width:'1.8rem',height:'1.8rem'}} />
                                        )}
                                        {dato.estado===4 && (
                                            <img  src="https://cdn-icons-png.flaticon.com/512/0/14.png" alt="Culminado" style={{width:'1.5rem',height:'1.5rem'}} />

                                        )}
                                    </td>

                                    <td style={{cursor:'pointer'}}>
                                        {dato.estado === 1 || dato.estado === 2 ? (
                                            <strong onClick={()=>navigate('/ver-detalles')} >Ver detalles</strong>
                                        ) : dato.estado === 3 ? (
                                            <strong onClick={()=>navigate('/pagar-solicitud')} >Pagar solicitud</strong>
                                        ) : dato.estado === 4 ? (
                                            <strong onClick={()=>navigate('/calificar-servicio')}>Calificar servicio</strong>
                                        ) : null}
                                    </td>
                                </tr>
                            ))}
                        
                        </tbody> 
                        
                        
                    </table>
                    
                </div>

            </div>
        </div>
    )
}

export default PageSolicitudes;