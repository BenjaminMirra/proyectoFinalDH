
 import { Routes, Route, BrowserRouter } from "react-router-dom";
 import { Home } from "./components/pages/Home";
 import { Login } from './components/pages/Login';
 import { SignUp } from "./components/pages/SignUp";
 import {Product} from './components/pages/Product';
 import {NotLogin} from './components/pages/NotLogin';

import {Mapa} from './components/pages/Mapa'
import {ExitoReserva} from './components/pages/ExitoReserva'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/notlogin" element={<NotLogin />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/productos/:id" element={<Product />} />
          <Route path="/mapa" element={<Mapa/>} ></Route>
          <Route path="/reserva/ok" element={<ExitoReserva/>} ></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;