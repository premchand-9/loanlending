import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { Loandata } from "./store/slices";
import { useDispatch } from "react-redux";
import Signin from "./Components/user/Signin.js";
import SignUp from "./Components/user/Signup.js";
import Dashboard from "./Components/user/Dashboard";
import ForgotPassword from "./Components/user/forgotpassword";
import Allrequests from "./Components/user/Allrequests";
import MyRequests from "./Components/user/Myrequests";
import Profile from "./Components/user/Profile";
function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    console.log("Method Dispatched");
    dispatch(Loandata());
  }, [dispatch]);
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
          <Route exact path="/allrequests" element={<Allrequests />}></Route>
          <Route exact path="/myrequests" element={<MyRequests />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
