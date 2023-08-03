"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdKeyboardArrowRight } from "react-icons/md";

const services = [
  {
    name: "Front End",
    description:
      "Our expert frontend developers craft visually stunning and responsive user interfaces that ensure a seamless user experience.",
  },
  {
    name: "Creative Development",
    description:
      "At our creative development wing, we harness innovation and imagination to design unique digital experiences tailored to your brand's identity. ",
  },
  {
    name: "Animation",
    description:
      "Elevate your brand's storytelling with captivating animations that breathe life into your digital presence.",
  },
  {
    name: "Landing Pages",
    description:
      "Powerful landing pages are essential for converting visitors into customers.",
  },
  {
    name: "Performance Optimization",
    description:
      "In today's fast-paced digital world, website performance is crucial for user satisfaction and search engine rankings.",
  },
  {
    name: "SEO (Search Engine Optimization)",
    description:
      "Drive organic traffic and improve your online visibility with our comprehensive SEO strategies.",
  },
  {
    name: "Social Media Marketing",
    description:
      "Our social media experts harness the power of popular social platforms to engage your audience, increase brand awareness, and drive meaningful interactions.",
  },
];

const Services = () => {
  const ref = React.useRef<any>(null);
  const [current, setCurrent] = React.useState(0);
  return (
    <div className="py-8 md:py-14 flex flex-col gap-14">
      <div className="flex flex-col gap-2  px-[6%]">
        <p className="text-gray-500 text-sm  ">Best Service</p>
        <div className="flex justify-between gap-3 md:gap-6 md:items-center flex-col md:flex-row">
          <h2 className="text-4xl font-semibold md:w-1/2">
            Classify our foucs to break all kinds of {""}
            <span className="text-red-500">Limitation</span>
          </h2>

          <div className="flex gap-3 items-center ml-auto">
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
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        onBeforeInit={(swiper) => {
          ref.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setCurrent(swiper.activeIndex);
        }}
        className="w-full "
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
        {services.map((item, i) => (
          <SwiperSlide
            className={`border  rounded-lg
        ${i === 0 ? (current <= 2 ? "ml-[6%]" : "") : ""}
    
      
        `}
            key={i}
          >
            <div className="p-5">
              <h3 className=" font-semibold">{item.name}</h3>
              <p className="text-gray-500 text-xs ">{item.description}</p>
            </div>
            <Image
              width={500}
              height={"0"}
              src="https://cdn.dribbble.com/userupload/8711750/file/original-32e6bf008fc3e69f8c1655371ea3dac4.png?resize=752x"
              alt="Picture of the author"
              className="w-full aspect-[1/1] object-cover rounded-b-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
