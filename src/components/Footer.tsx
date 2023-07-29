import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-[6%] container pt-5 bg-black text-white">
      <div className="flex justify-between pb-10 flex-col md:flex-row gap-8">
        <div className="flex flex-col justify-center">
          <p className="tracking-wide font-semibold text-2xl">
            Subscribe to our <p>newsletter</p>
          </p>
          <div className="flex pt-5 ">
            <input
              type="text"
              placeholder="Email address"
              className="bg-white outline-none border text-black p-2 text-md w-64"
            />
            <button className="p-3 bg-black">
              <BsArrowRightShort className="  text-2xl" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="tracking-wide font-semibold text-xl ">Services</p>
          <p className="text-sm text-gray-400">Email Marketing</p>
          <p className="text-sm text-gray-400">SEO</p>
          <p className="text-sm text-gray-400">Business Strategy</p>
          <p className="text-sm text-gray-400">Print Materials</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="tracking-wide font-semibold text-xl ">About</p>
          <p className="text-sm text-gray-400">Our Story</p>
          <p className="text-sm text-gray-400">Our Team</p>
          <p className="text-sm text-gray-400">Benefits</p>
          <p className="text-sm text-gray-400">Carrers</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="tracking-wide font-semibold text-xl ">Navigation</p>
          <p className="text-sm text-gray-400">Email Marketing</p>
          <p className="text-sm text-gray-400">Campaigns</p>
          <p className="text-sm text-gray-400">Branding</p>
          <p className="text-sm text-gray-400">Offline</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="tracking-wide font-semibold text-xl ">Help</p>
          <p className="text-sm text-gray-400">FAQs</p>
          <p className="text-sm text-gray-400">Contact Us</p>
        </div>
      </div>
      {/* make a hr using div */}
      <div className="border-b border-gray-400"></div>
      <div className="py-10 flex justify-between flex-col md:flex-row gap-6">
        <div>
          <div className="flex gap-12">
            <FaFacebookF className=" w-6 h-6" />
            <FaTwitter className=" w-6 h-6" />
            <FaLinkedinIn className=" w-6 h-6" />
            <FaInstagram className=" w-6 h-6" />
          </div>
        </div>
        <div className="text-md font-semibold text-gray-400">
          © 2023 <span className="">OFF TECH</span>{" "}
          <span className="text-sm text-gray-400">| All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
