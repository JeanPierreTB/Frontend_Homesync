import "./FieldImage.css";

interface FieldImage{
    imagen:string,
    des:string,
    opciones:string[],
}

const FieldImage:React.FC<FieldImage>=({imagen,des,opciones})=>{
    return(
        <div className="container-fieldimage">
            <img src={imagen} alt={des}></img>
            <select className="select">
                {opciones.map((opcion,key)=>(
                    <option key={key} value={opcion}>{opcion}</option>
                ))}
            </select>

        </div>
    )
}

export default FieldImage;