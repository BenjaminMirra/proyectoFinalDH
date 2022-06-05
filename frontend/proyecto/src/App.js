
 import { Routes, Route, BrowserRouter } from "react-router-dom";
 import { Home } from "./components/pages/Home";
 import { Login } from './components/pages/Login';
 import { SignUp } from "./components/pages/SignUp";
 import {Product} from './components/pages/Product';

function App() {
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