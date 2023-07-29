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
    <footer className="px-[6%] container bg-black py-8   items-center gap-6 md:gap-0 justify-center  flex flex-col md:grid md:grid-cols-12   md:justify-around  text-white border-t border-t-slate-100">
      <div className="col-span-2">
        <h1 className="text-base font-bold text-gray-500 pb-3 uppercase">
          Off-Tec
        </h1>
        <p className="text-xl uppercase tracking-wide">Services</p>
        <p className="text-xl uppercase tracking-wide">Projects</p>
        <p className="text-xl uppercase tracking-wide">Pricing</p>
      </div>

      <form
        className="flex gap-3 col-span-8 justify-center"
        onSubmit={handleSubmit((data) => {
          addData(data);
        })}
      >
        <div className="border px-6 text-lg py-3 flex gap-3 items-center rounded-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="outline-none bg-transparent w-full"
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />
        </div>
        <button
          type="submit"
          className="bg-white text-black px-6 py-3 rounded-full flex gap-2 items-center"
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
      </form>

      <div className="flex flex-col col-span-2">
        <div className="flex gap-3">
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
        <div className="pt-3 w-full">
          <p className="text-xs text-gray-500">© 2023 OffTec</p>
          <p className="text-sm text-white">offtechmedia@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
