import "./App.css";
import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { Loandata } from "./store/slices";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  useEffect(() => {
    console.log("Method Dispatched");
    dispatch(Loandata());
  }, [dispatch]);
  return <div className="App"></div>;
}

export default App;
