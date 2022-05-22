import './App.css';

import { Register } from './components/organisms/Register/RegisterForm';
import { Header} from './components/organisms/Header/Header';
import Login from './components/pages/Login';
import { CategoriesDesktop } from './components/organisms/Categories/CategoriesDesktop';
import { InputIcon } from "./components/molecules/InputIcon/InputIcon";

function App() {
  return (
    <div>
      {/* <InputIcon
        input={{
          input: { size: "base", palceholder: "Esto es un input con un icon" },
          icon: { icon: "location", width: "md" },
        }}
      />
      <InputIcon input={{size:'base',variant:'primary',palceholder:'Esto es un input con icon'}} icon={{icon:'location',width:'xs',onClick:()=>{}}}/> */}
      <Login />
    </div>
  );
}

export default App;