"use client";

import { CopilotPopup } from "@copilotkit/react-ui";
import Image from "next/image";
import background from "../assets/background-image.jpeg";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  console.log(process.env.OPENAI_API_KEY, ": api key");
  return (
    <>
      <div>
        {" "}
        <div className="relative w-[100vw] h-[100vh] flex flex-row justify-end font-mono">
          <Image
            src={background}
            alt="background image"
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 1200px) 100vw, (max-height: 768px) 40vh, 33vw"
            className="z-[-1]"
          />
          <div className="w-[100%] h-[100vh] flex flex-col">
            <div className="w-[100%] h-[30%] text-4xl text-white flex flex-col items-end justify-center font-bold leading-5">
              <p className="tracking-widest">GROW BETTER.</p>
              <br />
              <p className="tracking-widest">GROW FASTER.</p>
              <br />
              <p className="tracking-widest">GROW TOGETHER.</p>
              <br />
            </div>
            <div className="w-[100%] h-[70%] flex flex-row justify-end p-4">
              <button
                className="rounded-md h-[10%] bg-white py-2 px-4 border border-transparent font-mono
               text-center text-sm text-slate-800 transition-all shadow-md hover:shadow-lg focus:bg-slate-700
                focus:shadow-none active:bg-slate-700 hover:bg-slate-700 hover:text-white ml-2"
                type="button"
                onClick={() => router.push("/auth/login")}
              >
                Login
              </button>
              <button
                className="rounded-md h-[10%] bg-white py-2 px-4 border border-transparent font-mono
               text-center text-sm text-slate-800 transition-all shadow-md hover:shadow-lg focus:bg-slate-700
                focus:shadow-none active:bg-slate-700 hover:bg-slate-700 hover:text-white ml-2"
                type="button"
                onClick={() => router.push("/auth/register")}
              >
                Signup
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
