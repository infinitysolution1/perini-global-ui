"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const title = "DISCOVER";
const title2 = "NEW FABRICS";

const HomeSection2 = (ref) => {
  const [scrolled, setScrolled] = useState(false);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  useEffect(() => {
    if (scrollYProgress.current > 0.5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [scrollYProgress]);

  return (
    <section className="relative h-full lg:h-[100vh] bg-[#FDF8F2] w-full overflow-hidden">
      <div className=" w-full flex flex-row justify-center h-full">
        <div className=" flex flex-col items-center w-1/4">
          <motion.div style={{ y: x }} className="flex flex-col gap-y-[5vh]">
            {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((cycle, index) => {
              return (
                <div
                  key={index}
                  className={` flex flex-col h-full w-[15vh]  animate-bounce `}
                >
                  <div
                    className={`relative h-full w-full bg-[#EFE6DA] rounded-lg shadow-md ${
                      index % 2 == 0
                        ? "transform rotate-6"
                        : "tranform -rotate-6"
                    }`}
                  >
                    <div className="relative h-[15vh] w-full rounded-lg overflow-hidden">
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_API_URL +
                          `/fabric${cycle}.png`
                        }
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center px-4 py-4">
                      <h3 className="text-[#392E26] text-lg font-semibold">
                        Fabric {cycle}
                      </h3>
                      <p className="text-[#392E26] text-xs">PRINT</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
        <div className=" flex flex-col items-center justify-center ">
          <RevealOnScroll
            threshold={0.5}
            addedClasses=" flex flex-col w-full  items-center text-center"
          >
            <h2 className=" text-[6rem] text-[#392E26]  overflow-hidden leading-[5.5rem] mt-[5vh]">
              {title.match(/./gu).map((char, index) => (
                <span
                  className="animate-text-reveal inline-block  [animation-fill-mode:backwards]"
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${2 + index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>
            <h2 className=" text-[6rem] text-[#392E26]  overflow-hidden leading-[5.5rem] mt-[2.5vh]">
              {title2.match(/./gu).map((char, index) => (
                <span
                  className="animate-text-reveal inline-block [--slidein-delay:1000ms] [animation-fill-mode:backwards]"
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${2 + index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>
          </RevealOnScroll>
        </div>
        <div className=" flex flex-col items-center w-1/4">
          <motion.div style={{ y: x }} className="flex flex-col gap-y-[5vh]">
            {[4, 5, 1, 2, 3, 4, 5, 1, 2, 3].map((cycle, index) => {
              return (
                <div
                  key={index}
                  className={` flex flex-col h-full w-[15vh]  animate-bounce `}
                >
                  <div
                    className={`relative h-full w-full bg-[#EFE6DA] rounded-lg shadow-md ${
                      index % 2 == 0
                        ? "transform rotate-6"
                        : "tranform -rotate-6"
                    }`}
                  >
                    <div className="relative h-[15vh] w-full rounded-lg overflow-hidden">
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_API_URL +
                          `/fabric${cycle}.png`
                        }
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center px-4 py-4">
                      <h3 className="text-[#392E26] text-lg font-semibold">
                        Fabric {cycle}
                      </h3>
                      <p className="text-[#392E26] text-xs">PRINT</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div ref={targetRef} className=" w-full " />
      {/* <div className={` sticky left-0 top-[25vh] w-full z-0 `}>
        <RevealOnScroll
          threshold={0.5}
          addedClasses=" flex flex-col w-full  items-center text-center"
        >
          <h2 className=" text-[7rem] text-[#392E26]  overflow-hidden leading-[6.5rem] mt-[5vh]">
            {title.match(/./gu).map((char, index) => (
              <span
                className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                key={`${char}-${index}`}
                style={{ animationDelay: `${1 + index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <h2 className=" text-[7rem] text-[#392E26]  overflow-hidden leading-[6.5rem] mt-[2.5vh]">
            {title2.match(/./gu).map((char, index) => (
              <span
                className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                key={`${char}-${index}`}
                style={{ animationDelay: `${1 + index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
        </RevealOnScroll>
      </div>
      <div className="sticky top-[12.5vh]  hidden lg:flex flex-col h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex flex-row gap-x-[25vh] mt-[15vh]"
        >
          {[1, 2, 3, 4, 5].map((cycle, index) => {
            return (
              <div
                key={index}
                className={` flex flex-col h-full w-[45vh]  animate-bounce `}
              >
                <div
                  className={`relative h-full w-full bg-[#EFE6DA] rounded-lg shadow-md ${
                    index % 2 == 0 ? "transform rotate-6" : "tranform -rotate-6"
                  }`}
                >
                  <div className="relative h-[45vh] w-full rounded-lg overflow-hidden">
                    <Image
                      src={`/fabric${cycle}.png`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center px-4 py-4">
                    <h3 className="text-[#392E26] text-3xl font-semibold">
                      Fabric {cycle}
                    </h3>
                    <p className="text-[#392E26] text-base">PRINT</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div> */}
    </section>
  );
};

export default HomeSection2;
