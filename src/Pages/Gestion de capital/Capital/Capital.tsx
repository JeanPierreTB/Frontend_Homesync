import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import FieldImage from "../../../Components/FieldImage/FieldImage";
import ComponentHeaderBar from "../../../Components/HeaderBar/HeaderBar";
import Leftbar from "../../../Components/Leftbar/Leftbar";
import "./Capital.css";
import { LoginI } from "../../../Intefaces/LoginI";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PageCapital = () => {
  const [rol, setRol] = useState<number>();
  const [gastosData, setGastosData] = useState<number[]>([]);
  const [visitasData, setVisitasData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (usuario !== null) {
      const usuarioObj= JSON.parse(usuario);
      if (usuarioObj.rol === "Admin") setRol(0);
      else setRol(1);
    }

    setLabels(["Enero", "Febrero", "Marzo", "Abril", "Mayo"]);
    setGastosData([500, 700, 400, 800, 600]); 
    setVisitasData([20, 35, 25, 40, 30]); 
  }, []);

  const gastosOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
  };

  const visitasOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
  };

  const gastosDataset = {
    labels,
    datasets: [
      {
        label: "Gastos ($)",
        data: gastosData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.3)", 
        borderWidth: 3, 
        tension: 0.4,
        pointBackgroundColor: "rgba(255, 99, 132, 1)", 
        pointBorderColor: "#fff",
        pointRadius: 5,
      },
    ],
  };
  

  const visitasDataset = {
    labels,
    datasets: [
      {
        label: "Visitas",
        data: visitasData,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };

  return (
    <div className="container-capital">
      <ComponentHeaderBar nombre="Analiticas departamento" />
      <div className="filtros-container-capital">
        <FieldImage
          imagen="https://cdn-icons-png.flaticon.com/512/1018/1018525.png"
          des="departamento"
          opciones={["Departamento 1", "Departamento 2"]}
        />
        <FieldImage
          imagen="https://img.freepik.com/vector-premium/icono-piso_535345-3738.jpg"
          des="piso"
          opciones={["Piso 1", "Piso 2", "Piso 3", "Piso 4", "Piso 5"]}
        />
        <FieldImage
          imagen="https://w7.pngwing.com/pngs/647/460/png-transparent-computer-icons-open-person-family-icon-black-silhouette-black-white-people-thumbnail.png"
          des="persona"
          opciones={["1", "2", "3", "4"]}
        />
      </div>
      <div className="contenido-container-capital">
        <Leftbar rol={rol} />
        <div className="container-capital-gastos">
          <p>
            <strong>Gastos</strong>
          </p>
          <Line data={gastosDataset} options={gastosOptions}/>
        </div>

        <div className="container-capital-visitas">
          <p>
            <strong>Visitas</strong>
          </p>
          <Line data={visitasDataset} options={visitasOptions} />
        </div>
      </div>
    </div>
  );
};

export default PageCapital;
