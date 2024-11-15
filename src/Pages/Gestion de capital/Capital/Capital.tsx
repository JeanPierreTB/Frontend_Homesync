import { useEffect, useState } from "react";
import FieldImage from "../../../Components/FieldImage/FieldImage";
import ComponentHeaderBar from "../../../Components/HeaderBar/HeaderBar";
import Leftbar from "../../../Components/Leftbar/Leftbar";
import "./Capital.css";
import { LoginI } from "../../../Intefaces/LoginI";

const PageCapital= ()=>{

    const [rol,setrol]=useState<number>();

    useEffect(()=>{
        const usuario=localStorage.getItem('usuario');
        if (usuario !== null) {
          const usuarioObj: LoginI = JSON.parse(usuario);
          
          if (usuarioObj.nombre === "Admin") setrol(0);
    
          else setrol(1);
          
          
      }
    },[]);

    return (
        <div className="container-capital">
            <ComponentHeaderBar nombre="Analiticas departamento"/>
            <div className="filtros-container-capital">
                <FieldImage imagen="https://cdn-icons-png.flaticon.com/512/1018/1018525.png" des="departamento" opciones={["Departamento 1","Departamento 2"]}/>
                <FieldImage imagen="https://img.freepik.com/vector-premium/icono-piso_535345-3738.jpg" des="piso" opciones={["Piso 1","Piso 2","Piso 3","Piso 4","Piso 5"]}/> 
                <FieldImage imagen="https://w7.pngwing.com/pngs/647/460/png-transparent-computer-icons-open-person-family-icon-black-silhouette-black-white-people-thumbnail.png" des="persona" opciones={["1","2","3","4"]}/>
            </div>
            <div className="contenido-container-capital">
                <Leftbar rol={rol}/>
                <div className="container-capital-gastos">
                    <p><strong>Gastos</strong></p>
                    <img src="https://www.tendencias.kpmg.es/wp-content/uploads/2020/11/graficos_inflacion_v01_IPC-General-1024x701.jpg" alt="Imagen1"></img>
                </div>

                <div className="container-capital-visitas">
                    <p><strong>Visitas</strong></p>
                    <img src="https://www.tendencias.kpmg.es/wp-content/uploads/2020/11/graficos_inflacion_v01_IPC-General-1024x701.jpg" alt="Imagen2"></img>
                </div>
            </div>
        </div>
    )
}


export default PageCapital;