"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import HireUs from "./HireUs";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const links = [
    {
      name: "Services",
      path: "/services",
    },
    // {
    //   name: "Projects",
    //   path: "/projects",
    // },
    // {
    //   name: "Pricing",
    //   path: "/pricing",
    // },
  ];

  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header>
      <nav className="px-4 md:px-14 py-7 md:py-10 flex justify-between items-center">
        <div className="flex gap-12 items-center col-span-8">
          <p className="font-bold text-xl">
            <Link href={`/`}>OffTech</Link>
          </p>
        </div>
        <div className="hidden md:flex bg-white rounded-full text-xs gap-x-10 py-5 px-6">
          <Link href={'/'} className="text-black font-semibold">Studio</Link>
          <Link href={'/'} className="text-gray-500">Work</Link>
          <Link href={'/'} className="text-gray-500">Products</Link>
        </div>
          <div className="hidden md:flex">
            <HireUs />
          </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1 items-end"
        >
          {/* three lines */}
          <div
            className={`h-1 bg-black mb-1 rounded-sm transform transition-all duration-500 ease-in-out
        ${open ? "-rotate-45 translate-y-2 w-6" : "w-9"}
        `}
          ></div>
          <div
            className={`h-1 w-6 bg-black mb-1 rounded-sm transform transition-all duration-500 ease-in-out
            ${open ? "rotate-45 -translate-y-1" : ""}
        `}
          ></div>
        </button>
      </nav>


      <menu
        className={`flex fixed z-50 inset-0 bottom-0 bg-white border-t backdrop-blur-lg transform  transition-all duration-300 ease-in-out top-[4rem] ${
          open ? " translate-x-0" : " translate-x-full"
        } flex-col ml-auto items-center justify-center md:hidden`}
      >
        <ul className="flex flex-col gap-6 text-xl text-center mb-20">
          {links.map((link) => (
            <li key={link.name} className="tracking-wide font-medium ">
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}

          <li>
            <Link
              href={`/hireus`}
              className="border-black border text-lg  px-6 py-2 rounded-full font-semibold"
            >
              Hire Us
            </Link>
          </li>
        </ul>
      </menu>
    </header>
  );
};

export default Navbar;
