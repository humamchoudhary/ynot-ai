import React from "react";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./components/Homepage/Home/Home";
import BlogHome from "./components/Blog/Blog home/BlogHome";
import Blog from "./components/Blog/Blog/Blog";
import Blogpage from "./components/Blog/Blog/Blogpage";
const App = () => {
  return (
    <>
      <HelmetProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogHome />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/blog/:id/:id" element={<Blogpage />} />
          </Routes>
        </HashRouter>
      </HelmetProvider>
    </>
  );
};

export default App;
