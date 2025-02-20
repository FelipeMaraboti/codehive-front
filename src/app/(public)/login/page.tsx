'use client'

import { signIn } from "next-auth/react"

export default function Login() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <nav className="w-[900px] mt-6 flex items-start justify-start">
        <img src="/logo.png" alt="logo.png" />
      </nav>
      <div className="h-screen flex items-center justify-center">
        <div className="w-[300px] h-[315px] p-2 rounded-[10px] bg-[#d9d9d9] bg-opacity-[5%]">
          <a href="/" className="flex items-center justify-left pl-2 pt-2 gap-2 ">
            <img src="/arrow_back.png" alt="arrow_back.png" />
            <p className="text-[12px]">Go back</p>
          </a>
          <div className="flex flex-col items-center justify-center gap-0 mt-6">
            <h1 className="text-[30px] font-inter bg-gradient-to-r from-[#FFF70C] to-[#EEE] bg-clip-text text-transparent ">Wellcome!</h1>
            <p className="text-[18px] font-inter">Thanks for using our app</p>
          </div>
          <div className="flex items-center justify-center mt-6">
            <p className="text-[14px] font-inter">Login with:</p>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 gap-2">
            <button
              className="flex items-center justify-center h-[30px] w-[280px] gap-2 bg-slate-950 bg-opacity-[25%] rounded-[5px] hover:opacity-[85%]"
              onClick={() => signIn("github", { callbackUrl: "http://localhost:3000/aplication" })}
            >
              <img src="/github.png" alt="github.png" className="size-4" />
            </button>
            <p className="text-[12px]">Or</p>
            <button
              className="flex items-center justify-center h-[30px] w-[280px] gap-2 bg-slate-950 bg-opacity-[25%] rounded-[5px] hover:opacity-[85%]"
              onClick={() => signIn("google", { callbackUrl: "http://localhost:3000/aplication" })}
            >
              <img src="/google.png" alt="github.png" className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}