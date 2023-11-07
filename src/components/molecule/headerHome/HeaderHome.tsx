"use client";
import { MenuDropdown } from "@/components/atom/menuDropdown/MenuDropdown";
import Image from "next/image";
import { useState } from "react";
import ReactLoading from "react-loading";

export const HeaderHome = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="flex justify-between p-6 items-center w-full relative bg-primary">
        <Image
          src="/imgs/menu.png"
          width={32}
          height={32}
          alt="menu"
          onClick={toggleDropdown}
          aria-label="Menu opening button"
          className="cursor-pointer hover:opacity-70 duration-300"
        />
        <ReactLoading
          type="spin"
          color="#2d2d2d"
          height={36}
          width={36}
          delay={3000}
        />
        {isDropdownOpen && <MenuDropdown />}
      </header>
    </>
  );
};
