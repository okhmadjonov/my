import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Home from "../../pages/Home/Home";
import Header from "../Header/Header";
import About from "../../pages/About/About";
import Lookbook from "../../pages/Lookbook/Lookbook";
import Catalog from "../../pages/Catalog/Catalog";
import Information from "../../pages/Information/Information";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/information" element={<Information />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
