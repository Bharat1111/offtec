import Link from "next/link";
import React from "react";

const HireUs = () => {
  return (
    <Link
      href={`/hireus`}
      className="p-5 flex bg-[#1d1d1f] items-center text-white rounded-full gap-x-8"
    >
      <p className="text-[11px] font-semibold">Let's talk</p>
      <div className="bg-white w-1 h-1 rounded-full"></div>
    </Link>
  );
};

export default HireUs;
