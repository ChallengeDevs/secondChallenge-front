import { Button } from "@/components/atom/button/Button";
import { Input } from "@/components/atom/input/Input";
import { Header } from "@/components/molecule/header/Header";
import Link from "next/link";

import React from "react";

export default function page() {
  return (
    <>
      <main className="w-full">
        <Header title="register" />
        <form className="bg-primary flex flex-col items-center justify-center h-screen gap-4 u-1:gap-6 bg-gradient-to-t from-gradient2 to-gradient1">
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            title="name"
          />
          <Input
            type="email"
            name="email"
            placeholder="Enter your e-mail"
            title="e-mail"
          />
          <Input
            type="text"
            name="username"
            placeholder="Enter your username"
            title="username"
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            title="password"
          />
          <Button title="register" type="submit" link="/" />
          <Link
            href="/login"
            className="w-80 d-1:w-64 u-0:w-96 u-0:text-xl u-1:w-[30rem] u-1:text-3xl text-black text-lg font-bold text-right hover:text-slate-950 duration-300"
          >
            login
          </Link>
        </form>
      </main>
    </>
  );
}
