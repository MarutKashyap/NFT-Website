import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { NFTProvider } from "./context/NFTContext";

import "./App.css";

function App() {
  return (
    <NFTProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </NFTProvider>
  );
}

export default App;
