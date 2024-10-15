"use client";

import Image from "next/image";
import background from "../../../assets/background-image.jpeg";
import React from "react";
import { ErrorMessage, Field, Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppStore } from "@/Redux/store";
import {
  emailVerificationProcess,
  registerUser,
} from "@/Redux/Slice/registerSlice";
import toast from "react-hot-toast";
import Loading from "@/app/components/loader/loading";

interface Values {
  name: string;
  email: string;
  password: string;
}

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { registerData, isLoading } = useSelector(
    (state: AppStore) => state.register
  );
  console.log(registerData, "from register");

  const values: Values = {
    name: "",
    email: "",
    password: "",
  };

  const handleEmailVerification = () => {
    const verificationData = {
      id: registerData.id,
      token: registerData.emailVerificationTOken,
    };
    dispatch(emailVerificationProcess(verificationData)).then((res: any) => {
      if (res.payload?.status == "200") {
        router.push("/auth/login");
      }
    });
  };

  const handleSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    console.log(values);
    dispatch(registerUser(values)).then((res: any) => {
      if (res.payload?.status == "200") {
        toast(
          (t) => (
            <span style={{ width: "30vw" }} className="font-mono">
              <b>Verify your email to complete registration process</b>
              <br />
              <button
                className="dismissButton  "
                onClick={() => toast.dismiss(t.id)}
              >
                Dismiss
              </button>
              <button
                className="verifyButton hover:shadow-black hover:shadow-md"
                onClick={() => {
                  handleEmailVerification();
                  toast.dismiss(t.id);
                }}
              >
                Verify
              </button>
            </span>
          ),
          {
            duration: 15000,
          }
        );
      }
    });
    setSubmitting(false);
  };

  return (
    <div>
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
            <p className="text-white underline text-lg md:text-xl">Register</p>
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
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className="bg-white text-neutral-700 text-sm rounded-3xl block p-2.5 w-64 mt-3 mb-2
        focus:outline-none focus:ring-0 focus:shadow-black focus:shadow-md"
                  />
                  <ErrorMessage className="error" name="name" component="div" />
                  <Field
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="bg-white text-neutral-700 text-sm rounded-3xl block p-2.5 w-64 mt-3 mb-2
        focus:outline-none focus:ring-0 focus:shadow-black focus:shadow-md"
                  />
                  <ErrorMessage
                    className="error"
                    name="email"
                    component="div"
                  />
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
                    Register
                  </button>
                  {isLoading ? <Loading /> : <p></p>}
                </form>
              )}
            </Formik>
            <p className="mt-16 text-center text-white">
              <span>Already a user?</span>
              <span
                className="text-pink-400 cursor-pointer underline"
                onClick={() => router.push("/auth/login")}
              >
                LOGIN
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
