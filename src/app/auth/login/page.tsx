"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import background from "../../../assets/background-image.jpeg";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { ErrorMessage, Field, Formik, FormikHelpers } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "@/Redux/Slice/loginSlice";
import { AppDispatch, AppStore } from "@/Redux/store";
import toast from "react-hot-toast";
import Loading from "@/app/components/loader/loading";

interface Values {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>()
  const {isLoading} = useSelector((state: AppStore)=>state.login)
  const token = localStorage.getItem("token")

  const handleSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    dispatch(LoginUser(values))
    .then((res: any)=>{
      if(res.payload?.status == "200"){
        toast.success("Logged in.!")
        router.push("/dashboard")
      }
    })
    setSubmitting(false);
   
  };

  useEffect(()=>{
    if(!token || token == "undefined"){
      router.push("/auth/login")
    }
  },[token])

  const values: Values = {
    email: "",
    password: "",
  };

  return (
    <div>
      <div className="relative w-full h-screen flex flex-row justify-end font-mono">
        <Image
          src={background}
          alt="background image"
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 1200px) 100vw, (max-height: 768px) 40vh, 33vw"
          className="z-[-2]"
        />
        <div
          className="w-full sm:w-[60%] md:w-[40%] lg:w-[30%] h-[80%] bg-pink-200 bg-opacity-30 m-5 mt-[4.5%] rounded-lg
      flex flex-col items-center justify-center"
        >
          <p className="text-white underline text-lg md:text-xl">Login</p>
          <Formik
            initialValues={values}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit }) => (
              <form
                className="flex flex-col mt-5 w-full items-center"
                onSubmit={handleSubmit}
                method="post"
              >
                <Field
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="bg-white text-neutral-700 text-sm rounded-3xl block p-2.5 w-64 mt-3 mb-2
        focus:outline-none focus:ring-0 focus:shadow-black focus:shadow-md"
                />
                <ErrorMessage className="error" name="email" component="div" />
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="bg-white text-neutral-700 text-sm rounded-3xl block p-2.5 w-64 m-2 
        focus:outline-none focus:ring-0 focus:shadow-black focus:shadow-md"
                />
                <ErrorMessage
                  className="error"
                  name="password"
                  component="div"
                />
                <button
                  type="submit"
                  className="bg-slate-800 py-2 border border-transparent text-center text-sm
        text-white shadow-md focus:bg-slate-700 hover:shadow-black hover:shadow-sm
        focus:shadow-none active:bg-slate-700 hover:bg-gray-400 hover:text-black rounded-full
        w-[40%] mt-5"
                >
                  Login
                </button>
                {
                  isLoading?
                  <Loading/>:
                  <p></p>
                }
              </form>
            )}
          </Formik>
          <p className="mt-20 text-center">
            <span className="text-white">Not a user?</span>
            <span
              className="text-pink-400 cursor-pointer underline"
              onClick={() => router.push("/auth/register")}
            >
              REGISTER
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


