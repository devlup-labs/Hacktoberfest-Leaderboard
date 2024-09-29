import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GSignInclub from "./components/GSignInclub";
import LeaderBoardHome from "./components/LeaderBoardHome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<GSignInclub />} />
        <Route path="/" element={<LeaderBoardHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
