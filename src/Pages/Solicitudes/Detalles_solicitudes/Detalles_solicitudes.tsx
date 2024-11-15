import { useNavigate } from "react-router-dom";
import ComponentHeaderBar from "../../../Components/HeaderBar/HeaderBar";
import "./Detalles_solicitudes.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { LoginI } from "../../../Intefaces/LoginI";
import Button from "../../../Components/Button/Button";


const PageDetalles_solicitudes=()=>{

    const navigate=useNavigate();
    const [rol,setrol]=useState<number>();

    const datos=[
        {
            id:1,
            fecha:"20/6/24",
            descripcion:"Reparacion de luz",
            tipo:"Precio estandar",
        },{
            id:2,
            fecha:"11/6/24",
            descripcion:"Reparacion de luz",
            tipo:"Precio alto",
        },{
            id:3,
            fecha:"11/6/24",
            descripcion:"Reparacion de luz",
            tipo:"Precio alto",
        }
        ,{
            id:4,
            fecha:"11/6/24",
            descripcion:"Reparacion de luz",
            tipo:"Precio alto",
        }
        ,{
            id:4,
            fecha:"11/6/24",
            descripcion:"Reparacion de luz",
            tipo:"Precio alto",
        }
    ]

    useEffect(()=>{
        const usuario=localStorage.getItem('usuario');
        if (usuario !== null) {
          const usuarioObj: LoginI = JSON.parse(usuario);
          
          if (usuarioObj.nombre === "Admin") setrol(0);
    
          else setrol(1);
          
          
      }
    },[]);

    const Pagecontenido = () => {
        if (rol === undefined) {
            return null;
        }
    
        return (
            rol === 1 ? (
                <>
                    <div className="container-detalles-solicitudes-datos1">
                        <p><strong>Fecha de solicitud:</strong> 4/7/24</p>
                        <p><strong>Descripcion:</strong> Se está presentando problemas últimamente con la luz, se apaga y se prende por momentos</p>
                        <p><strong>Fecha estimada: </strong> 10/07/24</p>
                        <p><strong>Precio: </strong> Precio normal</p>
                    </div>
                    <div className="container-detalles-solicitudes-datos2">
                        <p><strong>Prestado del servicio:</strong> Luis Carlos Jose</p>
                        <img src="https://img.freepik.com/fotos-premium/electricista-esta-reparando-luces-departamento-recientemente-renovado_114016-5972.jpg" alt="Reparación de luz" />
                    </div>
                </>
            ) : (
                <>
                    <div className="container-detalles-solicitudes-datos1">
                        <p><strong>Fecha de solicitud:</strong> 4/7/24</p>
                        <p><strong>Descripcion:</strong> Se está presentando problemas últimamente con la luz, se apaga y se prende por momentos</p>
                        <div className="container-detalles-solicitudes-datos1-tipo">
                            <p><strong>Tipos de pago</strong></p>
                        </div>
                        
                        <div className="container-detalles-solicitudes-datos1-botones">
                            <Button nombre="Precio estándar" onclick={() => navigate('/proveedores')} />
                            <Button nombre="Precio Alto" onclick={() => navigate('/proveedores')} color="red" />
                        </div>
                        
                    </div>
                    <div className="container-detalles-solicitudes-datos2">
                        <p><strong>Lista de anteriores solicitudes</strong></p>
                        <div className="container-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Descripcion</th>
                                        <th>Tipo de pago</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datos.map(data => (
                                        <tr key={data.id}>
                                            <td>{data.fecha}</td>
                                            <td>{data.descripcion}</td>
                                            <td>{data.tipo}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )
        );
    };
    

    return(
        <div className="container-detalles-solicitudes">
            <ComponentHeaderBar nombre="Detalles de la solicitud"/>
            <FaArrowAltCircleLeft style={{ cursor: 'pointer' }} onClick={()=>navigate('/solicitudes')} size={30} />
            <div className="container-detalles-solicitudes-info">
                {Pagecontenido()}
                

            </div>
        </div>
    )

}


export default PageDetalles_solicitudes;