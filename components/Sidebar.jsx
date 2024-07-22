"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useStore from "@/utils/store";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";

const navbarItems = [
  {
    title: "FABRICS",
    link: "/Fabrics",
  },
  {
    title: "COLLECTIONS",
    link: "/events",
  },
  {
    title: "ABOUT",
    link: "/about",
  },
  {
    title: "CONTACT",
    link: "/contact",
  },
];
export default function MobileSidebar() {
  const router = useRouter();
  const [show, setter] = useState(false);
  const [navbarList, setNavbarList] = useState(navbarItems);
  const { sidebar, setShow } = useStore();

  useEffect(() => {
    console.log(sidebar.show);
    setter(sidebar.show);
  }, [sidebar.show]);
  // Define our base class
  const className =
    "bg-[#ffffff] w-[60vw] transition-[margin-left] ease-in-out duration-500 absolute h-screen top-0 bottom-0 left-0 z-50";
  // Append class based on state of sidebar visiblity
  const appendClass = show ? " ml-[0]" : " -ml-[60vw] ";

  // Clickable menu items
  const MenuItem = ({ icon, name, route }) => {
    // Highlight menu item based on currently displayed route
    const colorClass =
      router.pathname === route
        ? "text-white"
        : "text-white/50 hover:text-white";

    return (
      <Link
        onClick={() => {
          router.push(route);
          setter((oldVal) => !oldVal);
          setShow({
            show: false,
          });
        }}
        href={route}
        className={`flex flex-row items-baseline gap-1 [&>*]:my-auto overflow-hidden  font-medium pl-6 py-3 ${colorClass}`}
      >
        <div className="text-[#181818] text-[5rem] ">
          {name
            .split(" ")[0]
            .match(/./gu)
            .map((char, index) => (
              <span
                className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                key={`${char}-${index}`}
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
        </div>
      </Link>
    );
  };

  // Overlay to prevent clicks in background, also serves as our close button
  const ModalOverlay = () => (
    <div
      className={`flex lg:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
      onClick={() => {
        setShow({
          show: false,
        });
        setter(false);
      }}
    />
  );

  return (
    <>
      <div style={{ zIndex: 100 }} className={`${className} ${appendClass}`}>
        <div className=" flex flex-row justify-start gap-x-4 px-6 items-center mt-8">
          <a
            onClick={() => {
              setShow({
                show: false,
              });
            }}
          >
            <IoCloseOutline className=" text-[#392E26] text-3xl" />
          </a>
          <p className=" text-[#392E26] text-xl pl-2">Menu</p>
        </div>
        <div className="flex flex-col">
          {navbarList.map((item, index) => {
            return <MenuItem key={index} name={item.title} route={item.link} />;
          })}
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
