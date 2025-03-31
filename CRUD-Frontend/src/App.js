
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './Create';
import Navbarr from './Nav';
import Users from './Users';
import AddData from './AddData';
import Edit from "./Update"
import SignUp from './SignUp';
import LogIn from './LogIn';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbarr></Navbarr>
     <Routes>
       <Route path='/' element={<LogIn></LogIn>}></Route>
       <Route path='/user' element={<Users></Users>}></Route>
       <Route path='/create' element={<Create></Create>}></Route>
       <Route path='/add-data' element={<AddData></AddData>}></Route>
       <Route path='/edit/:id' element={<Edit></Edit>}></Route>
       <Route path='/signup/' element={<SignUp></SignUp>}></Route>
       <Route path='/login/' element={<LogIn></LogIn>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
