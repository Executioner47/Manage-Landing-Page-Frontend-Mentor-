import React, { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="nav flex items-center justify-between px-4 md:px-3 lg:px-20 py-10 md:py-6">
        <div className="logo mt-1">
          <img src="./images/logo.svg" alt="" />
        </div>
        <div className="burger md:hidden block">
          {!showMenu ? (
            <img
              src="./images/icon-hamburger.svg"
              alt=""
              className="cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          ) : (
            <img
              src="./images/icon-close.svg"
              alt=""
              className="cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          )}
        </div>

        <ul className="links hidden md:flex items-center justify-between text-md font-bold text-[#1D1E25]">
          <li className="mr-6">
            <a href="#Pricing">Pricing</a>
          </li>
          <li className="mr-6">
            <a href="#Product">Product</a>
          </li>
          <li className="mr-6">
            <a href="#AboutUs">About Us</a>
          </li>
          <li className="mr-6">
            <a href="#Careers">Careers</a>
          </li>
          <li className="mr-6">
            <a href="#Community">Community</a>
          </li>
        </ul>
        <div
          className={`${
            !showMenu ? "hidden" : "md:hidden block"
          } dropDownMenulinks absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/3 bg-white z-10 min-w-[300px] pt-9 rounded-lg`}
        >
          <ul className="flex-col items-center justify-between text-sm font-bold text-[#1D1E25] text-center">
            <li className="mb-5 text-lg">
              <a href="#Pricing">Pricing</a>
            </li>
            <li className="mb-5 text-lg">
              <a href="#Product">Product</a>
            </li>
            <li className="mb-5 text-lg">
              <a href="#AboutUs">About Us</a>
            </li>
            <li className="mb-5 text-lg">
              <a href="#Careers">Careers</a>
            </li>
            <li className="mb-9 text-lg">
              <a href="#Community">Community</a>
            </li>
          </ul>
        </div>
        <button
          type="btn"
          className="px-4 py-2 bg-[#F25F3A] text-white rounded-full shadow-lg hidden md:block"
        >
          Get Started
        </button>
      </nav>
      <div
        className={`${
          !showMenu ? "hidden" : "md:hidden block"
        } absolute top-20 inset-0 opacity-25 bg-[#b0b0b0] transition-opacity`}
      />
    </>
  );
}

export default Navbar;
