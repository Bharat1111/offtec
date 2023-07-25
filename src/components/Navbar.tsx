"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const links = [
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Clients",
      path: "#clients",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
  ];

  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="px-[6%]  py-4 flex md:grid  md:grid-cols-12 justify-between z-50 items-center border-b sticky top-0 bg-white">
        <div className="flex gap-12 items-center col-span-2 ">
          <p className="tracking-wide font-bold text-2xl">
            <Link href={`/`}>OffTec</Link>
          </p>
        </div>
        <div className="md:flex gap-8 text-sm items-center justify-center hidden col-span-8">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className="tracking-wide font-medium "
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="md:flex gap-8 text-sm items-end justify-end hidden col-span-2">
          <Link
            href={`/hireus`}
            className="bg-gray-100 border px-8 py-2 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 ease-in-out hover:drop-shadow-xl"
          >
            HIRE US!
          </Link>
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
    </>
  );
};

export default Navbar;
