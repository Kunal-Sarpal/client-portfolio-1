import React from "react";
import Navbar from "./components/Navbar";
import Services from "./components/Portfolio";
import Portfolio from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import IndexPage from "./components/IndexPage";


const App: React.FC = () => {
  return (
    <div className=" text-white  min-h-screen">
      <Navbar/>
      <IndexPage/>
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default App;