import './App.css';

//import Login from './components/pages/Login';
//import { InputIcon } from './components/molecules/InputIcon/InputIcon';
import { DropPlaces } from './components/molecules/DropPlaces/DropPlaces';

function App() {
  return (
    <div>
      {/* <Login></Login> */}
      <DropPlaces select = {{size:"20px", placeholder:"¿A dónde vamos?"}} icon = {{width:"lg" , icon:"location"}}/>
      {/*<InputIcon input ={{size:"base" , variant:"secondary" , placeholder:"hola"}}
        icon={{width:"sm" , icon:"user"}}/>*/}
    </div>
  );
}

export default App;