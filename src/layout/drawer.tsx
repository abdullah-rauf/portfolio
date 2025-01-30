"use client";
import React, { useEffect } from "react";

const Drawer = ({ isOpen, setIsOpen }: any) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed w-[50%] container top-0 right-0 h-full bg-white  shadow-lg z-50 transition-transform transform  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="">
          <div className="w-full flex justify-start relative ">
            <svg
              onClick={() => setIsOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 absolute -left-0 top-2 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div className="flex w-full justify-center py-5   ">
            {/* <Link href="/">
              <img
                onClick={() => setIsOpen(false)}
                src="/assets/header-logo.svg"
                className="cursor-pointer"
                alt="Logo"
              />
            </Link> */}
          </div>

          <div className="grid items-center gap-6 justify-start pt-20 relative">
            {/* {NAV_ITEMS?.map((item: any, index: any) => (
              <p
                onClick={() => {
                  setItemIndex(index);
                  setIsOpen(false);
                }}
                key={index}
                className={`text-[22px] duration-500 cursor-pointer font-normal ${
                  pathname === index
                    ? "hover:text-white text-[#FBAE39]"
                    : "text-black hover:text-[#FBAE39]"
                }`}
              >
                {item?.label}
              </p>
            ))} */}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-50"
          style={{ zIndex: 999 }}
        ></div>
      )}
    </>
  );
};

export default Drawer;
