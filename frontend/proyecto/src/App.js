import './App.css';
//import { Products } from "./components/organisms/Products/Products"
//import { CategoriesDesktop } from "./components/organisms/Categories/CategoriesDesktop"
import { CalendarDrop } from './components/molecules/DropCalendar/CalendarDrop';
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { Home } from "./components/pages/Home";
// import { Login } from './components/pages/Login';
// import { RegisterForm } from './components/pages/Register';

function App() {
  return (
    <div>
    <CalendarDrop />
    </div>

    //   <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />}/>
    //     <Route path="/login" element={<Login />} />
    //     {/* <Route path="/register" element={<Register/>} /> */}
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;