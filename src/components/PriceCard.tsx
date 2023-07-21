import React from "react";

type Props = {
  price: number;
  title: string;
  desc: string;
  list: string[];
  color?: string;
  textColor?: string;
  priceColor?: string;
  borderColor?: string;
};

const PriceCard = ({
  price,
  title,
  desc,
  list,
  color,
  textColor,
  priceColor,
  borderColor,
}: Props) => {
  return (
    <div
      className={`flex flex-col flex-1 ${color} ${
        textColor ? `text-${textColor}` : "text-black"
      } px-5 py-4 h-96`}
    >
      <div className="flex flex-col  border-b  pb-3 border-gray-300">
        <div className="flex items-center">
          <p
            className={`tracking-wide font-bold text-[40px] ${
              priceColor ? priceColor : ""
            }`}
          >
            ${price}
          </p>
          <p className="text-[16px] font-medium pl-5">/month</p>
        </div>
        <p className="tracking-wide font-bold text-xl ">{title}</p>
        <p className=" text-sm mt-3 w-56">{desc}</p>
      </div>
      <div className="flex flex-col tracking-wide mt-3 gap-3 font-semibold text-sm ">
        {list.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <button
        className={`border-[1.5px] ${
          borderColor ? borderColor : "border-black"
        } text-base font-bold py-2 mt-4 md:mt-auto`}
      >
        Get Started
      </button>
    </div>
  );
};

export default PriceCard;
