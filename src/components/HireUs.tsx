import Link from "next/link";
import React from "react";

const HireUs = () => {
  return (
    <Link
      href={`/hireus`}
      className="  px-8 backdrop-blur-3xl bg-gray-100 bg-opacity-50 hover:shadow-inner border  text-black relative  py-2 rounded-full font-semibold   transition-all duration-300 ease-in-out "
    >
      HIRE US!
    </Link>
  );
};

export default HireUs;
