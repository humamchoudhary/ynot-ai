import React from "react";
import { HashLink } from "react-router-hash-link";

const Services = () => {
  return (
    <div
      className="Work pt-12 pb-20 flex flex-col gap-20 main-marg"
      id="Services"
    >
      <HashLink to="#Work">
        <h1 className="text-dark font-extrabold text-5xl text-center hover:cursor-pointer pt-24">
          Our Services
        </h1>
      </HashLink>
      <div className="grid grid-cols-3 gap-20 mx-auto">
        <div className="service-item rounded-2xl bg-cta"></div>
        <div className="service-item rounded-2xl bg-cta"></div>
        <div className="service-item rounded-2xl bg-cta"></div>
        <div className="service-item rounded-2xl bg-cta"></div>
        <div className="service-item rounded-2xl bg-cta"></div>
        <div className="service-item rounded-2xl bg-cta"></div>
      </div>
    </div>
  );
};

export default Services;
