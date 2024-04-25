"use client";

import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineUser } from "react-icons/ai";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { db } from "@/lib/firebaseconfig";

const Footer = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const addData = async (data: any) => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "newsletter"), data);
      console.log("Document written with ID: ", docRef.id);
      setSuccess(true);
      reset();
      setLoading(false);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (e) {
      console.error("Error adding document: ", e);
      setLoading(false);
    }
  };

  return (
    <footer className="px-[6%] container bg-black py-8   items-center gap-6 md:gap-0 justify-center  flex flex-col md:grid md:grid-cols-12   md:justify-around  text-white border-t border-t-gray-600">
      <div className="flex flex-col col-span-4 gap-3">
        <form
          className="flex gap-3 max-w-full flex-col items-center"
          onSubmit={handleSubmit((data) => {
            addData(data);
          })}
        >
          <div className="text-lg  flex gap-3 items-center rounded-full  border border-gray-500 hover:border-white focus-within:border-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-none bg-transparent w-full text-sm font-mono px-3"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-r-full flex gap-2 items-center"
            >
              {loading ? (
                <svg
                  className="animate-spin  h-5 w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : success ? (
                <p className="text-xs font-semibold">Subscribed</p>
              ) : (
                <p className="text-xs font-semibold">Subscribe</p>
              )}
              {/* <BsArrowRightShort /> */}
            </button>
          </div>
        </form>
        {/* <p className="text-gray-500 text-xs">
          SIGN UP TO STAY CONNECTED AND TO HEAR ABOUT WHAT WE ARE WORKING ON.
        </p> */}
      </div>
      <div className="flex flex-col gap-2 col-span-4 justify-center items-center">
        <p className="text-sm uppercase tracking-wide">Services</p>
        <p className="text-sm uppercase tracking-wide">Projects</p>
        <p className="text-sm uppercase tracking-wide">Pricing</p>
      </div>{" "}
      <div className="flex flex-col col-span-4  justify-center items-center">
        <div className="flex gap-3">
          <Link
            href={`https://www.instagram.com/offtechmedia/`}
            className="bg-white text-black p-2 rounded-full"
          >
            <FaTwitter />
          </Link>
          <Link
            href={`https://www.instagram.com/offtechmedia/`}
            className="bg-white text-black p-2 rounded-full"
          >
            <FaInstagram />
          </Link>
          <Link
            href={`https://www.instagram.com/offtechmedia/`}
            className="bg-white text-black p-2 rounded-full"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href={`https://www.instagram.com/offtechmedia/`}
            className="bg-white text-black p-2 rounded-full"
          >
            <FaFacebookF />
          </Link>
        </div>
        <div className="pt-3 text-center">
          <p className="text-xs text-gray-500">© 2023 OffTec</p>
          <p className="text-sm text-white">offtechmedia@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
