import React from "react";
// import GSiginIn from "./components/GSiginIn";
// import Partbg from "./components/Particles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GSignInclub from "./components/GSignInclub";
import Leaderboard from "./components/Leaderboard";
import LeaderboardNoAuth from "./components/LeaderboardsNoAuth";
import LeaderBoardHome from "./components/LeaderBoardHome";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<GSignInclub/>} />
      <Route path="/" element={<LeaderBoardHome/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
