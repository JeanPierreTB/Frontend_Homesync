import {FaArrowCircleLeft } from "react-icons/fa";
import ComponentHeaderBar from "../../../Components/HeaderBar/HeaderBar";
import "./Pagar_solicitud.css";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../../../Components/Button/Button";


const stripePromise=loadStripe("pk_test_51QPNjuA5p2dd6vrREzZEfkoTx2K2aqTi3haVWtmH6RsA88Z2OhZ8ViUm9BfDC5oVOqCT9vm6726RnTHOrZkhRgw8002j7pFLKu");

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (e: React.FormEvent) => {
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
        const { id } = paymentMethod;
        // Aquí puedes hacer una llamada a tu API con el ID del método de pago
      } else {
        console.error("Error:", error);
      }
    };

    return (
      <form
        style={{ width: '20rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        onSubmit={handleSubmit}
        autoComplete="off" 
      >
        <div>
          <CardElement className="card-element" />
        </div>
        
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', width: '20rem' }}>
          <Button width="12rem" nombre="Pagar" color="red" onclick={() => alert("Pago")} />
        </div>
      </form>
    );
};


const PagePagar_solicitud=()=>{

    const navigate=useNavigate();

    return (
        <div className="container-pagepagar-solicitud">
            <ComponentHeaderBar nombre="Datos de la solicitud"/>
            <div className="container-pagepagar-solicitud-info">
                <FaArrowCircleLeft style={{cursor:'pointer'}} size={30} onClick={()=>navigate('/solicitudes')}/>
                <div className="container-pagepagar-solicitud-datos">
                    <div className="container-pagepagar-solicitud-datos1">
                        <p><strong>Fecha de solicitud:</strong> 4/7/24</p>
                        <p><strong>Descripcion:</strong> Se esta presentando probelmas ultimanente con la luz,se apaga y se prende por momenetos</p>
                        <p><strong>Tipo:</strong> Reparacion</p>
                        <p><strong>Estado:</strong> No pagado</p>
                    </div>

                    <div className="container-pagepagar-solicitud-datos2">
                        <p><strong>Monto</strong></p>
                        <p>S/600</p>
                        <p><strong>Tipos de pagos</strong></p>
                        <div className="container-pagos-tarjetas-imagen">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default PagePagar_solicitud;