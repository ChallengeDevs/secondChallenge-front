import { Models } from "@/@types";
import { connection } from "@/utils/axios";
import Cookies from "js-cookie";

export const handleLoginUser = async (formValues: Models.LoginUser) => {
  const response = await connection.post("/user/login", formValues);
  if (response.status === 200) {
    Cookies.set("token", response.data.token, {
      secure: true,
      sameSite: "strict",
    });
    return response;
  }
};

export const handleRegisterUser = async (formValues: Models.CreateUser) => {
  const response = await connection.post("/user", formValues);
  return response;
};
