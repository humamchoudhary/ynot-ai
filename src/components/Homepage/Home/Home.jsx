import React from "react";
import Navbar from "../../Nav/Nav";
import Hero from "../Hero/Hero";
import Work from "../Work/Work";
import Clients from "../Clients/Clients";
import Services from "../Services/Services";
import Footer from "../../Footer/Footer";
const home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <Hero />
        <Work />
        <Clients />
        <Services />
        <Footer />
      </div>
    </div>
  );
};

export default home;
