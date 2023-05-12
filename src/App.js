import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products/:id" element={<Products />}></Route>
      </Routes>
    </>
  );
}

export default App;
