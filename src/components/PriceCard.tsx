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
      className={`flex flex-col w-full  md:w-72  border rounded-md border-gray-300 px-6 md:px-5 py-8 md:py-4`}
    >
      <div className="flex flex-col  border-b gap-6 pb-3 border-gray-300">
        <div className="flex flex-col gap-3">
          <p className="tracking-wide font-bold text-2xl md:text-xl ">
            {title}
          </p>
          <div className="flex ">
            <p className={`tracking-wide font-bold text-5xl md:text-xl `}>
              ${price}
            </p>
            <p className="text-sm md:text-[16px] mt-auto mb-2 font-medium text-gray-500">
              /month
            </p>
          </div>
        </div>
        <p className=" md:text-sm w-56 ">{desc}</p>

        <button
          className={`${
            bgColor ? bgColor : "bg-black"
          } text-base py-2  rounded md:rounded-lg md:mt-auto text-white`}
        >
          Get Started
        </button>
      </div>
      <div className="flex flex-col tracking-wide mt-3 gap-3 font-semibold md:text-sm ">
        {list.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
