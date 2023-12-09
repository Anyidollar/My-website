import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./pages/HomePage/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
