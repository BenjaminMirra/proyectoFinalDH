
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Login } from './components/pages/Login';
import { SignUp } from "./components/pages/SignUp";
//import { Bloque } from './components/organisms/Bloque/Bloque'
import { BloqueCalendar } from './components/organisms/BloqueCalendar/BloqueCalendar'


function App() {
  return (
    <>
      <BloqueCalendar/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;