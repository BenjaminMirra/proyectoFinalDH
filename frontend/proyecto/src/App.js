
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { Home } from "./components/pages/Home";
// import { Login } from './components/pages/Login';
// import { SignUp } from "./components/pages/SignUp";
// import {Product} from './components/pages/Product';

import { Calendar } from './components/molecules/Calendar/Calendar';
import { Calendario } from './components/molecules/CalendarioNuevo/Calendario'

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter> */}
      <Calendar/>

    </div>
  );
}

export default App;