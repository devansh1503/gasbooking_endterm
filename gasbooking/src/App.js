import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Auth from './pages/Auth';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Useroptions from './components/Useroptions';
import MakeOrder from './pages/MakeOrder';
import Orderhistory from './pages/Orderhistory';
import Allcustomers from './pages/Allcustomers';
import AllOrders from './pages/AllOrders';
import Inventory from './pages/Inventory';
import Userdashboard from './pages/Userdashboard';
function App() {
  const[isLoggedIn, setLogin] = useState(false)
  const[userOpts, setUserOpts] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem('currGasUser')){
      setLogin(true)
    }
  },[])
  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setUserOpts={setUserOpts} userOpts={userOpts}></Navbar>
      {userOpts && <Useroptions></Useroptions>}
      <Routes>
        <Route path='/' element={<Home setUserOpts={setUserOpts}></Home>}></Route>
        <Route path='/auth' element={<Auth setUserOpts={setUserOpts} setLogin={setLogin}></Auth>}></Route>
        <Route path='/register' element={<Register setUserOpts={setUserOpts}></Register>}></Route>
        <Route path='/login' element={<Login setUserOpts={setUserOpts} setLoggedIn={setLogin}></Login>}></Route>
        <Route path='/order' element={<MakeOrder></MakeOrder>}></Route>
        <Route path='/orderHistory' element={<Orderhistory></Orderhistory>}></Route>
        <Route path='/customers' element={<Allcustomers></Allcustomers>}></Route>
        <Route path='/orders' element={<AllOrders></AllOrders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/userDashboard' element={<Userdashboard></Userdashboard>}></Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
