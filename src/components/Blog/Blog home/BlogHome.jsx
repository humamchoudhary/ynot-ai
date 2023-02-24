import React from "react";
import Navbar from "../../Nav/Nav";
import Hero from "../../Blog/Hero/Hero";
import Categories from "../Categories/Categories";
import Footer from "../../Footer/Footer";

const BlogHome = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Footer />
    </div>
  );
};

export default BlogHome;
