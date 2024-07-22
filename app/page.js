"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { PiShootingStarLight } from "react-icons/pi";
import HomeSection2 from "@/components/Section2";
import HomeSection3 from "@/components/Section3";

let title = "EXCLUSIVE HOME";

export default function Home() {
  const ref = useRef(null);
  return (
    <main className=" w-screen min-h-screen bg-white">
      <div className=" flex flex-col min-h-screen h-screen w-screen relative">
        <div className=" absolute left-0 top-0 w-full h-full z-0">
          <video autoPlay muted loop className=" w-full h-full object-cover">
            <source src="/bgvideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className=" absolute left-0 top-0 w-full h-full z-10 bg-black/20"></div>
        <div className=" absolute w-full flex flex-col items-center z-20 bottom-[2.5vh]">
          <p className=" text-white">SCROLL TO DISCOVER</p>
        </div>
        <div className=" flex flex-col items-center justify-center w-full h-full z-20">
          <div className=" flex flex-col items-center w-full text-center justify-center">
            <div className=" flex flex-row justify-center items-center border-b-[0.5px] border-white">
              <PiShootingStarLight size={20} color="white" />
              <h1 className=" text-white text-xl font-semibold ml-2">
                NEW COLLECTION 2024
              </h1>
            </div>
            <h2 className=" text-[7rem]  overflow-hidden leading-[6.5rem] mt-[5vh]">
              {title.match(/./gu).map((char, index) => (
                <span
                  className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>
            <h2 className=" text-[7rem] overflow-hidden leading-[6.5rem] mt-4">
              {"TEXTILES".match(/./gu).map((char, index) => (
                <span
                  className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>

            <a className=" cursor-pointer flex flex-col items-center px-8 py-2 mt-[10vh] rounded-full border-[0.5px] border-white">
              <p className=" text-white text-sm font-semibold">
                DISCOVER ALL FABRICS
              </p>
            </a>
          </div>
        </div>
      </div>
      <div ref={ref}>
        <HomeSection2 refObj={ref} />
      </div>
      <HomeSection3 />
    </main>
  );
}
