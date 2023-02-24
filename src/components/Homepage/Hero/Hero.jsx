import React from "react";
import AI from "../../../assets/Ai.jpg";
import AI3 from "../../../assets/Ai3.png";
import AI4 from "../../../assets/Ai4.png";
import AI5 from "../../../assets/Ai5.png";
const images = [AI, AI3, AI4, AI5];
const Hero = () => {
  return (
    <div className="hero overflow-hidden flex main-marg">
      <div className="bg-dark absolute top-0 left-0 w-full overlay z-10"></div>
      <div className="levite_wrapper">
        {images.map((img, index) => (
          <img
            className={"absolute left-0 top-0 z-0 w-screen i" + index}
            key={index}
            src={img}
            alt="Hero"
          />
        ))}
      </div>
      <h1 className="text-light font-extrabold  relative my-auto text-7xl z-20">
        Get your work done
        <br />
        <span className="font-medium highlight">Professionally</span>
      </h1>
    </div>
  );
};

export default Hero;
