import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const Client = () => {
  return (
    <div className="px-[6%] py-3 min-h-[500px] flex flex-col bg-black text-white justify-between">
      <h1 className="text-5xl uppercase">
        "Off Tec has come through for me time and time again. Their attention to
        detail and speed is unmatched."
      </h1>
      <div>
        <Image
          src={
            "https://uploads-ssl.webflow.com/63e3f7ccdb2e2a288a3cb48a/643ef6f7a4c95c4efc825b09_sahil%403x.jpg"
          }
          alt="Jason"
          className="rounded-full mb-8"
          loading="lazy"
          width={80}
          height={80}
        />
        <div className="text-size-eyebrow">— Jason Holder</div>
        <div className="text-size-eyebrow text-gray-500">
          Investor, entrepreneur,&nbsp;Creator
        </div>
      </div>
    </div>
  );
};

export default Client;
