import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import HotelsHome from "./components/hotels_home/HotelsHome";
import Hotel from "./components/hotel/Hotel";
import AddHotel from "./components/hotel/AddHotel";
import SignIn from "./components/User/SignIn";
import SignUp from "./components/User/SignUp";
import ReserveTaxi from './components/TaxiService/ReserveTaxi';
import ManageTaxi from './components/TaxiService/ManageTaxi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes path='/'>
          <Route path='/' element={<Home />} />
          <Route path='/Signin' element={<SignIn />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/Hotels' element={<HotelsHome />} />
          <Route path='/HotelsAdd' element={<AddHotel />} />
          <Route path='/Hotels/:id' element={<Hotel />} />
          <Route path='/Payment' element={<HotelsHome />} />
          <Route path='/taxiService' element={<ReserveTaxi />} />
          <Route path='/manageTaxi' element={<ManageTaxi />} />
          

          {/*<Route path='/ViewItems' element={<ViewItems />} />*/}
          {/*<Route path='/ManagePromotions' element={<ManagePromotions />} />*/}
          {/*<Route path='/AddItems' element={<AddItems />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
