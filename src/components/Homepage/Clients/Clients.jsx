import React from "react";
import { HashLink } from "react-router-hash-link";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useState } from "react";

const Clients = () => {
  const totalusers = 4;
  const [userNo, updateuser] = useState(0);
  const prevUser = () => {
    var tempuser = (userNo - 1) % totalusers;
    if (tempuser === -1) {
      tempuser = totalusers - 1;
    }
    console.log(tempuser);
    updateuser(tempuser);
  };
  const nextUser = () => {
    var tempuser = (userNo + 1) % totalusers;
    console.log(tempuser);
    updateuser(tempuser);
  };

  const Users = [
    <div className="client-box bg-cta rounded-2xl flex flex-row items-center justify-center gap-20 px-20">
      <div className="user flex flex-col items-center gap-8">
        <div className="user_prof rounded-full bg-dark overflow-hidden bg-[url('https://randomuser.me/api/portraits/women/94.jpg')] bg-cover"></div>
        <h1 className="user_name text-3xl highlight">Random Name0</h1>
      </div>
      <p className="msg">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur
      </p>
    </div>,
    <div className="client-box bg-cta rounded-2xl flex flex-row items-center justify-center gap-20 px-20">
      <div className="user flex flex-col items-center gap-8">
        <div className="user_prof rounded-full bg-dark overflow-hidden bg-[url('https://randomuser.me/api/portraits/women/94.jpg')] bg-cover"></div>
        <h1 className="user_name text-3xl highlight">Random Name1</h1>
      </div>
      <p className="msg">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur
      </p>
    </div>,
    <div className="client-box bg-cta rounded-2xl flex flex-row items-center justify-center gap-20 px-20">
      <div className="user flex flex-col items-center gap-8">
        <div className="user_prof rounded-full bg-dark overflow-hidden bg-[url('https://randomuser.me/api/portraits/women/94.jpg')] bg-cover"></div>
        <h1 className="user_name text-3xl highlight">Random Name2</h1>
      </div>
      <p className="msg">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit , consetetur
      </p>
    </div>,
    <div className="client-box bg-cta rounded-2xl flex flex-row items-center justify-center gap-20 px-20">
      <div className="user flex flex-col items-center gap-8">
        <div className="user_prof rounded-full bg-dark overflow-hidden bg-[url('https://randomuser.me/api/portraits/women/94.jpg')] bg-cover"></div>

        <h1 className="user_name text-3xl highlight">Random Name3</h1>
      </div>
      <p className="msg">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur
      </p>
    </div>,
  ];

  return (
    <div
      className="bg-dark h-screen main-marg flex justify-center flex-col"
      id="Clients"
    >
      <HashLink to="#Clients">
        <h1 className="text-light font-extrabold text-5xl text-center hover:cursor-pointer pt-24">
          Our Clients
        </h1>
      </HashLink>
      <div className="flex flex-row my-auto gap-14 justify-between items-center transition-all">
        <div
          className="h-32 w-24 bg-light rounded-lg bg-opacity-20 flex flex-col justify-center hover:bg-opacity-25 hover:cursor-pointer"
          onClick={prevUser}
        >
          <div className="flex flex-row justify-center">
            <FiArrowLeft className="text-light text-6xl" />
          </div>
        </div>
        <div>{Users[userNo]}</div>
        <div
          className="h-32 w-24 bg-light rounded-lg bg-opacity-20 flex flex-col justify-center hover:bg-opacity-25 hover:cursor-pointer"
          onClick={nextUser}
        >
          <div className="flex flex-row justify-center">
            <FiArrowRight className="text-light text-6xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
