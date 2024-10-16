import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PagePagos from './Pages/Pagos/Pagos';
import PageLogin from './Pages/Gestion de usuario/Login';

function App() {
  return (
    <Router> {/* Agrega el Router aquí */}
      <div className="App">
        <Routes>
          <Route path="/" element={<PageLogin/>} />
          <Route path="/pagos" element={<PagePagos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

