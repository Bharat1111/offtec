import React from "react";

const Grid = () => {
  return (
    <div className="py-8 md:py-14 flex flex-col gap-8  px-[6%]">
      <div className="flex flex-col gap-2 ">
        <p className="text-gray-500 text-sm  ">Work</p>
        <div className="flex justify-between gap-3 md:gap-6 md:items-center flex-col md:flex-row">
          <h2 className="text-4xl font-semibold md:w-1/2">
            Sare our <span className="text-red-500">experiences</span> that we
            have been through with our clients
          </h2>

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
      Grid
    </div>
  );
};

export default Grid;