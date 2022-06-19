import React,{useState} from 'react'
 import { Routes, Route, BrowserRouter } from "react-router-dom";
 import { Home } from "./components/pages/Home";
 import { Login } from './components/pages/Login';
 import { SignUp } from "./components/pages/SignUp";
 import {Product} from './components/pages/Product';
import {Mapa} from './components/pages/Mapa'
import {Reserve} from './components/pages/Reserve'
import { SuccessBooking } from "./components/pages/SuccessBooking";
import {Favorite} from './components/pages/Favorite'
function App() {
  const [failReserve,setFailReserve] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/login"
            element={
              <Login
                setFailReserve={setFailReserve}
                failReserve={failReserve}
              />
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/productos/:id" element={<Product />} />
          <Route
            path="/productos/:id/reserva"
            element={<Reserve setFailReserve={setFailReserve} />}
          ></Route>
          <Route path="/mapa" element={<Mapa />}></Route>
          <Route path="/reserva-exitosa" element={<SuccessBooking />}></Route>
          <Route path='/favoritos' element={<Favorite/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;