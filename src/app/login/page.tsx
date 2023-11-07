"use client"

import { Button } from "@/components/atom/button/Button";
import { Input } from "@/components/atom/input/Input";
import { Header } from "@/components/molecule/header/Header";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen">
    <Header title="login" />
    <form className="bg-primary flex flex-col items-center justify-center h-[90vh] gap-4 bg-gradient-to-t from-gradient2 to-gradient1">
      <Input name="username" placeholder="johndoe" title="username" type="text" />
      <Input name="password" placeholder="*******" title="password" type="password" />
      <Button title="login" type="submit" link="/" />
      <Link href="/register" className="w-80 text-black text-lg font-bold text-right hover:text-slate-950 duration-300">register</Link>
    </form>
    </main>
  );
}
