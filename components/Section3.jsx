"use client";
import React, { useState, useEffect } from "react";
import RevealOnScroll from "./RevealOnScroll";
import useStore from "@/utils/store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { fabrics } from "@/utils/consts";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const colors = ["bg-[#702C28]", "bg-[#632f09]", "bg-[#788668]"];

const HomeSection3 = () => {
  const [refresh, setRefresh] = useState(false);
  const [currentColor, setCurrentColor] = useState(0);
  const [flip, setFlip] = useState(false);

  const { alt, setAlt } = useStore();

  return (
    <div
      className={`w-screen h-full lg:h-screen flex flex-col transition-all duration-[600ms] ${colors[currentColor]} items-center  py-8 lg:py-0`}
    >
      <div className="flex flex-col items-center w-full  h-[100vh] ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          speed={2000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            duration: 2,
          }}
          loop={true}
          onSlideChange={() =>
            setCurrentColor((currentColor + 1) % colors.length)
          }
          modules={[Autoplay, Navigation]}
          className="mySwiper  h-full w-full -z-10 "
        >
          {fabrics.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="h-[100vh] w-screen flex relative"
              >
                <div
                  className={`h-full md:h-[100vh] relative w-screen flex flex-row justify-between items-center `}
                >
                  <div className=" flex flex-col items-center w-1/4">
                    <RevealOnScroll
                      addedClasses={`flex flex-col h-[50vh] w-[50vh] animate-slideInLeft `}
                    >
                      <div className="relative h-full w-full transform   ">
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_API_URL + `${item.image1}`
                          }
                          layout="fill"
                          className="h-full w-full rotate-[30deg] object-cover rounded-[5vw] shadow-lg"
                        />
                      </div>
                    </RevealOnScroll>
                  </div>
                  <div className=" flex flex-col items-center justify-center w-1/2">
                    <p className=" text-xl border-b-[0.5px] border-white ">
                      {item.subtitle}
                    </p>
                    <h2 className=" text-[7rem]  overflow-hidden leading-[6.5rem] mt-[5vh]">
                      {item.title
                        .split(" ")[0]
                        .match(/./gu)
                        .map((char, index) => (
                          <span
                            className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                            key={`${char}-${index}`}
                            style={{ animationDelay: `${1 + index * 0.05}s` }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                    </h2>
                    <h2 className=" text-[7rem]  overflow-hidden leading-[6.5rem] mt-[2.5vh]">
                      {item.title
                        .split(" ")[1]
                        .match(/./gu)
                        .map((char, index) => (
                          <span
                            className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                            key={`${char}-${index}`}
                            style={{ animationDelay: `${1 + index * 0.05}s` }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                    </h2>

                    <button className=" px-8 py-2 relative border-[0.5px] border-white rounded-full mt-[5vh] animate-slideUp">
                      <p className=" text-white">DISCOVER COLLECTION</p>
                    </button>
                  </div>
                  <div className=" flex flex-col items-center w-1/4">
                    <RevealOnScroll
                      addedClasses={`flex flex-col h-[50vh] w-[50vh] animate-slideInRight `}
                    >
                      <div className="relative h-full w-full transform   ">
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_API_URL + `${item.image2}`
                          }
                          layout="fill"
                          className="h-full w-full rotate-[-30deg] object-cover rounded-[5vw] shadow-lg"
                        />
                      </div>
                    </RevealOnScroll>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <RevealOnScroll
        threshold={0.5}
        refresh={() => {
          setRefresh(!refresh);
        }}
        className=" absolute bottom-0 flex flex-col w-full h-1"
      />
    </div>
  );
};

export default HomeSection3;
