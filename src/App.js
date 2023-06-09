import React from "react";

import "./App.css";
// import SignUp from "./component/Login/Sign_up/SignUp";
import Login from "./component/Login/Login";
import { Routes, Route } from "react-router-dom";
import NotFound from "./component/NotFound/NotFound";
import Nav from "./component/Nav/Nav";
import Home from "./component/Home/Home";
import { useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Houseware from "./component/Houseware/Houseware";
import InlandTransport from "./component/InlandTransport/InlandTransport";
import OutlandTransport from "./component/OutlandTransport/OutlandTransport";
import Rent from "./component/Rent/Rent";
import Detail from "./component/Detail/HousewareDetail"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/Register" element={<Login />}></Route>
          <Route path="/Houseware" element={<Houseware />}></Route>
          <Route path="/Detail" element={<Detail />}></Route>
          <Route path="/InlandTransport" element={<InlandTransport />}></Route>
          <Route
            path="/OutlandTransport"
            element={<OutlandTransport />}
          ></Route>
          <Route path="/Rent" element={<Rent />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
