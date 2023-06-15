import React from "react";

import "./App.css";
import Login from "./component/Login/Login";
import { Routes, Route } from "react-router-dom";
import NotFound from "./component/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login_SignIn" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
