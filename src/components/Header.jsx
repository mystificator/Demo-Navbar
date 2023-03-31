import React from "react";
import Logo from "../assets/logo.webp";
import Button from "./Button";
import CartIcon from "./CartIcon";
import { MdMenu } from "react-icons/md";
const Header = ({ isMenuExpanded, setIsMenuExpanded }) => {
  return (
    <div className="px-24 max-2xl:px-20 max-lg:px-9 max-xl:px-16 max-[1150px]:px-4 flex py-6  items-center justify-between">
      <div className="flex items-center gap-7">
        <div>
          <img src={Logo} className="w-[90px] cursor-pointer max-lg:w-[70px]"></img>
        </div>
        <div className="text-lg font-[500] cursor-pointer max-lg:hidden">Why Hugg</div>
        <div className="text-lg font-[500] cursor-pointer max-lg:hidden">
          {"Food > Medicine"}
        </div>
        <div className="text-lg font-[500] cursor-pointer max-lg:hidden">
          {"Power of Real Food"}
        </div>
      </div>
      <div className="flex items-center gap-3">
        {!isMenuExpanded&&<MdMenu
          onClick={() => setIsMenuExpanded(true)}
          size={36}
          className="hidden max-lg:block"
        />}
        <div className="flex items-center max-lg:hidden gap-1">
          <CartIcon />
          <div className="w-[20px] h-[20px] text-sm rounded-full bg-gray-200 flex items-center justify-center">
            1
          </div>
        </div>
        <Button isFilled={true} className="max-lg:hidden">
          ⚡ Buy Bitters
        </Button>
        <Button isFilled={false} className="max-lg:hidden">
          ⚡ Buy Tonic
        </Button>
      </div>
    </div>
  );
};

export default Header;
