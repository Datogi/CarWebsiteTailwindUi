import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Main from "./components/main";
import Header from "./components/header";
import Acqusition from "./components/Acqusition";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="flex ">
      <div>
        <Dashboard />
      </div>
      <div className="w-full h-full bg-gray-200 photo">
        <div className="w-full flex justify-between">
          <h1>Target Approved</h1>
          <div>
            <Header />
          </div>{" "}
        </div>
        <div className="Inventory hidden">
          <Main />
        </div>
        <div className="Acqusition hidden">
          <Acqusition />
        </div>
        <div className="Dashboard hidden">
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default App;
