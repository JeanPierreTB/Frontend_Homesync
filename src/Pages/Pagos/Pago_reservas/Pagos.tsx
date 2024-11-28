import { useEffect, useState } from "react";
import { Departamento } from "../../../Intefaces/Departamento";
import "./Pagos.css";
import ComponentHeaderBar from "../../../Components/HeaderBar/HeaderBar";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../../../Components/Button/Button";

const stripePromise = loadStripe("pk_test_51QPNjuA5p2dd6vrREzZEfkoTx2K2aqTi3haVWtmH6RsA88Z2OhZ8ViUm9BfDC5oVOqCT9vm6726RnTHOrZkhRgw8002j7pFLKu");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe.js has not loaded yet.");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      console.error("CardElement not found.");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (!error) {
        console.log("PaymentMethod:", paymentMethod);
        alert("Pago exitoso");
        const {id}=paymentMethod;
        
    } else {
      console.error("Error:", error);
      
    }
  };

  return (
    <form style={{width:'20rem',display:'flex',flexDirection:'column',gap:'1rem'}} onSubmit={handleSubmit}>
    <div>
      <CardElement className="card-element" />
    </div>
   
    <div style={{display:"flex",justifyContent:'center',alignItems:'center',width:'20rem'}}>
      <Button width="12rem" nombre="Pagar" color="red" onclick={()=>alert("Pago")} />
    </div>
  </form>
            
          

  );
};

const PagePagos = () => {
  const navigate = useNavigate();

  const [departamento, setDepartamento] = useState<Departamento>({
    id: 0,
    imagen: "",
    precio: 0,
    descripcion: "",
    numero_habitaciones: 0,
    piso: 0,
    aforo: 0,
  });

  useEffect(() => {
    const datos_departamento = localStorage.getItem("departamento");
    if (datos_departamento) {
      const departamentoParsed: Departamento = JSON.parse(datos_departamento);
      setDepartamento(departamentoParsed);
    }
  }, []);

  return (
    <div className="container-pagos">
      <ComponentHeaderBar nombre="Alquilar departamento" />
      <div className="container-info-pagos">
        <FaArrowCircleLeft style={{ cursor: "pointer" }} size={30} onClick={() => navigate("/reservas")} />
        <div className="container-des">
          <img id="pagoimagen" src={departamento.imagen} alt={"Codigo " + departamento.id.toString()} />

          <div className="container-departamento-pago-info">
            <h2>{departamento.descripcion}</h2>
            <p>Cantidad de habitaciones: {departamento.numero_habitaciones}</p>
            <p>Piso: {departamento.piso}</p>
            <p>Aforo: {departamento.aforo}</p>
            <p>Monto: S/ {departamento.precio}</p>
            <div className="container-pagos-tarjetas">
              <p>
                <strong>Tipos de pago</strong>
              </p>
              <div className="container-pagos-tarjetas-imagen">
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePagos;
