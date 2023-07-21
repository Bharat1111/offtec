import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Grid = () => {
  return (
    <div className="pb-8 md:pb-14 flex flex-col gap-8   px-[6%]">
      <div className="flex flex-col gap-2 ">
        <p className="text-gray-500 text-sm  ">Work</p>
        <div className="flex items-start  md:justify-between  gap-3 md:gap-6 md:items-center flex-col md:flex-row">
          <h2 className="text-4xl font-semibold md:w-1/2">
            Share our <span className="text-red-500">experiences</span> that we
            have been through with our clients
          </h2>
          <div className="p-5 rounded-full border ">
            <RiArrowRightUpLine className="text-4xl text-black" />
          </div>

          {/* <div className="flex gap-3 items-center ml-auto">
        <button
          onClick={() => ref.current.slidePrev()}
          className="bg-white border p-2 rounded-full text-xl"
        >
          <MdKeyboardArrowRight className="  -rotate-180" />
        </button>
        <button
          onClick={() => ref.current.slideNext()}
          className="bg-black p-2 rounded-full text-xl"
        >
          <MdKeyboardArrowRight className="text-white" />
        </button>
      </div> */}
        </div>
      </div>
      <Tabs
        defaultValue="account"
        className="w-full items-center justify-center flex flex-wrap flex-row gap-8 "
      >
        <TabsList className="bg-white p-0 flex ">
          <TabsTrigger
            className=" text-sm !font-normal px-6 py-2  tracking-wide     border-gray-400 w-full data-[state=active]:text-white rounded-full data-[state=active]:border-black   data-[state=active]:bg-red-500   data-[state=active]:shadow-none outline-none cursor-default"
            value="allworks"
          >
            All works
          </TabsTrigger>
          <TabsTrigger
            className=" text-sm !font-normal px-6 py-2  tracking-wide     border-gray-400 w-full data-[state=active]:text-white rounded-full data-[state=active]:border-black   data-[state=active]:bg-red-500   data-[state=active]:shadow-none outline-none cursor-default"
            value="UI/UX Design"
          >
            UI/UX Design
          </TabsTrigger>
          <TabsTrigger
            className=" text-sm !font-normal px-6 py-2  tracking-wide     border-gray-400 w-full data-[state=active]:text-white rounded-full data-[state=active]:border-black   data-[state=active]:bg-red-500   data-[state=active]:shadow-none outline-none cursor-default"
            value="BrandIdentity"
          >
            Brand Identity
          </TabsTrigger>
          <TabsTrigger
            className=" text-sm !font-normal px-6 py-2  tracking-wide     border-gray-400 w-full data-[state=active]:text-white rounded-full data-[state=active]:border-black   data-[state=active]:bg-red-500   data-[state=active]:shadow-none outline-none cursor-default"
            value="illustration"
          >
            Illustration
          </TabsTrigger>
          <TabsTrigger
            className=" text-sm !font-normal px-6 py-2  tracking-wide     border-gray-400 w-full data-[state=active]:text-white rounded-full data-[state=active]:border-black   data-[state=active]:bg-red-500   data-[state=active]:shadow-none outline-none cursor-default"
            value="Development"
          >
            Development
          </TabsTrigger>
        </TabsList>
        <TabsContent value="allworks">
          Make changes to your account here.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Grid;
