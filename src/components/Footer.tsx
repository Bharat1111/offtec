import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-[6%] container bg-black py-8   items-center gap-6 md:gap-0 justify-center  flex flex-col md:grid md:grid-cols-12   md:justify-between  text-white border-t border-t-slate-100">
      <h4 className="text-xl font-bold col-span-2 ">OffTec</h4>

      <div className="flex gap-3 col-span-8  justify-center">
        <div className="border px-6 text-xs py-1.5 flex gap-3 items-center rounded-full">
          <AiOutlineUser className="text-xl" />
          <input
            type="text"
            placeholder="Enter your email"
            className="outline-none bg-transparent w-full"
          />
        </div>
        <button className="bg-white text-black px-6 py-1.5 rounded-full flex gap-2 items-center">
          <p className="text-xs font-semibold">Subscribe</p>
          {/* <BsArrowRightShort /> */}
        </button>
      </div>

      <div className="flex gap-3 col-span-2">
        <Link href={`/`} className="bg-white text-black p-2 rounded-full">
          <FaTwitter />
        </Link>
        <Link href={`/`} className="bg-white text-black p-2 rounded-full">
          <FaInstagram />
        </Link>
        <Link href={`/`} className="bg-white text-black p-2 rounded-full">
          <FaLinkedinIn />
        </Link>
        <Link href={`/`} className="bg-white text-black p-2 rounded-full">
          <FaFacebookF />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
