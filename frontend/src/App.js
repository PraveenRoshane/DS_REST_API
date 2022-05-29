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
import UpdateHotel from "./components/hotel/UpdateHotel";
import MyHotels from "./components/hotel/MyHotels";
import MyReservations from "./components/reservation/MyReservations";
import Payment from './components/Payment/Payment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes path='/'>
          <Route path='/' element={<Home />} />
          <Route path='/Signin' element={<SignIn />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/Hotels' element={<HotelsHome />} />
          <Route path='/MyHotels' element={<MyHotels />} />
          <Route path='/MyReservations' element={<MyReservations />} />
          <Route path='/HotelsAdd' element={<AddHotel />} />
          <Route path='/Hotels/:id' element={<Hotel />} />
          <Route path='/Hotels/update/:id' element={<UpdateHotel />} />
          <Route path='/Payment/:amount' element={<Payment />} />
          <Route path='/taxiService' element={<ReserveTaxi />} />
          <Route path='/manageTaxi' element={<ManageTaxi />} />
          <Route path='/payment' element={<Payment />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
