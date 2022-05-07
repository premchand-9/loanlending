import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { Loandata } from "./store/slices";
import { useDispatch } from "react-redux";
import Signin from "./Components/user/Signin.js";
import Signup from "./Components/user/Signup.js";
import Dashboard from "./Components/user/Dashboard";
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
          <Route
            exact
            path="/"
            element={ <Signin />}
          ></Route>
         <Route
            exact
            path="/Signup"
            element={ <Signup />}
          ></Route>
          <Route
          exact 
          path="/User/Dashboard"
          element={<Dashboard value="dashboard"/>}
          ></Route>
          <Route
            exact
            path="/User/Profile"
            element={<Dashboard value="profile" />}
          ></Route>
           <Route
            exact
            path="/User/Myrequests"
            element={<Dashboard value="myrequests" />}
          ></Route>
           <Route
            exact
            path="/User/Allrequests"
            element={<Dashboard value="allrequests" />}
          ></Route>

          </Routes>

          </Router>
     
    </div>
  );
}

export default App;
