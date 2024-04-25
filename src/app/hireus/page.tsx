import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Input from "@/components/Input";
import Contactus from "@/components/Contactus";
const HireUs = () => {
  return (
    <main className="container">
      <div className="relative">
        <Image
          alt="hire us"
          src="https://images.unsplash.com/photo-1645655892437-c5149679d223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
          sizes="100vw"
          width={"0"}
          height={"0"}
          className="w-full aspect-[16/14] md:aspect-[16/4.5] object-cover"
        />
        {/* <div className="absolute inset-0 bottom-0 flex items-end">
          <h1 className="text-7xl font-semibold uppercase  text-white px-[6%] py-6 tracking-wide">
            Hire Us
          </h1>
        </div> */}
      </div>
      <div className="px-6 md:px-[6%] py-6 md:py-12 grid-cols-12 flex-col-reverse flex md:grid gap-10 md:gap-6">
        <div className="col-span-12 md:col-span-3 flex flex-col gap-6 md:gap-10 justify-between mb-0 md:mb-32">
          <div className="flex items-center md:items-start md:flex-col justify-between md:gap-10">
            <div className="flex flex-col gap-1">
              <p className="  tracking-wide text-gray-500  uppercase">
                Contacts
              </p>
              <h2 className="text-xl font-semibold uppercase">
                you@offtech.digital
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <p className="  tracking-wide text-gray-500  ">Follow</p>
              <div className="flex gap-3 items-center">
                <Link
                  href="https://www.instagram.com/offtechmedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram className="text-xl " />
                </Link>
                <Link
                  href="https://www.instagram.com/offtechmedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter className="text-xl " />
                </Link>
                <Link
                  href="https://www.instagram.com/offtechmedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsDiscord className="text-xl " />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-xs leading-normal font-medium ">
              We strategocaly design and develop digital products for
              forward-thinking brands .Creating a product that connects with
              your audience is essential to success in today’s digital world.
            </p>
            <p className="font-medium text-lg uppercase">© 2023 offtech</p>
          </div>
        </div>
        <Contactus />
      </div>
    </main>
  );
};

export default HireUs;
