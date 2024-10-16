import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageCapital from './Pages/Gestion de capital/Capital';
import PageLogin from './Pages/Gestion de usuario/Login';
import PageJunta from './Pages/Junta de inquilinos/Junta';
import PageNotificaciones from './Pages/Notificaciones/Notificaciones';
import PagePagos from './Pages/Pagos/Pagos';
import PageReservas from './Pages/Reservas/Reservas';
import PageSolicitudes from './Pages/Solicitudes/Solicitudes';



function App() {
  return (
    <Router> 
      <div className="App">
        <Routes>
          <Route path="/" element={<PageLogin/>} />
          <Route path='/capital' element={<PageCapital/>}/>
          <Route path='/junta' element={<PageJunta/>}/>
          <Route path='/notificaciones' element={<PageNotificaciones/>}/>
          <Route path="/pagos" element={<PagePagos />} />
          <Route path='/reservas' element={<PageReservas/>}/>
          <Route path='/solicitudes' element={<PageSolicitudes/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

