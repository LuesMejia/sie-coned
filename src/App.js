import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import INFOPTABLERO from "./vistas/INFOP";
import SEDUC from "./vistas/SEDUC";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/*<Header />*/}
      <Routes>
        <Route path="/SEDUC" element={<SEDUC />} />
        <Route path="/INFOP" element={<INFOPTABLERO />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
