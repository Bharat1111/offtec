"use client";
import React from "react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="px-[6%]  py-5 flex justify-between items-center border-b sticky top-0 bg-white">
      <div className="flex gap-12 items-center">
        <p className="tracking-wide font-bold text-2xl  uppercase">Off Tec</p>
        <div className="md:flex gap-8 text-sm items-center hidden">
          <p className="tracking-wide font-medium ">Services</p>
          <p className="tracking-wide font-medium ">Projects</p>
          <p className="tracking-wide font-medium ">Clients</p>
          <p className="tracking-wide font-medium ">Pricing</p>
        </div>
      </div>
      <div className="md:flex gap-8 text-sm items-center hidden ">
        <p>
          <button className="border-black border px-4 py-2 rounded-full font-semibold ">
            Contact Us
          </button>
        </p>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1 items-end"
      >
        {/* three lines */}
        <div
          className={`h-1 bg-black mb-1 transform transition-all duration-500 ease-in-out
        ${open ? "-rotate-45 translate-y-2 w-6" : "w-9"}
        `}
        ></div>
        <div
          className={`h-1 w-6 bg-black mb-1 transform transition-all duration-500 ease-in-out
            ${open ? "rotate-45 -translate-y-1" : ""}
        `}
        ></div>
      </button>
      <menu
        className={`flex fixed z-50 inset-0 bottom-0 bg-white border-t backdrop-blur-lg transform  transition-all duration-300 ease-in-out top-[4.5rem] ${
          open ? " translate-x-0" : " translate-x-full"
        } flex-col  items-center justify-center md:hidden`}
      >
        <ul className="flex flex-col gap-4 text-xl text-center mb-20">
          <li className="tracking-wide font-medium ">Services</li>
          <li className="tracking-wide font-medium ">Projects</li>
          <li className="tracking-wide font-medium ">Clients</li>
          <li className="tracking-wide font-medium ">Pricing</li>
          <li>
            <button className="border-black border text-lg  px-6 py-2 rounded-full font-semibold">
              Contact Us
            </button>
          </li>
        </ul>
      </menu>
    </nav>
  );
};

export default Navbar;
