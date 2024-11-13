import { useNavigate } from "react-router-dom";
import "./CHabitacion.css";

interface CHabitacionI {
  departamento: {
    id: number;
    imagen: string;
    precio: number;
    descripcion: string;
    numero_habitaciones:number;
    piso:number;
    aforo:number;
  };
}

const CHabitacion: React.FC<CHabitacionI> = ({ departamento }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("departamento", JSON.stringify(departamento));
    navigate("/pagos");
  };

  return (
    <div className="container-chabitacion">
      <img src={departamento.imagen} alt={departamento.descripcion} onClick={handleClick} />
      <p>Precio: S/{departamento.precio}</p>
      <p>{departamento.descripcion}</p>
    </div>
  );
};

export default CHabitacion;
