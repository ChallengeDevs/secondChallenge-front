"use client";
import { handlerScoreRequest } from "@/api/scoreService";
import { CardMainHome } from "@/components/atom/cardMainHome/CardMainHome";
import Image from "next/image";
import React, { useEffect } from "react";

export const MainHome = () => {
  useEffect(() => {
    handlerScoreRequest();
  }, []);

  return (
    <>
      <main className="flex flex-wrap items-center justify-center py-6 px-20 gap-4 bg-gradient-to-t from-gradient2 to-gradient1">
        <CardMainHome />
        <CardMainHome />
        <CardMainHome />
        <CardMainHome />
        <div className="w-full flex items-center justify-center gap-28 p-2">
          <Image
            src="/imgs/left.png"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-70 duration-300"
            alt="Pagination left button"
            aria-label="Pagination left button"
          />
          <Image
            src="/imgs/right.png"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-70 duration-300"
            alt="Pagination right button"
            aria-label="Pagination left button"
          />
        </div>
      </main>
    </>
  );
};
