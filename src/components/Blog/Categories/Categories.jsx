import React from "react";
import { HashLink } from "react-router-hash-link";

const Categories = () => {
  return (
    <div className="main-marg pb-24 ">
      <h1 className="font-extrabold text-5xl text-center hover:cursor-pointer pt-24 text-bg pb-12 ">
        Categories
      </h1>
      <div className="grid grid-cols-4 gap-20">
        <HashLink to="test">
          <div className="service-item overflow-hidden hover:cursor-pointer hover:opacity-80 duration-300 flex flex-col gap-4">
            <div className="bg-cta h-full rounded-2xl"> </div>
            <p className="text-lg font-medium">Category Name</p>
          </div>
        </HashLink>

        <HashLink to="test">
          <div className="service-item overflow-hidden hover:cursor-pointer hover:opacity-80 duration-300 flex flex-col gap-4">
            <div className="bg-cta h-full rounded-2xl"> </div>
            <p className="text-lg font-medium">Category Name</p>
          </div>
        </HashLink>

        <HashLink to="test">
          <div className="service-item overflow-hidden hover:cursor-pointer hover:opacity-80 duration-300 flex flex-col gap-4">
            <div className="bg-cta h-full rounded-2xl"> </div>
            <p className="text-lg font-medium">Category Name</p>
          </div>
        </HashLink>

        <HashLink to="test">
          <div className="service-item overflow-hidden hover:cursor-pointer hover:opacity-80 duration-300 flex flex-col gap-4">
            <div className="bg-cta h-full rounded-2xl"> </div>
            <p className="text-lg font-medium">Category Name</p>
          </div>
        </HashLink>

        <HashLink to="test">
          <div className="service-item overflow-hidden hover:cursor-pointer hover:opacity-80 duration-300 flex flex-col gap-4">
            <div className="bg-cta h-full rounded-2xl"> </div>
            <p className="text-lg font-medium">Category Name</p>
          </div>
        </HashLink>

        <HashLink to="test">
          <div className="service-item overflow-hidden hover:cursor-pointer hover:opacity-80 duration-300 flex flex-col gap-4">
            <div className="bg-cta h-full rounded-2xl"> </div>
            <p className="text-lg font-medium">Category Name</p>
          </div>
        </HashLink>

        <HashLink to="test">
          <div className="service-item overflow-hidden hover:cursor-pointer hover:opacity-80 duration-300 flex flex-col gap-4">
            <div className="bg-cta h-full rounded-2xl"> </div>
            <p className="text-lg font-medium">Category Name</p>
          </div>
        </HashLink>

        <HashLink to="test">
          <div className="service-item overflow-hidden hover:cursor-pointer hover:opacity-80 duration-300 flex flex-col gap-4">
            <div className="bg-cta h-full rounded-2xl"> </div>
            <p className="text-lg font-medium">Category Name</p>
          </div>
        </HashLink>

        <HashLink to="test">
          <div className="service-item overflow-hidden hover:cursor-pointer hover:opacity-80 duration-300 flex flex-col gap-4">
            <div className="bg-cta h-full rounded-2xl"> </div>
            <p className="text-lg font-medium">Category Name</p>
          </div>
        </HashLink>
      </div>
    </div>
  );
};

export default Categories;
