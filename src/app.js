import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeaderBoardHome from "./components/LeaderBoardHome";
import Signin from "./components/Signin";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-50 h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Signin />} />
          <Route path="/" element={<LeaderBoardHome />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
