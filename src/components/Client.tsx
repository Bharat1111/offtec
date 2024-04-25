"use client";
import React, { useState } from "react";
import Image from "next/image";

const content = {
  Jason: {
    name: "Jason Holder",
    title: "Investor, entrepreneur, Creator",
    quote: `"Off Tec has come through for me time and time again. Their attention to detail and speed is unmatched."`,
  },
  Steve: {
    name: "Steve Koe",
    title: "Founder, Keyframe",
    quote: `"OFF Tec helped me turn a small idea into an entire brand and story. They did it in just 3 weeks."`,
  },
  David: {
    name: "David Holder",
    title: "Managing partner, Brand federation",
    quote: `"They moved faster than us. And we thought we were working hard. How they deliver such high quality and do it so quickly is a mystery."`,
  },
};

const Client = () => {
  const [active, setActive] = useState<"Jason" | "Steve" | "David">("Jason");
  return (
    <div
      className="px-[6%] py-10 md:py-[5%] md:min-h-[90dvh] 2xl:min-h-[50dvh] gap-10 flex flex-col bg-black text-white justify-between"
      id="clients"
    >
      <h1 className="text-4xl md:text-5xl uppercase font-medium">
        {content[active].quote}
      </h1>
      <div>
        <div className="flex gap-3">
          <Image
            src={
              "https://uploads-ssl.webflow.com/63e3f7ccdb2e2a288a3cb48a/643ef6f7a4c95c4efc825b09_sahil%403x.jpg"
            }
            onClick={() => setActive("Jason")}
            alt="Jason"
            // blur when inactive
            className={`rounded-full mb-10 ${
              active === "Jason" ? "" : "opacity-50"
            } hover:opacity-100 cursor-pointer w-20 h-20`}
            loading="lazy"
            width={70}
            height={70}
          />
          <Image
            src={
              "https://uploads-ssl.webflow.com/63e3f7ccdb2e2a288a3cb48a/643ef7345969348f14926111_dan%403x.jpg"
            }
            onClick={() => setActive("Steve")}
            alt="Steve"
            className={`rounded-full mb-10 ${
              active === "Steve" ? "" : "opacity-50"
            } hover:opacity-100 cursor-pointer w-20 h-20`}
            loading="lazy"
            width={70}
            height={70}
          />
          <Image
            src={
              "https://uploads-ssl.webflow.com/63e3f7ccdb2e2a288a3cb48a/643f3f04da838457f4e50077_Screenshot%202023-04-18%20at%208.08.03%20PM-p-500.png"
            }
            onClick={() => setActive("David")}
            alt="David"
            className={`rounded-full mb-10 ${
              active === "David" ? "" : "opacity-50"
            } hover:opacity-100 cursor-pointer w-20 h-20`}
            loading="lazy"
            width={70}
            height={70}
          />
        </div>

        <div className="text-size-eyebrow">— {content[active].name}</div>
        <div className="text-size-eyebrow text-gray-500">
          {content[active].title}
        </div>
      </div>
    </div>
  );
};

export default Client;
