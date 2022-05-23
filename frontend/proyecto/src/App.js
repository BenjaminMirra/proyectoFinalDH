import './App.css';
import { Products } from "./components/organisms/Products/Products"
import { CategoriesDesktop } from "./components/organisms/Categories/CategoriesDesktop"

function App() {
  return (
    <div>
     <CategoriesDesktop/> 
     <Products/>
    </div>
  );
}

export default App;