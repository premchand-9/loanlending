import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Signin from "./Components/user/Signin.js";
import SignUp from "./Components/user/Signup.js";
import Dashboard from "./Components/user/Dashboard";
import ForgotPassword from "./Components/user/ForgotPassword";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signin />}></Route>
          <Route exact path="/Signup" element={<SignUp />}></Route>
          <Route exact path="/Dashboard" element={<Dashboard />}></Route>
          <Route
            exact
            path="/forgotpassword"
            element={<ForgotPassword />}
          ></Route>
          <Route
            exact
            path="/allrequests"
            element={<Dashboard value="allrequests" />}
          ></Route>
          <Route
            exact
            path="/myrequests"
            element={<Dashboard value="myrequests" />}
          ></Route>
          <Route
            exact
            path="/profile"
            element={<Dashboard value="profile" />}
          ></Route>
          <Route
            exact
            path="/applyforloan"
            element={<Dashboard value="applyforloan" />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
