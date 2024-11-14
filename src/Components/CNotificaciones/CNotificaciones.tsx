import "./CNotificaciones.css";

interface CNotificacionesI{
    nombre:string;
    des:string;
    imagen:string;
}

const CNotificaciones:React.FC<CNotificacionesI>=({nombre,des,imagen})=>{
    return(
        <div className="container-cnotificaciones">
            <div className="container-cnotificaciones-info">
                <p><strong>{nombre}</strong></p>
                <p>{des}</p>
            </div>
            
            <img src={imagen} alt={des}></img>
        </div>
    )
}


export default CNotificaciones;