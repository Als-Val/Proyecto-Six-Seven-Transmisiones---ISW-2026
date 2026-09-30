import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Agenda from './pages/Agenda';
import Auspicios from './pages/Auspicios';
import Financiero from './pages/Financiero';
import Inventario from './pages/Inventario';
import Personal from './pages/Personal';
import Tablero from './pages/Tablero';
import Usuarios from './pages/Usuarios';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/auspicios" element={<Auspicios />} />
        <Route path="/financiero" element={<Financiero />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/tablero" element={<Tablero />} />
        <Route path="/usuarios" element={<Usuarios />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;