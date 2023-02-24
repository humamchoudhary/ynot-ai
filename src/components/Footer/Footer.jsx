import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="bg-dark pb-14 main-marg flex flex-row pt-16 justify-between text-light">
      <HashLink className="text-4xl font-['Poppins'] font-extrabold" to="#">
        YNot Ai
      </HashLink>
      <div className="flex flex-row gap-28">
        <div className="flex flex-col gap-7 ">
          <p>Home</p>
          <p>Services</p>
          <p>Clients</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col gap-7 ">
          <p>Fiverr</p>
          <p>Upwork</p>
          <p>PeoplePerHour</p>
        </div>
        <div className="flex flex-col gap-7 ">
          <p>Facebook</p>
          <p>LinkedIn</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
