import React, { useState } from 'react';
import './Login.css';
import Textfield from '../../../Components/Textfield/Textfield';
import Button from '../../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { LoginI } from '../../../Intefaces/LoginI';

const PageLogin = () => {

    const navigate=useNavigate();

    const [datos,setdatos]=useState<LoginI>({
        nombre:"",
        contrasena:""
    });

    const handleclik=()=>{
        localStorage.setItem('usuario', JSON.stringify({ nombre: datos.nombre, contrasena: datos.contrasena }));
        if(datos.nombre==="Admin"){
            return navigate('/solicitudes');
        }
        navigate('/reservas');
    }

    return(
        <div className='container-pagelogin'>
            <div className='container-pagelogin-info'>
                <h1><strong>Inicio de sesion</strong></h1>
                <p>Bienvenido de vuelta! Selecciona el metodo de inicio</p>
                <div className='container-google'>
                    <img src='https://img.icons8.com/?size=512&id=17949&format=png' alt="Google"></img>
                    <p>Inicia sesion con Google</p>
                </div>

                <div className='container-barra-google'>
                    <hr></hr>
                    <p>o continua sin google</p>
                    <hr></hr>
                </div>

                <div className='container-login-inputs'>
                    <Textfield placeholder='Usuario' value="nombre" onchange={(e)=>setdatos({...datos,nombre:e.target.value})} />
                    <Textfield placeholder='Contraseña' value='contrasena' onchange={(e)=>setdatos({...datos,contrasena:e.target.value})} />
                </div>
                
                <p id="olvidar" className='color-gray' onClick={()=>navigate('/olvidar')}>¿Olvidaste tu contraseña?</p>
                <Button nombre='INICIAR SESION' onclick={()=>handleclik()}/>
                <div className='container-cuentas'>
                    <p>No tienes cuenta?</p>
                    <p className='color-gray' onClick={()=>navigate('/registro')}>Create una cuenta</p>
                </div>
            </div>
            <img src='https://img.freepik.com/fotos-premium/edificio-realista-rascacielos-aislado-fondo-blanco-imagen-generada-ia_905368-1224.jpg' alt="icono"></img>

        </div>
    )

}

export default PageLogin;
