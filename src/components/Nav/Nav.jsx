import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <nav
      className={
        navbar
          ? "sticky top-0 flex flex-row justify-between items-center self-auto pt-5 pb-4 w-screen z-30 text-light bg-cta2 main-marg transition-colors nav"
          : "sticky top-0 flex flex-row justify-between items-center self-auto pt-5 pb-4 w-screen z-30 text-light bg-mid bg-opacity-0 main-marg transition-colors nav"
      }
    >
      <HashLink className="text-4xl font-['Poppins'] font-extrabold" to="/">
        YNot Ai
      </HashLink>
      <ul className="flex flex-row gap-x-12 items-center text-xl nav__menu">
        <li
          className={
            navbar
              ? "transition-all hover:text-mid text-light nav__menu-item"
              : "transition-all hover:text-cta text-light nav__menu-item"
          }
        >
          <HashLink to="/">Portfolio</HashLink>
        </li>
        <li
          className={
            navbar
              ? "transition-all hover:text-mid text-light"
              : "transition-all hover:text-cta text-light"
          }
        >
          <HashLink to="/#video">Services</HashLink>
        </li>
        <li
          className={
            navbar
              ? "transition-all hover:text-mid text-light"
              : "transition-all hover:text-cta text-light"
          }
        >
          <HashLink to="/blog">Blog</HashLink>
        </li>
        <li
          className={
            navbar
              ? "transition-all hover:text-mid text-light"
              : "transition-all hover:text-cta text-light"
          }
        >
          <HashLink to="/#anime">Contact</HashLink>
        </li>
        <li
          className={
            navbar
              ? "transition-all hover:text-mid text-light nav__menu-item"
              : "transition-all hover:text-cta text-light nav__menu-item"
          }
        >
          <HashLink to="/#anime">English</HashLink>
          <ul className="nav__submenu text-dark bg-cta drop-shadow-lg">
            <li className="nav__submenu-item m-3 p-4 text-light hover:text-dark rounded-md">
              <HashLink to="#english">English</HashLink>
            </li>
            <li className="nav__submenu-item m-3 p-4 text-light hover:text-dark rounded-md">
              <HashLink to="#urdu">Urdu</HashLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
