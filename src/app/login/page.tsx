"use client";

import { Models } from "@/@types";
import { handleLoginUser } from "@/api/userService";
import { Button } from "@/components/atom/button/Button";
import { Input } from "@/components/atom/input/Input";
import { Header } from "@/components/molecule/header/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter()
  const [formValues, setFormValues] = useState<Models.LoginUser>({
    email: "",
    password: "",
  })

  const notifySuccess = (msg: string) => toast.success(msg);
  const notifyFailure = (msg: string) => toast.error(msg);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const response = await handleLoginUser(formValues)

    if (response?.status === 200) {
      setFormValues({
        email: "",
        password: "",
      })

      notifySuccess(response.data.statusMessage)

      setTimeout(() => {
        router.push('/home')
      }, 2000)
    } else {
      notifyFailure(response?.data.error)
    }
  }
  return (
    <>
      <ToastContainer autoClose={1500} />
      <main className="w-full">
        <Header title="login" />
        <form onSubmit={handleSubmit} className="bg-primary flex flex-col items-center h-screen justify-center gap-4 u-1:gap-6 bg-gradient-to-t from-gradient2 to-gradient1">
          <Input
            name="email"
            placeholder="johndoe@gmail.com"
            title="email"
            type="email"
            onChange={handleInputChange}
            value={formValues.email}
          />
          <Input
            name="password"
            placeholder="*******"
            title="password"
            type="password"
            onChange={handleInputChange}
            value={formValues.password}
          />
          <Button title="login" type="submit" />
          <Link
            href="/register"
            className="w-80 d-1:w-64 u-0:w-96 u-0:text-xl u-1:w-[30rem] u-1:text-3xl text-black text-lg font-bold text-right hover:text-slate-950 duration-300"
          >
            register
          </Link>
        </form>
      </main>
    </>
  );
}
