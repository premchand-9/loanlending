import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { Loandata } from "./store/slices";
import { useDispatch } from "react-redux";
import Signin from "./Components/user/Signin.js";
import Dashboard from "./Components/user/Dashboard.js";
function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    console.log("Method Dispatched");
    dispatch(Loandata());
  }, [dispatch]);
  return (
    <div>
      <Signin />
    </div>
  );
}

export default App;
