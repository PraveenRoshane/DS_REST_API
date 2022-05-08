import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes path='/'>
          <Route path='/' element={<Home />} />
          {/*<Route path='/Signin' element={<Signin />} />*/}
          {/*<Route path='/TraderProfile' element={<AddNewTrader />} />*/}
          {/*<Route path='/ManageItems' element={<ManageItems />} />*/}
          {/*<Route path='/ViewItems' element={<ViewItems />} />*/}
          {/*<Route path='/ManagePromotions' element={<ManagePromotions />} />*/}
          {/*<Route path='/AddItems' element={<AddItems />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
