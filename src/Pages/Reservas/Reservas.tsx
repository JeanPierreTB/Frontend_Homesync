import React, { useEffect, useState } from "react";
import CHabitacion from "../../Components/CHabitacion/CHabitacion";
import FieldImage from "../../Components/FieldImage/FieldImage";
import ComponentHeaderBar from "../../Components/HeaderBar/HeaderBar";
import Leftbar from "../../Components/Leftbar/Leftbar";
import "./Reservas.css";
import { LoginI } from "../../Intefaces/LoginI";

const PageReservas = () => {
  const departamentos = [
    { id: 1, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 2000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 2, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 2000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 3, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 2000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 4, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 2000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 5, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 2000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 6, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 2000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 7, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 2000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 8, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 2000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 9, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 10, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 11, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 12, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 13, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 14, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 15, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 16, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 17, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 18, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 19, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 20, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 21, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 22, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 23, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 24, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },
    { id: 25, imagen: "https://i.pinimg.com/originals/83/44/ab/8344abb350cfba6ec9c379f1ed49c6b4.jpg", precio: 4000, descripcion: "Habitacion basica", numero_habitaciones: 2, piso: 1, aforo: 3 },

  ];

  const itemsPerPage = 8; 
  const [currentPage, setCurrentPage] = useState(1); 
  const [rol,setrol]=useState<number>();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDepartments = departamentos.slice(startIndex, endIndex);

  const totalPages = Math.ceil(departamentos.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  useEffect(()=>{
    const usuario=localStorage.getItem('usuario');
    if (usuario !== null) {
      const usuarioObj: LoginI = JSON.parse(usuario);
      
      if (usuarioObj.nombre === "Admin") setrol(0);

      else setrol(1);
      
      
  }
    
  },[])

  return (
    <div className="container-pagereservas">
      <ComponentHeaderBar nombre="Reservar departamento" />
      <div className="container-filtros">
        <FieldImage imagen="https://cdn-icons-png.flaticon.com/256/33/33919.png" des="Soles" opciones={["1000-2000", "2001-3000", "3001-4000"]} />
        <FieldImage imagen="https://w7.pngwing.com/pngs/647/460/png-transparent-computer-icons-open-person-family-icon-black-silhouette-black-white-people-thumbnail.png" des="Personas" opciones={["1-2", "3-4", "5-6"]} />
        <FieldImage imagen="https://e7.pngegg.com/pngimages/992/752/png-clipart-bedroom-hotel-computer-icons-mattresse-kitchen-furniture.png" des="Habitacion" opciones={["1-2", "3-4", "5-6"]} />
        <FieldImage imagen="https://img.freepik.com/vector-premium/icono-piso_535345-3738.jpg" des="Piso" opciones={["1", "2", "3", "4", "5"]} />
        <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
      </div>

      

      <div className="container-pagereservas-info">
        <Leftbar rol={rol}/>
        <div className="container-pagoreservas-reservas">
          {currentDepartments.map((departamento) => (
            <CHabitacion key={departamento.id} departamento={departamento} />
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default PageReservas;
