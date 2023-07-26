import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <main className="py-3 md:py-10 px-[6%] flex flex-col md:flex-row gap-10">
      <div className="w-full">
        <h1 className="text-[13vh] font-medium uppercase">Recent Work</h1>
        <div>
          <div className="h-[8px] border border-l-[#1f1e1e] border-t-[#1f1e1e] border-b-0 border-r-0"></div>
          <p className="text-[8vh] font-medium uppercase text-[#151414]">
            Rotary x USAID
          </p>
          <Image
            src={
              "https://uploads-ssl.webflow.com/63e3f7ccdb2e2a288a3cb48a/63f892d7a4a859f2bf8f6a01_W04%402x.jpg"
            }
            className="w-600 h-600 mb-4"
            alt="Clietn name"
            width={500}
            height={500}
          />
          <div className="flex gap-6 text-[#3E3C3c] uppercase text-sm font-semibold">
            <p>Client </p>
            <p>(Rotary international)</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
