import './App.css';
import { Products } from "./components/organisms/Products/Products"
import { CategoriesDesktop } from "./components/organisms/Categories/CategoriesDesktop"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home";
import Login from './components/pages/Login';

function App() {
  return (
    // <div>
    //  <CategoriesDesktop/> 
    //  <Products/>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/register" element={} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;