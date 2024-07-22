"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className=" max-w-screen bg-black px-4 pt-8 sm:px-6 lg:px-[5%]">
        <div className="border-t-[1px] border-[#c7c7c7]/30 mt-6 py-4 flex flex-col-reverse items-center  lg:flex-row lg:justify-between">
          <div className="w-3/12" />
          <p className="text-center text-sm text-quirkyReddishOrange">
            &copy; {new Date().getFullYear()}{" "}
            {"Perini Global. All rights reserved."}
          </p>
          <div className="flex flex-row text-sm justify-center w-full lg:w-3/12 mb-4 lg:mb-0 text-quirkyReddishOrange"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
