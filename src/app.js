import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeaderBoardHome from "./components/LeaderBoardHome";
import Signin from "./components/Signin";
import Footer from "./components/Footer";
import Issue from "./components/Issue";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-gray-50 h-screen">
      <BrowserRouter
      basename="/bugbounty/"
      >
      <Navbar/>
        <Routes>
          <Route path="/register" element={<Signin />} />
          <Route path="/" element={<LeaderBoardHome />} />
          <Route path="/issue" element={<Issue />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
