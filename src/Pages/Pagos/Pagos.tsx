import {useEffect, useState } from "react"
import { Departamento } from "../../Intefaces/Departamento";
import "./Pagos.css";
import ComponentHeaderBar from "../../Components/HeaderBar/HeaderBar";
import { FaArrowLeft } from 'react-icons/fa'; 
import { useNavigate } from "react-router-dom";


const PagePagos= ()=>{

    const navigate=useNavigate();

    const [departamento,setdepartamento]=useState<Departamento>({
        id:0,
        imagen:"",
        precio:0,
        descripcion:"",
        numero_habitaciones:0,
        piso:0,
        aforo:0,
        
    });


    useEffect(()=>{
        const datos_departamento=localStorage.getItem('departamento');
        if (datos_departamento) {
            const departamentoParsed: Departamento = JSON.parse(datos_departamento);
            setdepartamento(departamentoParsed);
        }
        
        
    },[])
    

    return (
        <div className="container-pagos">
            <ComponentHeaderBar nombre="Alquilar departamento"/>
            <div className="container-info-pagos">
                <FaArrowLeft style={{cursor:'pointer'}} size={30} onClick={()=>navigate('/reservas')} />
                <div className="container-des">
                <img id="pagoimagen" src={departamento.imagen} alt={"Codigo " + departamento.id.toString()}></img>

                <div className="container-departamento-pago-info">
                    <h2>{departamento.descripcion}</h2>
                    <p>Cantidad de habitaciones:{departamento.numero_habitaciones}</p>
                    <p>Piso:{departamento.piso}</p>
                    <p>Aforo:{departamento.aforo}</p>
                    <p>Monto:S/{departamento.precio}</p>
                    <div className="container-pagos-tarjetas">
                        <p><strong>Tipos de pago</strong></p>
                        <div className="container-pagos-tarjetas-imagen">
                            <img src="https://play-lh.googleusercontent.com/gBpVaCpZsbBrLufT06aRpuLQvsUq1KAZUCEof_ps76mtB8_llJg3xv24mey8I0m3dUE=w240-h480-rw" alt="BCP"></img>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-YbiyLYyImtiqdlFMTWQWt60TZWm2chkrA&s" alt="Izipay"></img>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOL5U0fXWe7o7BL274TqnieI1Kqr3OrEjVA&s" alt="Culqui"></img>
                        </div>
                    </div>
                </div>

                </div>
                
            </div>


        </div>
    )




}


export default PagePagos;