
//import { Products } from "./components/organisms/Products/Products"
//import { CategoriesDesktop } from "./components/organisms/Categories/CategoriesDesktop"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Login } from './components/pages/Login';
// import { RegisterForm } from './components/pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Register/>} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;