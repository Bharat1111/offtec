import React from "react";

type Props = {
  price: number;
  title: string;
  desc: string;
  list: string[];
  bgColor?: string;
};

const PriceCard = ({ price, title, desc, list, bgColor }: Props) => {
  return (
    <div
      className={`flex flex-col flex-1 border rounded-md border-gray-300 px-5 py-4`}
    >
      <div className="flex flex-col  border-b  pb-3 border-gray-300">
        <p className="tracking-wide font-bold text-xl ">{title}</p>
        <div className="flex items-center">
          <p className={`tracking-wide font-bold text-[40px]`}>${price}</p>
          <p className="text-[16px] font-medium text-gray-500">/month</p>
        </div>
        <p className=" text-sm mt-3 w-56 mb-10">{desc}</p>

        <button
          className={`${
            bgColor ? bgColor : "bg-black"
          } text-base py-2 rounded-lg md:mt-auto text-white`}
        >
          Get Started
        </button>
      </div>
      <div className="flex flex-col tracking-wide mt-3 gap-3 font-semibold text-sm ">
        {list.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
