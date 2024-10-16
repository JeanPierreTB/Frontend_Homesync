import {useState } from "react"
import ComponentHeaderBar from "../../Components/HeaderBar";
import { Departamento } from "../../Intefaces/Departamento";
import "./Pagos.css";

const PagePagos= ()=>{
    const [departamento,setdepartamento]=useState<Departamento>({
        id:1,
        imagen:'https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto.jpg',
        cantidaddehabitaciones:2,
        piso:3,
        aforo:4
    });


    

    return (
        <div className="container-pagos">
            <div className="container-des">
                <img id="pagoimagen" src={departamento.imagen} alt={"Codigo " + departamento.id.toString()}></img>
                <div>
                    <h2>Habitacion Elegante</h2>
                    <p>Cantidad de habitaciones:{departamento.cantidaddehabitaciones}</p>
                    <p>Piso:{departamento.piso}</p>
                    <p>Aforo:{departamento.aforo}</p>
                </div>
                
            </div>


        </div>
    )




}


export default PagePagos;