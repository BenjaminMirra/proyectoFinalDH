
 import { Routes, Route, BrowserRouter } from "react-router-dom";
 import { Home } from "./components/pages/Home";
 import { Login } from './components/pages/Login';
 import { SignUp } from "./components/pages/SignUp";
 import {Product} from './components/pages/Product';

function App() {
  const text ="Este sencillo hotel se encuentra en una calle residencial arbolada, a 4 minutos a pie de la Catedral de La Plata, a 5 de los jardines de Plaza Moreno y a 2 km de la estación de tren La Plata. \nLas habitaciones, sencillas y con capacidad para 3 personas, cuentan con muebles de madera, Wi‑Fi gratis, televisión por cable y aire acondicionado. \nEl hotel ofrece desayuno gratuito y dispone de un salón en el vestíbulo y una cafetería informal.";
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/productos/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;