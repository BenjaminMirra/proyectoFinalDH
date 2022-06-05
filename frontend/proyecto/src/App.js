
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Login } from './components/pages/Login';
import { SignUp } from "./components/pages/SignUp";
import { Product } from './components/pages/Product';
import { Calendario } from './components/molecules/CalendarioNuevo/Calendario'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/calendario" element={<Calendario />} />
        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;