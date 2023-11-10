"use client";
import { MenuDropdown } from "@/components/atom/menuDropdown/MenuDropdown";
import Image from "next/image";
import { useState } from "react";
import { Triangle } from "react-loader-spinner";

export const HeaderHome = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
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
      <Triangle
        height="56"
        width="56"
        color="#2D2D2D"
        ariaLabel="triangle-loading"
        visible={true}
      />
      {isDropdownOpen && <MenuDropdown />}
    </header>
  );
};
