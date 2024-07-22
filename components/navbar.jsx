"use client";
import React from "react";
import useStore from "@/utils/store";
import { VscMenu } from "react-icons/vsc";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { title: "About Us", path: "/about" },
  { title: "Distributors", path: "/distributors" },
  { title: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const { alt, setShow, sidebar } = useStore();

  return (
    <div className=" fixed flex flex-row w-screen h-[10vh] z-50 items-center justify-between px-8">
      <div className="flex flex-col items-start w-1/4">
        <a
          onClick={() => {
            setShow({
              show: true,
            });
          }}
          className="cursor-pointer"
        >
          <VscMenu size={24} color="white" />
        </a>
      </div>
      <div className=" flex flex-col items-center relative">
        <div className=" h-[15vh] w-[15vh] relative mt-4">
          <Image
            src={process.env.NEXT_PUBLIC_API_URL + `/perinilogo.png`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className=" flex flex-row items-center justify-end gap-x-8 w-1/4 h-full">
        {navItems.map((item) => (
          <Link key={item.title} href={item.path}>
            <p
              className={`  ${
                alt ? "text-white" : "text-[#392E26]"
              } text-lg font-semibold`}
            >
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
