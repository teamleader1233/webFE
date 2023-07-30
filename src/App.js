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

import Delivery24h from "./component/Delivery24h/Delivery24h"

import InlandTransport from "./component/InlandTransport/InlandTransport";

import Rent from "./component/Rent/Rent";

import SreachCode from "./component/SearchCode/SreachCode";
import SignIn from "./component/Login/SignIn/SignIn";

import NavHeader from "./component/Nav/NavHeader";
import AboutUs from "./component/AboutUs/AboutUs";
import Logistic from "./component/Logistic/Logistic";
import Order from "./component/Order/Order";
import TrustImports from "./component/TrustImports/TrustImports";
import Clearance_Service from "./component/Clearance-service/ClearanceService";
import ClearanceService from "./component/Clearance-service/ClearanceService";
import Delivery2Way from "./component/Delivery2Way/Delivery2Way";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Nav />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/Register" element={<Login />}></Route>
          <Route path="/Houseware" element={<Houseware />}></Route>
          <Route path="/Detail" element={<Detail />}></Route>
          <Route path="/InlandTransport" element={<InlandTransport />}></Route>
         
          <Route path="/HousewareDetail" element={<HousewareDetail />}></Route>
          <Route path="/Rent" element={<Rent />}></Route>
        </Route> */}
        <Route element={<NavHeader />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/SearchCode" element={<SreachCode />}></Route>
          <Route path="/Login" element={<SignIn isAdmin={true} />}></Route>
          <Route path="/Rent" element={<Rent />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/InlandTransport" element={<InlandTransport />}></Route>

          <Route path="/Delivery24h" element={<Delivery24h/>}></Route>

          <Route path="/About-us" element={<AboutUs />}></Route>
          <Route path="/Logistic" element={<Logistic />}></Route>
          <Route path="/Order" element={<Order />}></Route>
          <Route path="/TrustImports" element={<TrustImports />}></Route>
          <Route
            path="/Clearance_Service"
            element={<ClearanceService />}
          ></Route>
          <Route path="/Delivery2Way" element={<Delivery2Way />}></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
