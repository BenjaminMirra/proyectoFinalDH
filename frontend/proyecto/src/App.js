
//import { Products } from "./components/organisms/Products/Products"
//import { CategoriesDesktop } from "./components/organisms/Categories/CategoriesDesktop"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Login } from './components/pages/Login';
import { SignUp } from "./components/pages/SignUp";
import { DesktopHeader } from "./components/organisms/Header/Versions/DesktopHeader";
import { MobileHeader } from "./components/organisms/Header/Versions/MobileHeader";
// import {MobileFilter} from './components/organisms/Filter/Versions/MobileFilter'
import { TabletFilter } from "./components/organisms/Filter/Versions/TabletFilter";
import { DesktopFilter } from "./components/organisms/Filter/Versions/DesktopFilter";
import { CalendarDrop } from "./components/molecules/DropCalendar/CalendarDrop";
import {Filter} from './components/organisms/Filter/Filter'
// import { RegisterForm } from './components/pages/Register';
import {Product} from './components/pages/Product'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;