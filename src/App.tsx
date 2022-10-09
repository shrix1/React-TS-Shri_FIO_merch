import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
