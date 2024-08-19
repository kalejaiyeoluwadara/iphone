import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import Image from "next/image";
import { navLists } from "../constants";
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center    ">
      <nav className="flex  w-full   screen-max-width items-center sm:justify-between ">
        <Image src={appleImg} width={14} height={18} alt="apple image" />
        <div>
          {
            <div className="flex flex-1 justify-center max-sm:hidden ">
              {navLists.map((nav, id) => {
                return (
                  <div
                    className="px-5 text-sm text-gray cursor-pointer hover:text-white transition-all  "
                    key={id}
                  >
                    {nav}
                  </div>
                );
              })}
            </div>
          }
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 ">
          <Image src={searchImg} alt="search" width={18} height={18} />
          <Image src={bagImg} alt="search" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
