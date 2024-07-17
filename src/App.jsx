// 
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        
      </div>
    </BrowserRouter>
  );
};

export default App;
