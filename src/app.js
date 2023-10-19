import React from "react";
import GSiginIn from "./components/GSiginIn";
// import Partbg from "./components/Particles";

const App = () => {
  return (
    <>
      <div className="body">
        <h1 className="text-green-400 text-4xl text-center pt-20 font-serif font-bold ">
          DEVLUP {"  "} LABS
        </h1>
        <div className="h-screen">
          {/* <Partbg /> */}

          <GSiginIn />
        </div>
      </div>
    </>
  );
};

export default App;
