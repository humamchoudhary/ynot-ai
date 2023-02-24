import React from "react";
import { HashLink } from "react-router-hash-link";

const Work = () => {
  return (
    <div
      className="Work pt-12 h-screen flex flex-col gap-20 main-marg"
      id="Work"
    >
      <HashLink to="#Work">
        <h1 className="text-dark font-extrabold text-5xl text-center hover:cursor-pointer pt-24">
          Our Work
        </h1>
      </HashLink>
      <div className="grid grid-cols-3 gap-20 mx-auto">
        <div className="w-96 h-96 rounded-2xl bg-cta"></div>
        <div className="w-96 h-96 rounded-2xl bg-cta"></div>
        <div className="w-96 h-96 rounded-2xl bg-cta"></div>
        <div className="w-96 h-96 rounded-2xl bg-cta"></div>
        <div className="w-96 h-96 rounded-2xl bg-cta"></div>
        <div className="w-96 h-96 rounded-2xl bg-cta"></div>
      </div>
    </div>
  );
};

export default Work;
