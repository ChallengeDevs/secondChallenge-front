"use client";

import { Button } from "@/components/atom/button/Button";
import { Input } from "@/components/atom/input/Input";
import { Header } from "@/components/molecule/header/Header";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="w-full">
      <Header title="login" />
      <form className="bg-primary flex flex-col items-center h-screen justify-center gap-4 u-1:gap-6 bg-gradient-to-t from-gradient2 to-gradient1">
        <Input
          name="email"
          placeholder="johndoe@gmail.com"
          title="email"
          type="email"
        />
        <Input
          name="password"
          placeholder="*******"
          title="password"
          type="password"
        />
        <Button title="login" type="submit" link="/" />
        <Link
          href="/register"
          className="w-80 d-1:w-64 u-0:w-96 u-0:text-xl u-1:w-[30rem] u-1:text-3xl text-black text-lg font-bold text-right hover:text-slate-950 duration-300"
        >
          register
        </Link>
      </form>
    </main>
  );
}
