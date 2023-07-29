"use client";
import React from "react";

const Input = ({
  label,
  name,
  register,
  required = false,
  pattern,
}: {
  label: string;
  name: string;
  register?: any;
  required?: boolean;
  pattern?: any;
}) => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className="relative group">
      <label htmlFor={name} className="text-sm font-medium  text-gray-500  ">
        {label}
      </label>
      <input
        type="text"
        {...register(name, { required: required, pattern: pattern })}
        id={name}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full border-gray-100 border-b-2 border-muted  px-3 py-2 outline-none  text-gray-400"
      />
      <div
        className={`absolute bottom-0 left-0   bg-black h-[1px] transition-all duration-300
        ${focus ? "right-0" : "right-full"}`}
      ></div>
    </div>
  );
};

export default Input;
