import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageCapital from './Pages/Gestion de capital/Capital';
import PageLogin from './Pages/Gestion de usuario/Inicio_sesion/Login';
import PageJunta from './Pages/Junta de inquilinos/Junta';
import PageNotificaciones from './Pages/Notificaciones/Notificaciones';
import PagePagos from './Pages/Pagos/Pagos';
import PageReservas from './Pages/Reservas/Reservas';
import PageSolicitudes from './Pages/Solicitudes/Gestion_solicitudes/Solicitudes';
import PageOlvidar from './Pages/Gestion de usuario/Olvidar_contrasena/Olvidar';
import PageRegistro from './Pages/Gestion de usuario/Registro/Registro';
import PageAgregar_solicitudes from './Pages/Solicitudes/Agregar_solicitudes/Agregar_solicitudes';
import PagePagar_solicitud from './Pages/Solicitudes/Pagar_solicitud/Pagar_solicitud';
import PageCalificar_Servicio from './Pages/Solicitudes/Calificar_servicio/Calificar_servicio';
import PageDetalles_solicitudes from './Pages/Solicitudes/Detalles_solicitudes/Detalles_solicitudes';



function App() {
  return (
    <Router> 
      <div className="App">
        <Routes>
          <Route path="/" element={<PageLogin/>} />
          <Route path='/olvidar' element={<PageOlvidar/>}/>
          <Route path='/registro' element={<PageRegistro/>}/>
          <Route path='/capital' element={<PageCapital/>}/>
          <Route path='/junta' element={<PageJunta/>}/>
          <Route path='/notificaciones' element={<PageNotificaciones/>}/>
          <Route path="/pagos" element={<PagePagos />} />
          <Route path='/reservas' element={<PageReservas/>}/>
          <Route path='/solicitudes' element={<PageSolicitudes/>}/>
          <Route path='/agregar-solicitud' element={<PageAgregar_solicitudes/>}/>
          <Route path='/pagar-solicitud' element={<PagePagar_solicitud/>}/>
          <Route path='/calificar-servicio' element={<PageCalificar_Servicio/>}/>
          <Route path='/ver-detalles' element={<PageDetalles_solicitudes/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

