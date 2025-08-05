import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import PowerBIView from "./vistas/Repitencias";
import Centros from './vistas/CentrosEducativos'
import SEDUC from "./vistas/SEDUC";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/powerbi" element={<PowerBIView />} />
        <Route path="/Centros_Educativos" element={<Centros />} />
        <Route path="/SEDUC" element={<SEDUC />} />
      </Routes>
      {/*<Footer /><Header />*/}
    </div>
  );
}

export default App;
