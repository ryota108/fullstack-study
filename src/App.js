import './App.css';
import {Routes,Route} from "react-router-dom";
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

function App() {
  return (
    <Routes>
   <Route path="/" element={<p>Hello!</p>}/>   
   <Route path="/places/new" element={<NewPlace/>}/> 
   <Route path="/users" element={<Users/>}/> 
    </Routes>
  );
}

export default App;
