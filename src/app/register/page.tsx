"use client";

import { Models } from "@/@types";
import { handleRegisterUser } from "@/api/userService";
import { Button } from "@/components/atom/button/Button";
import { Input } from "@/components/atom/input/Input";
import { Header } from "@/components/molecule/header/Header";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

export default function RegisterPage() {
  const router = useRouter()
  const [formValues, setFormValues] = useState<Models.CreateUser>({
    name: "",
    email: "",
    password: "",
    username: ""
  })

  const notifySuccess = (msg: string) => toast.success(msg);
  const notifyFailure = (msg: string) => toast.error(msg);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const response = await handleRegisterUser(formValues)

    if (response.status === 201) {
      setFormValues({
        name: "",
        email: "",
        password: "",
        username: ""
      })

      notifySuccess(response.data.statusMessage)

      setTimeout(() => {
        router.push('/login')
      }, 2000)
    } else {
      notifyFailure(response.data.error)
    }
  }

  return (
    <>
      <ToastContainer autoClose={1500} />
      <main className="min-h-screen">
        <Header title="register" />
        <form onSubmit={(e) => handleSubmit(e)} className="bg-primary flex flex-col items-center justify-center h-[90vh] gap-4 bg-gradient-to-t from-gradient2 to-gradient1">
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            title="name"
            onChange={handleInputChange}
            value={formValues.name}
          />
          <Input
            type="email"
            name="email"
            placeholder="Enter your e-mail"
            title="e-mail"
            onChange={handleInputChange}
            value={formValues.email}
          />
          <Input
            type="text"
            name="username"
            placeholder="Enter your username"
            title="username"
            onChange={handleInputChange}
            value={formValues.username}
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            title="password"
            onChange={handleInputChange}
            value={formValues.password}
          />
          <Button title="register" type="submit" />
          <Link
            href="/login"
            className="w-80 text-black text-lg font-bold text-right hover:text-slate-950 duration-300"
          >
            login
          </Link>
        </form>
      </main>
    </>
  );
}
