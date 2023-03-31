import React from "react";
import { MdClear } from "react-icons/md";
import Button from "./Button";

const MenuLink = ({ text }) => {
  return (
    <div className="text-center w-full py-6 font-semibold text-xl cursor-pointer">{text}</div>
  );
};

const PhoneMenuLayout = ({ children, isMenuExpanded, setIsMenuExpanded }) => {
  return (
    <div className="relative">
      <div className="bg-white h-[100vh] absolute z-[1] right-0 w-[80vw] max-sm:w-[90vw] px-8 py-4">
        <div className="flex items-center justify-end">
          <MdClear onClick={()=>setIsMenuExpanded(false)} className="text-xl" />
        </div>
        <div className="mt-5">
          <MenuLink text="Why Hugg" />
          <MenuLink text="Food > Medicine" />
          <MenuLink text="Power of Real Food" />
        </div>
        <div className="mt-5 flex flex-col space-y-2">
          <Button isFilled={true}>⚡ Buy Bitters</Button>
          <Button isFilled={false}>⚡ Buy Tonic</Button>
        </div>
      </div>
      <div className={`${isMenuExpanded?'-translate-x-[80vw] max-sm:-translate-x-[90vw]':''} transition-all ease-in-out duration-[350ms] relative z-[3]`}>
        {isMenuExpanded&&<div className="absolute top-0 z-[2] left-0 w-full h-full bg-black bg-opacity-25"></div>}
        <div className="z-[1] relative">{children}</div>
      </div>
    </div>
  );
};

export default PhoneMenuLayout;
