import FieldImage from "../../Components/FieldImage/FieldImage";
import ComponentHeaderBar from "../../Components/HeaderBar/HeaderBar";
import Leftbar from "../../Components/Leftbar/Leftbar";
import "./Reservas.css"

const PageReservas= ()=>{
    return (
        <div className="container-pagereservas">
            <ComponentHeaderBar nombre="Reservar departamentos"/>
            <div className="container-filtros">
                <FieldImage 
                    imagen="https://cdn-icons-png.flaticon.com/256/33/33919.png" 
                    des="Soles" 
                    opciones={["1000-2000","2000-3000","3000-4000"]} 
                />

            </div>
            <div className="container-pagereservas-info">
                <Leftbar/>

                <p>Hola</p>
            </div>
            
        </div>
    )
}

export default PageReservas;