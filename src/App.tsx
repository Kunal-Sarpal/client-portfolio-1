import React from "react";
import Navbar from "./components/Navbar";
import Services from "./components/Portfolio";
import Portfolio from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";


const App: React.FC = () => {
  return (
    <div className="bg-black text-white  min-h-screen">
      <Navbar/>
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default App;