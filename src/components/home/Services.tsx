"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Services = () => {
  return (
    <div className="-z-50">
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        className="w-full"
        breakpoints={{
          364: {
            slidesPerView: 1.8,
          },
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {[1, 1, 1, 1, 1, 1, 1].map((item, i) => (
          <SwiperSlide
            className={`border
        ${i === 0 ? "ml-[6%]" : ""}
      
        `}
            key={i}
          >
            <div className="p-5">
              <h3 className=" font-semibold">UIUX Design</h3>
              <p className="text-gray-500 text-xs ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisq
                voluptatum, etc,
              </p>
            </div>
            <Image
              width={500}
              height={"0"}
              src="https://cdn.dribbble.com/userupload/8711750/file/original-32e6bf008fc3e69f8c1655371ea3dac4.png?resize=752x"
              alt="Picture of the author"
              className="w-full aspect-[1/1] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
